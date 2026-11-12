@echo off
setlocal
echo ==========================================
echo SIAKAD - Membuat struktur folder tim
echo Jalankan file ini dari root project siakad-krs
echo ==========================================

for %%D in (
"src\app"
"src\assets\images"
"src\assets\styles"
"src\components\layout"
"src\components\ui"
"src\components\common"
"src\config"
"src\context"
"src\features\auth\pages"
"src\features\dashboard\pages"
"src\features\dashboard\components"
"src\features\student\pages"
"src\features\student\components"
"src\features\student\hooks"
"src\features\student\services"
"src\features\courses\pages"
"src\features\courses\components"
"src\features\courses\hooks"
"src\features\courses\services"
"src\features\lecturers\pages"
"src\features\lecturers\components"
"src\features\lecturers\hooks"
"src\features\lecturers\services"
"src\features\lecturer-reviews\pages"
"src\features\lecturer-reviews\components"
"src\features\lecturer-reviews\hooks"
"src\features\lecturer-reviews\services"
"src\features\krs\pages"
"src\features\krs\components"
"src\features\krs\hooks"
"src\features\krs\services"
"src\features\krs\utils"
"src\features\consultation\pages"
"src\features\consultation\components"
"src\features\consultation\hooks"
"src\features\consultation\services"
"src\features\chatbot\pages"
"src\features\chatbot\components"
"src\features\chatbot\hooks"
"src\features\chatbot\services"
"src\services"
"src\hooks"
"src\utils"
"src\data\mock"
"docs"
) do (
  if not exist "%%~D" mkdir "%%~D"
)

if not exist "src\app\README.md" (
  >"src\app\README.md" echo Routing, komposisi aplikasi, dan provider global. Koordinasikan perubahan dengan integrator.
)
if not exist "src\components\README.md" (
  >"src\components\README.md" echo Komponen UI bersama. Sepakati API komponen sebelum dipakai lintas fitur.
)
if not exist "src\features\auth\README.md" (
  >"src\features\auth\README.md" echo Auth sudah berjalan di src\context\AuthContext.jsx dan src\pages\LoginPage.jsx. Jangan memindahkan atau mengubah tanpa koordinasi integrator.
)
for %%F in (dashboard student courses lecturers lecturer-reviews krs consultation chatbot) do (
  if not exist "src\features\%%F\README.md" (
    >"src\features\%%F\README.md" echo Modul %%F. Buat halaman, komponen, hooks, dan services khusus modul ini. Gunakan mock data sampai kontrak Firestore disepakati.
  )
)
if not exist "src\data\mock\README.md" (
  >"src\data\mock\README.md" echo Data sementara untuk pengembangan UI. Tandai jelas sebagai mock; jangan gunakan sebagai data produksi.
)
if not exist "docs\README.md" (
  >"docs\README.md" echo Simpan dokumentasi arsitektur, kontrak data, keputusan teknis, dan panduan kontribusi di sini.
)

echo.
echo Struktur folder selesai dibuat.
echo File yang sudah ada tidak ditimpa.
echo Langkah berikutnya: baca TEAM_GUIDELINES.md dan FEATURE_OWNERS.md.
endlocal
