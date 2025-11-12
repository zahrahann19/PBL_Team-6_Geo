import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBalanceScale, FaMapMarkerAlt } from "react-icons/fa";

export default function OperatorBoiler1() {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      q: "Apa dasar hukum pelatihan Operator Boiler Kelas I?",
      a: "Pelatihan ini berlandaskan Undang-Undang No. 1 Tahun 1970 tentang Keselamatan Kerja, Undang-Undang No. 13 Tahun 2003 tentang Ketenagakerjaan, Undang-Undang dan Peraturan Uap Tahun 1930, serta Permenaker No. 01/MEN/1988.",
    },
    {
      q: "Siapa sasaran peserta pelatihan ini?",
      a: "Peserta yang bekerja di bidang bejana tekan, boiler, atau instalasi uap; memiliki pengalaman di bidang terkait; serta berusia maksimal 45 tahun.",
    },
    {
      q: "Bagaimana metode pelatihan dilaksanakan?",
      a: "Pelatihan dilaksanakan secara daring melalui Zoom dan Google Classroom untuk teori, serta praktik lapangan di Training Center GMK/Bekasi. Terdiri dari diskusi, studi kasus, kuis, praktik, dan evaluasi melalui website temank3.kemnaker.go.id.",
    },
    {
      q: "Apa saja fasilitas yang diterima peserta?",
      a: "Peserta memperoleh E-Modul, akses Zoom & Google Classroom, e-certificate attendance, narasumber dari Kemnaker RI, souvenir, lunch & coffee break (untuk praktik offline), serta sarana praktik yang memadai.",
    },
    {
      q: "Apa bentuk sertifikat yang diberikan setelah lulus?",
      a: "Peserta yang dinyatakan lulus akan mendapatkan Sertifikat dan Lisensi (SIO) Operator Boiler resmi dari Kementerian Ketenagakerjaan Republik Indonesia, sebagai bukti legal kompetensi mengoperasikan boiler kapasitas >10 Ton.",
    },
    {
      q: "Berapa biaya pelatihan dan bagaimana cara pembayarannya?",
      a: "Biaya pelatihan sebesar Rp 8.500.000,- per peserta (belum termasuk pajak). Pembayaran dilakukan melalui Bank Mandiri KCP Puri Sentra Niaga Kalimalang No. Rekening: 006-00-0601846-3 a/n PT. Geo Mandiri Kreasi, minimal 3 hari sebelum pelaksanaan.",
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
                Pembinaan K3 Operator Boiler Kelas I (Kapasitas &gt; 10 Ton)
              </h2>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                Di tengah ketatnya persaingan industri, Keselamatan dan
                Kesehatan Kerja (K3) menjadi aspek krusial yang berdampak
                langsung pada kesejahteraan pekerja, produktivitas, dan
                pertumbuhan ekonomi. Dengan meningkatnya penggunaan pesawat uap
                (boiler), risiko bahaya juga meningkat. Oleh karena itu,
                penanganan yang aman, efektif, dan efisien sangat diperlukan,
                sesuai dengan Undang-Undang No. 1 tahun 1970 tentang Keselamatan
                Kerja dan Undang-Undang Uap tahun 1930. Operator boiler wajib
                memiliki kualifikasi dan lisensi K3.
              </p>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                Pembinaan K3 Operator Boiler Kelas I (Kapasitas &gt; 10 Ton)
                membekali peserta dengan pengetahuan dan keterampilan
                pengoperasian pesawat uap secara aman, benar, dan sesuai
                peraturan K3 yang berlaku.
              </p>
            </div>
            <div className="col-md-5 text-center">
              <img
                src="/PUBT/PUBT_Boiler1.png"
                alt="Operator Boiler Kelas I"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "350px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DASAR HUKUM */}
      <section className="py-5 bg-success bg-opacity-10 border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <FaBalanceScale className="text-success mb-3" size={50} />
              <h4 className="fw-bold text-success">Dasar Hukum</h4>
            </div>
            <div className="col-md-8">
              <ul className="text-muted fs-5">
                <li>
                  Undang-Undang No. 1 Tahun 1970 tentang Keselamatan Kerja
                </li>
                <li>Undang-Undang No. 13 Tahun 2003 tentang Ketenagakerjaan</li>
                <li>Undang-Undang dan Peraturan Uap Tahun 1930</li>
                <li>Permenaker No. 01/MEN/1988</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas &  PERSYARATAN PESERTA */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <h3 className="fw-bold text-success mb-4">Fasilitas Pembinaan</h3>
          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
            <b>Instruktur:</b> 
          </p>
          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
            Pembinaan ini dipandu oleh instruktur dari <b> Kementerian Ketenagakerjaan RI</b>, praktisi, serta akademisi
            berpengalaman di bidang pesawat uap (boiler) yang memiliki
            kompetensi teknis dan pengalaman lapangan yang luas.</p>

          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
            <b>Materi:</b>
            <ul>
              <li>
                <b> Kelompok Dasar</b> : Kebijakan K3, Peraturan Pesawat Uap
              </li>
              <li>
                <b> Kelompok Inti</b> : Jenis, Fungsi, Pengoperasian, dan
                Perawatan Boiler
              </li>
              <li>
                <b>Kelompok Penunjang</b> : Instalasi Listrik, Konstruksi,
                Inspeksi, dan Analisa Kecelakaan
              </li>
            </ul>
          </p>

          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
            <b>Metode Pembinaan:</b>
          </p>
          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
             Pembinaan dilaksanakan melalui kombinasi
            teori dan praktik, meliputi telekonferensi via Zoom, diskusi
            interaktif, studi kasus, quiz, praktik lapangan, serta evaluasi
            melalui situs resmi
            <a
              href="https://temank3.kemnaker.go.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-success fw-semibold ms-1"
            >
              temank3.kemnaker.go.id
            </a>
                        </p>
        </div>
        <div className="container">
          <h3 className="fw-bold text-success mb-4">Persyaratan Peserta</h3>
          <ul className="text-muted fs-5">
            <li>Mengisi Form Pendaftaran</li>
            <li>Pengalaman di bidang Bejana Tekanan dan Tangki Timbun</li>
            <li>Usia maksimal 45 tahun</li>
            <li>Memiliki laptop/PC dengan kamera dan Zoom terinstal</li>
            <li>Memiliki smartphone Android dengan aplikasi Teman K3</li>
            <li>Memiliki email Gmail aktif dan koneksi internet stabil</li>
            <li>Berpakaian rapi (formal) selama training</li>
            <li>Memakai safety shoes saat praktik</li>
          </ul>
        </div>
      </section>

      {/* INVESTASI & LOKASI */}
      <section className="py-5 bg-light border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="fw-bold text-success mb-3">Investasi</h3>
              <p className="text-muted fs-5">
                Rp. 8.500.000,- / Peserta (belum termasuk pajak)
              </p>

              <table className="table table-bordered">
                <thead className="table-success">
                  <tr>
                    <th>Sudah Termasuk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Sertifikat & Kartu Lisensi Operator (SIO) dari Kemnaker RI
                    </td>
                  </tr>
                  <tr>
                    <td>E-Certificate Attendance dari Provider</td>
                  </tr>
                  <tr>
                    <td>E-Modul Pelatihan</td>
                  </tr>
                  <tr>
                    <td>Narasumber & Evaluator Kemnaker RI</td>
                  </tr>
                  <tr>
                    <td>BAP Disnaker Setempat</td>
                  </tr>
                  <tr>
                    <td>Zoom, Google Classroom, WA Group</td>
                  </tr>
                  <tr>
                    <td>Souvenir, Lunch + Coffee Break (praktik offline)</td>
                  </tr>
                  <tr>
                    <td>Sarana & Prasarana Praktik</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Kolom 2 - Lokasi */}
            <div className="col-md-6 d-flex justify-content-center align-items-start">
              <div
                className="card shadow rounded-4"
                style={{ width: "100%", maxWidth: "450px" }}
              >
                <div className="card-body text-center">
                  <FaMapMarkerAlt className="text-success mb-3" size={40} />
                  <h5 className="fw-bold text-success mb-3">
                    Lokasi Praktik Offline
                  </h5>
                  <p className="text-muted fs-5 mb-4">
                    Training Center GMK / Bekasi <br />
                    (Disesuaikan dengan jumlah peserta dan ketersediaan tempat)
                  </p>
                  <iframe
                    title="Lokasi GMK Bekasi"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.498728363627!2d106.90092681527205!3d-6.415746995355801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ecfbffcf6df9%3A0x8a6a30a79eab71b4!2sBekasi!5e0!3m2!1sid!2sid!4v1697916312900!5m2!1sid!2sid"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: "10px" }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === PROMOSI / AJAKAN PENDAFTARAN === */}
      <section className="py-5 bg-white border-bottom text-center">
        <div className="container">
          <h2 className="fw-bold text-success mb-3">
            ⚡ Ayo Daftar Sekarang! ⚡
          </h2>
          <p className="text-success fs-5">
            (Periode 6 Oktober – 5 November 2025)
          </p>

          <p
            className="text-muted mb-4 fs-5"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            Tingkatkan kompetensi Anda dalam mengoperasikan pesawat uap (boiler)
            secara aman dan sesuai regulasi. Jadilah{" "}
            <b>Operator Boiler Kelas I</b>
            bersertifikat <b>Kemnaker RI</b> untuk mendukung keselamatan kerja
            dan efisiensi operasional di perusahaan Anda.
          </p>

          <div className="row justify-content-center mt-4">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 border">
                <h5 className="fw-bold text-success mb-3">
                  Kontak & Pembayaran
                </h5>
                <p className="text-muted mb-1">
                  <b>Restu</b> <br /> 0813 6810 2031 (WA)
                </p>
                <p className="text-muted mb-1">
                  Email: adinarestuanturi@yahoo.com
                </p>
                <p className="text-muted mb-1">
                  Office: (021) 8621510 Ext. 203
                </p>
                <p className="text-muted small mb-0">
                  Bank Mandiri KCP Puri Sentra Niaga Kalimalang
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
      >
        ←
      </button>
    </div>
  );
}
