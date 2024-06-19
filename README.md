# Weather App

## Deskripsi Proyek
Weather App adalah aplikasi seluler yang dibuat menggunakan React Native untuk menampilkan informasi cuaca terkini. Aplikasi ini menggunakan Tailwind CSS untuk styling yang cepat dan konsisten. Data cuaca diambil dari API OpenWeather.

## Teknologi yang Digunakan
- React Native
- Tailwind CSS
- OpenWeather API

## Fitur
- Menampilkan cuaca saat ini berdasarkan lokasi pengguna
- Informasi cuaca terperinci termasuk suhu, kelembaban, dan kondisi cuaca
- Tampilan yang responsif dan menarik dengan Tailwind CSS

## Persyaratan
- Node.js
- npm atau yarn
- Expo CLI (opsional, jika menggunakan Expo)
- API Key dari OpenWeather

## Instalasi
1. Clone repositori ini ke mesin lokal Anda:
    ```sh
    git clone https://github.com/KodingAffanMaulana/weather-app.git
    ```

2. Navigasikan ke direktori proyek:
    ```sh
    cd weather-app
    ```

3. Instal dependensi proyek:
    ```sh
    npm install
    ```
    atau
    ```sh
    yarn install
    ```

4. Dapatkan API Key dari [OpenWeather](https://openweathermap.org/api) dengan mendaftar di situs tersebut.

5. Buat file `.env` di root direktori proyek dan tambahkan API Key Anda:
    ```env
    OPENWEATHER_API_KEY=your_api_key_here
    ```

6. Jalankan aplikasi:
    ```sh
    npm start
    ```
    atau
    ```sh
    yarn start
    ```

## Penggunaan
1. Buka aplikasi di perangkat seluler atau emulator.
2. Izinkan akses lokasi saat diminta.
3. Lihat informasi cuaca terkini berdasarkan lokasi Anda.
