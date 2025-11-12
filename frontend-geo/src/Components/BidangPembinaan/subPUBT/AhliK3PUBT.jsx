import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AhliK3PUBT() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      q: "Apa dasar hukum pelatihan Ahli K3 PUBT ini?",
      a: "Pelatihan berlandaskan UU No.13 Tahun 2003, UU No.01 Tahun 1970, serta Peraturan Pemerintah dan Peraturan Menteri terkait Ketenagakerjaan.",
    },
    {
      q: "Siapa sasaran peserta pelatihan ini?",
      a: "Peserta sehat jasmani dan rohani, minimal pendidikan D3/S1 Teknik dengan pengalaman kerja 2 tahun, sudah bekerja dengan surat keterangan, dan memiliki perangkat serta kuota internet memadai.",
    },
    {
      q: "Bagaimana metode pelaksanaan pembinaan ini?",
      a: "Metode meliputi pre test, quiz, studi kasus, praktek lapangan, pembuatan laporan, seminar, dan evaluasi.",
    },
    {
      q: "Apa saja fasilitas yang diberikan kepada peserta?",
      a: "Ruang training, makan siang dan coffee break, e-modul/materi, training kit, instruktur dari Kemnaker RI, sarana PKL, serta sertifikat dan kartu kewenangan resmi.",
    },
    {
      q: "Berapa biaya dan bagaimana cara pembayarannya?",
      a: "Biaya Rp 34.500.000,-/peserta (belum termasuk pajak dan akomodasi). Pembayaran dilakukan 3 hari sebelum training melalui transfer ke Bank Mandiri KCP Puri Sentra Niaga Kalimalang No. Rek: 006-00-0601846-3 a/n PT. GEO MANDIRI KREASI.",
    },
  ];

  return (
    <div className="bg-light mt-5">
      {/* HEADER */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fw-bold text-success mb-3">
                Pembinaan Calon Ahli K3 Spesialis Pesawat Uap Bejana Tekanan
                (PUBT)
              </h2>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                Pesawat Uap (ketel uap) dan Bejana Tekan adalah peralatan
                berisiko tinggi yang banyak digunakan di industri. Potensi
                ledakan dan kecelakaan kerja sangat tinggi jika tidak
                dioperasikan sesuai standar. Kehadiran Ahli K3 PUBT
                bersertifikat sangat penting untuk meminimalkan risiko
                kecelakaan, terutama human error.
              </p>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                Pelatihan ini berlandaskan pada Undang-undang No.13 tahun 2003,
                Undang-undang No. 01 tahun 1970, serta berbagai Peraturan
                Pemerintah dan Peraturan Menteri terkait Ketenagakerjaan.
              </p>
              <ul className="text-muted fs-5" style={{ textAlign: "justify" }}>
                <li>
                  Meningkatkan K3 melalui inspeksi teknik untuk produktivitas
                  dan efisiensi optimal.
                </li>
                <li>
                  Meningkatkan pelaksanaan inspeksi teknik dan penilaian
                  kelayakan PUBT sesuai standar.
                </li>
                <li>Memberikan Sertifikat Kompetensi Ahli K3 PUBT.</li>
              </ul>
            </div>
            <div className="col-md-5 text-center">
              <img
                src="/PUBT/PUBT_AhliK3.png"
                alt="Ahli K3 PUBT"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "350px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MATERI PEMBINAAN */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <h3 className="fw-bold text-success mb-4">Materi Pembinaan</h3>
          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
            Materi terbagi dalam tiga kelompok:
          </p>
          <ul className="text-muted fs-5">
            <li>
              <b>Kelompok Dasar:</b> Kebijakan K3, UU K3, SMK3, Investigasi
              Kecelakaan.
            </li>
            <li>
              <b>Kelompok Keahlian:</b> Peraturan Uap, Jenis Pesawat Uap &
              Bejana Tekan, Perhitungan Konstruksi, Pengujian, Praktek Lapangan.
            </li>
            <li>
              <b>Kelompok Penunjang:</b> K3 Nuklir, Termodinamika, Korosi,
              Kelistrikan, Gambar Teknik, JSA (Job Safety Analysis).
            </li>
          </ul>
          <h5 className="mt-4 fw-semibold">Evaluasi</h5>
          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
            Meliputi ujian teori, penulisan kertas kerja, dan seminar hasil
            pembinaan.
          </p>
          <h5 className="mt-4 fw-semibold">Metode Pelaksanaan</h5>
          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
            Pre test, quiz, studi kasus, praktek, pembuatan laporan, seminar,
            dan evaluasi.
          </p>
          <h5 className="mt-4 fw-semibold">Instruktur</h5>
          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
            Pengawas Spesialis PUBT dari Kemnaker RI/Disnaker, praktisi, dan
            asosiasi Ahli K3 PUBT.
          </p>
        </div>
      </section>

      {/* PERSYARATAN */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <h3 className="fw-bold text-success mb-4">Persyaratan Peserta</h3>
          <ul className="text-muted fs-5" style={{ textAlign: "justify" }}>
            <li>Sehat jasmani dan rohani.</li>
            <li>Pendidikan minimal D3/S1 Teknik dengan pengalaman 2 tahun.</li>
            <li>Sudah bekerja (dibuktikan dengan Surat Keterangan Bekerja).</li>
            <li>
              Memiliki email Google aktif, dapat mengoperasikan laptop/PC, dan
              kuota internet memadai.
            </li>
            <li>Bersedia mengikuti kegiatan setiap hari tanpa izin/absen.</li>
            <li>
              Memiliki laptop dan smartphone Android dengan aplikasi Teman K3
              untuk presensi.
            </li>
            <li>
              Untuk PKL: memakai safety shoes dari rumah, helm, dan
              warepack/kemeja safety lengan panjang.
            </li>
          </ul>
          <h5 className="mt-4 fw-semibold">Administrasi</h5>
          <ul className="text-muted fs-5" style={{ textAlign: "justify" }}>
            <li>Form Biodata</li>
            <li>Scan Ijazah</li>
            <li>Scan KTP</li>
            <li>CV</li>
            <li>Surat Keterangan Bekerja</li>
            <li>Surat Keterangan Sehat</li>
            <li>Pakta Integritas bermaterai 10000</li>
            <li>Softfile Pas Foto berwarna latar merah</li>
          </ul>

          <h5 className="mt-4 fw-semibold">Biaya</h5>
          <p className="text-muted fs-5" >Biaya Rp. 34.500.000,- per peserta (belum termasuk pajak dan
            akomodasi). Pembayaran dilakukan minimal 3 hari sebelum pelaksanaan</p>
        </div>
      </section>

      {/* SERTIFIKAT */}
      <section className="py-5 bg-success bg-opacity-10 border-bottom">
        <div className="container text-center">
          <h3 className="fw-bold text-success mb-4">Sertifikat & Kelulusan</h3>
          <p
            className="text-muted fs-5 mb-4"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Peserta yang lulus akan mendapatkan Sertifikat, SKP, dan Kartu
            Kewenangan Ahli K3 PUBT dari penyelenggara dan Kemnaker RI. Lulusan
            mampu melakukan inspeksi visual, verifikasi, identifikasi, serta
            bertanggung jawab atas hasil uji kelayakan operasional PUBT dan
            membuat laporan hasil pemeriksaan.
          </p>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-success mb-2">
                    Sertifikat Kompetensi
                  </h5>
                  <p className="text-muted mb-0">
                    Bukti kelulusan dan kompetensi Ahli K3 PUBT resmi dari
                    Kemnaker RI.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-success mb-2">
                    SK Penunjukan (SKP)
                  </h5>
                  <p className="text-muted mb-0">
                    Surat resmi pengangkatan Ahli K3 PUBT di perusahaan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-success mb-2">
                    Kartu Kewenangan
                  </h5>
                  <p className="text-muted mb-0">
                    Kartu identitas resmi sebagai bukti kewenangan menjalankan
                    fungsi K3 PUBT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* FASILITAS & LOKASI */}
<section className="py-5 bg-white border-bottom">
  <div className="container">
    <h3 className="fw-bold text-success mb-4">Fasilitas & Lokasi Training</h3>
    <div className="row">
      {/* Kolom 1 - Fasilitas */}
      <div className="col-md-6">
        <h5 className="fw-bold text-success mb-3">Fasilitas</h5>
        <ul className="text-muted fs-5" style={{ maxWidth: "90%" }}>
          <li>Ruang training yang nyaman</li>
          <li>Makan siang dan coffee break</li>
          <li>Surat Keterangan, SKP, dan Kartu Kewenangan dari Kemnaker RI</li>
          <li>Sertifikat Kepesertaan dari Provider</li>
          <li>E-Modul dan materi lengkap</li>
          <li>Training kit</li>
          <li>Instruktur dan evaluator dari Kemnaker RI</li>
          <li>Sarana dan prasarana PKL/Observasi lapangan</li>
        </ul>
      </div>

      {/* Kolom 2 - Card Lokasi */}
      <div className="col-md-6 d-flex justify-content-center align-items-start">
        <div className="card shadow rounded-4" style={{ width: "100%", maxWidth: "450px" }}>
          <div className="card-body">
            <h5 className="card-title fw-bold text-success mb-3">Lokasi Training</h5>
            <p className="card-text text-muted fs-5 mb-4">
              Training Center Tapos - Depok<br />
              (Lokasi dapat disesuaikan dengan jumlah peserta dan ketersediaan tempat)
            </p>
            {/* Embed Google Maps lokasi Tapos - Depok */}
            <div style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}>
              <iframe
                title="Lokasi Training Center Tapos Depok"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.498728363627!2d106.90092681527205!3d-6.415746995355801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ecfbffcf6df9%3A0x8a6a30a79eab71b4!2sTapos%2C%20Kecamatan%20Tapos%2C%20Depok%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1697916312900!5m2!1sid!2sid"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* === PROMOSI / AJAKAN === */}
      <section className="py-5 bg-white border-bottom text-center">
        <div className="container">
          <h2 className="fw-bold text-success mb-3">
            ⚡ Ayo Daftar Sekarang! ⚡
          </h2>
          <p className="text-success fs-5">
             (Periode 6 Oktober – 5 November 2025)
          </p>

          <p className="text-muted mb-4">
            Tingkatkan kompetensi Anda dan lindungi lingkungan kerja dengan
            menjadi <b>Ahli K3 PUBT</b> bersertifikat <b>Kemnaker RI</b>. <br />
            Hubungi kami untuk pendaftaran dan informasi lebih lanjut.
          </p>

          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 border">
                <h5 className="fw-bold text-success mb-3">
                  Kontak & Pembayaran
                </h5>
                <p className="text-muted mb-1">
                  <b>Restu</b> <br /> 0813 6810 2031 (WA)
                </p>
                <p className="text-muted mb-1">
                  Office: (021) 8621510 Ext. 203
                </p>
                <p className="text-muted small mb-0">
                  Bank Mandiri Cab. Puri Sentra Niaga Kalimalang
                  <br />
                  <b>No. Rekening: 006-00-0601846-3</b>
                  <br />
                  a.n. PT. Geo Mandiri Kreasi
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <a
              href="https://wa.me/6281368102031"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success px-5 py-3 rounded-pill fw-bold shadow-sm"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light py-5 border-top">
        <div className="container">
          <h2 className="text-center fw-bold text-success mb-4">
            Pertanyaan Umum
          </h2>
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item mb-2" key={index}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      expandedFaq === index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                  >
                    {faq.q}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    expandedFaq === index ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-success"
        style={{
          position: "fixed",
          bottom: "30px",
          left: "30px",
          borderRadius: "30px",
          padding: "10px 25px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          zIndex: 1000,
        }}
        aria-label="Kembali"
      >
        ←
      </button>
    </div>
  );
}
