
import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../config/firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileError, setProfileError] = useState("");

  useEffect(() => {
    let unsubscribeProfile = null;

    const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
      if (unsubscribeProfile) {
        unsubscribeProfile();
        unsubscribeProfile = null;
      }

      setLoading(true);
      setProfileError("");

      if (!firebaseUser) {
        setUser(null);
        setStudent(null);
        setLoading(false);
        return;
      }

      setUser(firebaseUser);
      setStudent(null);

      const studentRef = doc(db, "students", firebaseUser.uid);

      unsubscribeProfile = onSnapshot(
        studentRef,
        (snapshot) => {
          if (!snapshot.exists()) {
            setStudent(null);
            setProfileError(
              "Profil mahasiswa belum terdaftar. Hubungi administrator akademik."
            );
          } else {
            setStudent({
              uid: firebaseUser.uid,
              ...snapshot.data(),
            });
            setProfileError("");
          }

          setLoading(false);
        },
        (error) => {
          console.error("Gagal mengambil profil:", error);

          setStudent(null);

          setProfileError(
            error.code === "permission-denied"
              ? "Akses profil ditolak. Periksa Firestore Security Rules."
              : "Gagal mengambil profil mahasiswa. Periksa koneksi internet."
          );

          setLoading(false);
        }
      );
    });

    return () => {
      unsubscribeAuth();

      if (unsubscribeProfile) {
        unsubscribeProfile();
      }
    };
  }, []);

  async function login(email, password) {
    const credential = await signInWithEmailAndPassword(
      auth,
      email.trim(),
      password
    );

    return credential.user;
  }

  async function logout() {
    await signOut(auth);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        student,
        loading,
        profileError,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth harus digunakan di dalam AuthProvider");
  }

  return context;
}
