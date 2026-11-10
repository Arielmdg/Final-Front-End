
import { useState } from "react";
import {
  LayoutDashboard,
  ClipboardList,
  CalendarDays,
  BookOpen,
  Users,
  FileText,
  MessageCircle,
  CircleHelp,
  GraduationCap,
  Bell,
  Menu,
  X,
  ArrowUpRight,
  Clock3,
  MapPin,
  Sparkles,
  ChevronRight,
  BookOpenCheck,
  ShieldCheck,
  CalendarCheck2,
} from "lucide-react";

/* ========================================
   NAVIGATION DATA
======================================== */

const navigationGroups = [
  {
    title: "MENU UTAMA",
    items: [
      { label: "Dashboard", icon: LayoutDashboard },
      { label: "Pengisian KRS", icon: ClipboardList },
      { label: "Jadwal Kuliah", icon: CalendarDays },
      { label: "Katalog Mata Kuliah", icon: BookOpen },
      { label: "Direktori Dosen", icon: Users },
    ],
  },
  {
    title: "LAYANAN AKADEMIK",
    items: [
      { label: "Transkrip Nilai", icon: FileText },
      { label: "Konsultasi Akademik", icon: MessageCircle },
    ],
  },
];

/* ========================================
   SIDEBAR COMPONENT
======================================== */

