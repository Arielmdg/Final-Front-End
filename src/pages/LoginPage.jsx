import { useState } from "react";
import {
  GraduationCap,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Email dan password wajib diisi.");
      return;
    }

    try {
      setSubmitting(true);
      await login(email.trim(), password);
    } catch (err) {
      console.error("Firebase Login Error:", err);

      const messages = {
        "auth/invalid-credential":
          "Email atau password tidak cocok.",
        "auth/user-not-found":
          "Akun mahasiswa tidak ditemukan.",
        "auth/wrong-password":
          "Password yang kamu masukkan salah.",
        "auth/invalid-email":
          "Format email tidak valid.",
        "auth/too-many-requests":
          "Terlalu banyak percobaan. Silakan coba kembali nanti.",
        "auth/network-request-failed":
          "Koneksi internet bermasalah.",
        "auth/invalid-api-key":
          "Konfigurasi Firebase tidak valid.",
        "auth/operation-not-allowed":
          "Metode login Email/Password belum diaktifkan.",
        "auth/user-disabled":
          "Akun mahasiswa sedang dinonaktifkan.",
        "auth/unauthorized-domain":
          "Domain aplikasi belum diizinkan di Firebase.",
      };

      const code = err?.code || "unknown";
      const friendlyMessage =
        messages[code] || "Login gagal. Terjadi kesalahan pada proses autentikasi.";

      setError(
        `${friendlyMessage}\nKode: ${code}\nDetail: ${err?.message || "Tidak ada detail error."}`
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen bg-[#F6F8F7]">
      {/* LEFT PANEL */}
      <section className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-gradient-to-br from-[#174B3D] to-[#10382F] p-12 text-white lg:flex">
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
            <GraduationCap size={28} />
          </div>

          <div>
            <h1 className="text-xl font-bold">SIAKAD</h1>
            <p className="text-xs text-green-100/70">
              Portal Akademik Mahasiswa
            </p>
          </div>
        </div>

        <div className="relative z-10 max-w-lg">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold tracking-widest">
            STUDENT ACADEMIC PORTAL
          </span>

          <h2 className="mt-7 text-5xl font-bold leading-tight tracking-tight">
            Your academic journey starts here.
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-green-100/75">
            Satu portal untuk mengelola rencana studi, memantau
            perkembangan akademik, dan mengakses layanan perkuliahan.
          </p>

          <div className="mt-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <ShieldCheck size={23} />
            </div>

            <div>
              <p className="text-sm font-semibold">
                Akses Akademik Terintegrasi
              </p>
              <p className="mt-1 text-xs text-green-100/65">
                Sistem autentikasi mahasiswa yang aman.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-xs text-green-100/50">
          SIAKAD · Sistem Informasi Akademik
        </div>

        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border-[55px] border-white/5" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full border-[55px] border-white/5" />
      </section>

      {/* RIGHT PANEL */}
      <section className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF3EF] text-[#176B53] lg:hidden">
            <GraduationCap size={30} />
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-[#176B53]">
              WELCOME BACK
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800">
              Login Mahasiswa
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Silakan masuk menggunakan akun akademik yang telah
              didaftarkan oleh administrator.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-9 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold text-slate-700"
              >
                Email Mahasiswa
              </label>

              <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-[#176B53] focus-within:ring-4 focus-within:ring-green-800/5">
                <Mail size={18} className="text-slate-400" />

                <input
                  id="email"
                  type="email"
                  autoComplete="username"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="nama@email.com"
                  className="w-full bg-transparent px-3 py-4 text-sm outline-none placeholder:text-slate-300"
                  required
                  disabled={submitting}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-xs font-semibold text-slate-700"
              >
                Password
              </label>

              <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-[#176B53] focus-within:ring-4 focus-within:ring-green-800/5">
                <LockKeyhole size={18} className="text-slate-400" />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Masukkan password"
                  className="w-full bg-transparent px-3 py-4 text-sm outline-none placeholder:text-slate-300"
                  required
                  disabled={submitting}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Sembunyikan password" : "Lihat password"
                  }
                  className="text-slate-400 hover:text-slate-700"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div
                role="alert"
                className="whitespace-pre-line break-words rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-xs leading-relaxed text-red-600"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#176B53] py-4 text-sm font-bold text-white shadow-lg shadow-green-900/10 transition hover:bg-[#125640] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Memproses login..." : "Masuk ke Portal"}

              {!submitting && <ArrowRight size={18} />}
            </button>
          </form>

          <div className="mt-8 rounded-xl bg-slate-100/80 p-4">
            <p className="text-xs leading-relaxed text-slate-500">
              Belum memiliki akun atau mengalami kendala login? Hubungi
              administrator akademik kampus.
            </p>
          </div>

          <p className="mt-8 text-center text-[11px] text-slate-400">
            © 2026 SIAKAD · Sistem Informasi Akademik
          </p>
        </div>
      </section>
    </main>
  );
}