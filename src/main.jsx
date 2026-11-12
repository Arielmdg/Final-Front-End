
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import LoginPage from "./pages/LoginPage";
import { AuthProvider, useAuth } from "./context/AuthContext";

import "./index.css";

function AuthGate() {
  const { user, student, loading, profileError } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F6F8F7]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176B53]" />
          <p className="mt-4 text-sm text-slate-500">
            Memeriksa akun akademik...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  if (!student) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F6F8F7] p-6">
        <div className="max-w-md rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
          <h1 className="text-xl font-bold text-slate-800">
            Profil Mahasiswa Belum Tersedia
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            {profileError ||
              "Akun berhasil masuk, tetapi profil mahasiswa belum ditemukan."}
          </p>

          <button
            onClick={async () => {
              const { logout } = await import("./authActions");
              await logout();
            }}
            className="mt-6 rounded-xl bg-[#176B53] px-5 py-3 text-sm font-semibold text-white"
          >
            Kembali ke Login
          </button>
        </div>
      </div>
    );
  }

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AuthGate />
    </AuthProvider>
  </React.StrictMode>
);