function Sidebar({
  activePage,
  setActivePage,
  mobileMenuOpen,
  setMobileMenuOpen,
  mobile = false,
}) {
  const sidebarClass = mobile
    ? `fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`
    : "fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-slate-100 bg-white lg:flex";

  function handleNavigation(label) {
    setActivePage(label);
    setMobileMenuOpen(false);
  }

  return (
    <aside className={sidebarClass}>
      {/* BRAND */}
      <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#176B53] text-white shadow-lg shadow-green-900/10">
            <GraduationCap size={25} strokeWidth={2.2} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-[#173B32]">
              SIAKAD
            </h1>
            <p className="text-[11px] font-medium text-slate-400">
              Portal Akademik
            </p>
          </div>
        </div>

        {mobile && (
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Tutup menu"
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* NAVIGATION */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {navigationGroups.map((group) => (
          <div key={group.title} className="mb-8">
            <p className="mb-3 px-3 text-[10px] font-bold tracking-[0.15em] text-slate-400">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = activePage === item.label;

                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.label)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[13px] transition-all ${
                      isActive
                        ? "bg-[#EAF3EF] font-semibold text-[#176B53]"
                        : "font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                  >
                    <Icon size={19} strokeWidth={isActive ? 2.3 : 1.8} />
                    <span>{item.label}</span>

                    {isActive && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#176B53]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* HELP CARD */}
      <div className="border-t border-slate-100 p-4">
        <div className="mb-4 rounded-2xl bg-[#F4F7F5] p-4">
          <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#176B53]">
            <CircleHelp size={19} />
          </div>

          <p className="text-sm font-semibold text-slate-700">
            Butuh bantuan?
          </p>

          <p className="mt-1 text-xs leading-relaxed text-slate-400">
            Temukan bantuan untuk layanan akademik.
          </p>

          <button
            onClick={() => handleNavigation("Pusat Bantuan")}
            className="mt-3 flex items-center gap-1 text-xs font-bold text-[#176B53]"
          >
            Pusat bantuan
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="flex items-center gap-3 rounded-xl px-2 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF3EF] text-sm font-bold text-[#176B53]">
            M
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-700">
              Mahasiswa
            </p>
            <p className="text-xs text-slate-400">
              Portal Mahasiswa
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

/* ========================================
   STATISTIC CARD COMPONENT
======================================== */

function StatCard({ title, icon: Icon, description }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-200/30">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-400">{title}</p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-slate-800">
            —
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF3EF] text-[#176B53]">
          <Icon size={21} />
        </div>
      </div>

      <p className="mt-4 text-[11px] text-slate-400">{description}</p>
    </div>
  );
}

/* ========================================
   DASHBOARD COMPONENT
======================================== */

function Dashboard({ setActivePage }) {
  const statistics = [
    {
      title: "Indeks Prestasi Kumulatif",
      icon: GraduationCap,
      description: "Data dari transkrip nilai",
    },
    {
      title: "IPS Semester Berjalan",
      icon: BookOpenCheck,
      description: "Data semester aktif",
    },
    {
      title: "Total SKS Lulus",
      icon: ShieldCheck,
      description: "Akumulasi mata kuliah lulus",
    },
    {
      title: "Status Akademik",
      icon: CalendarCheck2,
      description: "Status mahasiswa",
    },
  ];

  return (
    <div className="space-y-6">
      {/* WELCOME BANNER */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#174B3D] to-[#10382F] p-6 text-white shadow-lg shadow-green-950/10 sm:p-8">
        <div className="relative z-10 max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-green-50">
            <Sparkles size={13} />
            SISTEM INFORMASI AKADEMIK
          </div>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Selamat datang di Portal Akademik
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-relaxed text-green-100/75">
            Kelola aktivitas akademik, rencanakan mata kuliah, dan pantau
            perkembangan studi dalam satu tempat.
          </p>

          <button
            onClick={() => setActivePage("Pengisian KRS")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-[#174B3D] transition hover:bg-green-50"
          >
            Mulai pengisian KRS
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[35px] border-white/5" />
        <div className="pointer-events-none absolute -bottom-36 right-20 h-72 w-72 rounded-full border-[35px] border-white/5" />
      </section>

      {/* STATISTICS */}
      <section>
        <div className="mb-4">
          <h3 className="text-base font-bold text-slate-800">
            Ringkasan Akademik
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            Informasi perkembangan akademik mahasiswa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-5">
        {/* KRS */}
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-200/30 xl:col-span-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-800">
                Ringkasan KRS
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Informasi rencana studi semester aktif.
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF3EF] text-[#176B53]">
              <ClipboardList size={20} />
            </div>
          </div>

          <div className="my-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 px-5 py-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
              <BookOpen size={23} />
            </div>

            <h4 className="mt-4 text-sm font-semibold text-slate-700">
              Belum ada data KRS aktif
            </h4>

            <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-slate-400">
              Data KRS akan ditampilkan setelah mahasiswa memilih mata
              kuliah dan melakukan pengajuan.
            </p>

            <button
              onClick={() => setActivePage("Pengisian KRS")}
              className="mt-5 rounded-xl bg-[#176B53] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#125640]"
            >
              Buka pengisian KRS
            </button>
          </div>
        </div>

        {/* SCHEDULE */}
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-200/30 xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-800">
                Jadwal Kuliah
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Agenda perkuliahan mahasiswa.
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              <CalendarDays size={20} />
            </div>
          </div>

          <div className="flex min-h-64 flex-col items-center justify-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-400">
              <Clock3 size={23} />
            </div>

            <h4 className="mt-4 text-sm font-semibold text-slate-700">
              Jadwal belum tersedia
            </h4>

            <p className="mt-2 max-w-xs text-xs leading-relaxed text-slate-400">
              Jadwal perkuliahan akan muncul setelah KRS disetujui.
            </p>

            <button
              onClick={() => setActivePage("Jadwal Kuliah")}
              className="mt-4 text-xs font-semibold text-[#176B53] hover:underline"
            >
              Lihat halaman jadwal
            </button>
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-200/30">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <BookOpen size={21} />
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-bold text-slate-800">
              Katalog Mata Kuliah
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              Cari mata kuliah, lihat prasyarat, jumlah SKS, dan informasi
              kelas.
            </p>

            <button
              onClick={() => setActivePage("Katalog Mata Kuliah")}
              className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#176B53]"
            >
              Jelajahi katalog
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-200/30">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
            <Sparkles size={21} />
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-bold text-slate-800">
              Asisten Akademik AI
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              Asisten untuk membantu memahami kurikulum dan informasi
              akademik.
            </p>

            <span className="mt-3 inline-flex rounded-full bg-purple-50 px-2.5 py-1 text-[10px] font-semibold text-purple-600">
              Direncanakan
            </span>
          </div>
        </div>
      </section>

      {/* DATA NOTICE */}
      <div className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50/70 p-4">
        <MapPin size={17} className="mt-0.5 shrink-0 text-amber-600" />
        <p className="text-xs leading-relaxed text-amber-800">
          Ini merupakan pratinjau antarmuka. Data akademik belum terhubung
          ke Firebase dan akan ditampilkan setelah integrasi backend.
        </p>
      </div>
    </div>
  );
}

/* ========================================
   APP COMPONENT
======================================== */

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const pageDescriptions = {
    "Pengisian KRS":
      "Pilih mata kuliah dan susun rencana studi semester berjalan.",
    "Jadwal Kuliah":
      "Lihat jadwal perkuliahan berdasarkan KRS yang telah disetujui.",
    "Katalog Mata Kuliah":
      "Temukan informasi mata kuliah, SKS, semester, dan prasyarat.",
    "Direktori Dosen":
      "Cari informasi dosen dan bidang keahliannya.",
    "Transkrip Nilai":
      "Lihat riwayat hasil studi dan nilai mata kuliah.",
    "Konsultasi Akademik":
      "Ajukan konsultasi dan pantau proses persetujuan akademik.",
    "Pusat Bantuan":
      "Temukan panduan penggunaan layanan portal akademik.",
  };

  return (
    <div className="min-h-screen bg-[#F6F8F7] text-slate-800">
      {/* MOBILE OVERLAY */}
      {mobileMenuOpen && (
        <button
          aria-label="Tutup menu"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
        />
      )}

      {/* SIDEBARS */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        mobile
      />

      {/* MAIN AREA */}
      <div className="min-h-screen lg:pl-64">
        {/* TOPBAR */}
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-100 bg-white/90 px-4 backdrop-blur-md sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Buka menu"
              className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            >
              <Menu size={22} />
            </button>

            <div>
              <p className="text-[11px] font-medium text-slate-400">
                Portal Akademik
                <span className="mx-2">/</span>
                <span className="text-[#176B53]">{activePage}</span>
              </p>

              <h2 className="mt-1 text-lg font-bold tracking-tight text-slate-800">
                {activePage === "Dashboard"
                  ? "Dashboard Akademik"
                  : activePage}
              </h2>
            </div>
          </div>

          <div className="relative flex items-center gap-3">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              aria-label="Notifikasi"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 text-slate-500 transition hover:bg-slate-50"
            >
              <Bell size={19} />
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 top-14 z-30 w-64 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
                <p className="text-sm font-bold text-slate-800">
                  Notifikasi
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  Belum ada notifikasi. Informasi akademik akan muncul
                  di sini.
                </p>
              </div>
            )}

            <div className="hidden h-10 w-px bg-slate-100 sm:block" />

            <div className="hidden items-center gap-3 sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF3EF] text-sm font-bold text-[#176B53]">
                M
              </div>

              <div className="hidden xl:block">
                <p className="text-xs font-bold text-slate-700">
                  Mahasiswa
                </p>
                <p className="mt-0.5 text-[10px] text-slate-400">
                  Portal Mahasiswa
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {activePage === "Dashboard" ? (
            <Dashboard setActivePage={setActivePage} />
          ) : (
            <section className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl border border-slate-100 bg-white px-6 py-12 text-center shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF3EF] text-[#176B53]">
                <BookOpen size={30} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-800">
                {activePage}
              </h3>

              <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
                {pageDescriptions[activePage] ||
                  "Modul ini akan dikembangkan pada tahap berikutnya."}
              </p>

              <span className="mt-5 rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-700">
                Dalam tahap pengembangan
              </span>

              <button
                onClick={() => setActivePage("Dashboard")}
                className="mt-6 rounded-xl bg-[#176B53] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#125640]"
              >
                Kembali ke Dashboard
              </button>
            </section>
          )}

          <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-slate-200/70 pt-5 text-[11px] text-slate-400 sm:flex-row">
            <p>SIAKAD · Portal Sistem Informasi Akademik</p>
            <p>Antarmuka tahap awal · 2026</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
