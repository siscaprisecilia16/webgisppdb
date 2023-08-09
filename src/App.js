import "./App.css";
import Map from "./Map";

function App() {
  return (
    <section className="page_map">
      <nav className="nav_section">
        <h1 className="nav_logo"><img src="UPI.png" alt="UPI.png" height="40" width="72"/>
        </h1>
        <h2 className="nav_title">Zonasi SMA Negeri di Kota Bandung</h2>
      </nav>
      <div className="map_section">
        <Map />
        <div className="description_card">Pengembangan informasi mengenai sebaran sekolah berbasis SIG (Sistem Informasi Geografis) merupakan hal yang dibutuhkan untuk perencanaan dalam pembangunan pendidikan. SIG juga dapat menjadi sarana yang dapat menyediakan berbagai informasi mengenai sekolah seperti persebaran serta profil sekolah yang dapat diakses dengan mudah oleh calon peserta didik. Dengan demikian, melalui WebGIS yang divisualisasikan dengan metode buffer dan isochrones dapat memberikan informasi mengenai sebaran sekolah, profil sekolah, dan zonasinya. Hasil visualisasinya memiliki lima komponen usabilitas sehingga diharapkan dapat memberikan manfaat bagi calon peserta didik dan stakeholder. Tujuan dari penelitian ini adalah komparasi dua metode visualisasi dalam satu WebGIS yaitu visualisasi zonasi sebaran SMA Negeri di Kota Bandung menggunakan metode buffer dan isochrones. 
</div>
      </div>
      <div className="about_section">
        <div className="about_card">
          Panduan Menggunakan WebGIS
          <br/>1. Klik titik sekolah yang diinginkan
          <br/>2. Pilih metode radius zonasi yang akan digunakan <b>(Buffer/Isochrone)</b>
          <br/>3. Jika memilih buffer maka radius zonasi akan langsung muncul
          <br/>4. Jika memilih <b>Isochrone</b>, pilih tipe perjalanan dan tipe waktu atau jarak
          <br/>5. Akan muncul <i>popup</i> mengenai informasi mengenai PPDB
          </div>
        <div className="about_card">Dibuat oleh: Sisca Prisecilia<br/>Mahasiswa Program Studi Sains Informasi Geografi <br/>Universitas Pendidikan Indonesia</div>
      </div>
    </section>
  );
}

export default App;
