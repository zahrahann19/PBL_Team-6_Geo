import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBalanceScale, FaMapMarkerAlt } from "react-icons/fa";

export default function TeknisiBejanaTekanan() {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      q: "Apa dasar hukum pembinaan Teknisi Bejana Tekanan dan Tangki Timbun?",
      a: "Pelatihan ini berlandaskan Undang-Undang No. 1 Tahun 1970 tentang Keselamatan Kerja dan Permenaker No. 37 Tahun 2016 tentang Keselamatan dan Kesehatan Kerja Bejana Tekanan dan Tangki Timbun.",
    },
    {
      q: "Apa tujuan pembinaan ini?",
      a: "Meningkatkan kompetensi tenaga kerja dalam bidang pemeriksaan dan pengujian bejana tekanan serta tangki timbun agar mampu melaksanakan tugas secara aman, benar, dan sesuai peraturan K3.",
    },
    {
      q: "Bagaimana metode pelatihannya?",
      a: "Pembinaan dilaksanakan secara blended training (daring dan tatap muka), mencakup pre-test, pembelajaran mandiri melalui video, sesi teori online via Zoom, quiz, praktik offline, dan ujian teori melalui portal Teman K3 Kemnaker RI.",
    },
    {
      q: "Siapa yang bisa mengikuti pelatihan ini?",
      a: "Peserta yang memiliki pengalaman kerja di bidang bejana tekanan atau tangki timbun, berusia maksimal 45 tahun, dan memenuhi seluruh persyaratan administrasi.",
    },
    {
      q: "Apa fasilitas dan sertifikasi yang diperoleh peserta?",
      a: "Peserta akan mendapatkan E-Modul, E-Certificate Attendance, materi video pembelajaran, sesi praktik lapangan, serta Sertifikat & Lisensi resmi dari Kementerian Ketenagakerjaan Republik Indonesia setelah dinyatakan lulus.",
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
                Pembinaan & Sertifikasi K3 Teknisi Bejana Tekanan dan Tangki
                Timbun
              </h2>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                Pemanfaatan bejana tekan dan tangki timbun yang masif di
                berbagai industri membawa risiko bahaya tinggi. Oleh karena itu,
                tenaga kerja yang kompeten dan bersertifikasi sangat dibutuhkan
                untuk memastikan keselamatan kerja dan menjaga keandalan
                peralatan bertekanan di tempat kerja.
              </p>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                Program ini diselenggarakan oleh{" "}
                <b>PT. Geo Mandiri Kreasi (PJK3)</b> untuk memberikan pembinaan
                dan sertifikasi resmi dari{" "}
                <b>
                  Kementerian Ketenagakerjaan Republik Indonesia (Kemnaker RI)
                </b>
                .
              </p>
            </div>
            <div className="col-md-5 text-center">
              <img
                src="/PUBT/PUBT_TekBejana.png"
                alt="Teknisi Bejana Tekanan dan Tangki Timbun"
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
                <li>
                  Permenaker No. 37 Tahun 2016 tentang K3 Bejana Tekanan dan
                  Tangki Timbun
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MATERI PEMBINAAN + METODE + JADWAL */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <h3 className="fw-bold text-success mb-4">
            Materi & Detail Program Pembinaan
          </h3>

          {/* Materi Pembinaan */}
          <h5 className="fw-bold text-success mb-3 mt-3">
            Materi yang akan dipelajari
          </h5>

          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <thead className="table-success">
                <tr>
                  <th style={{ width: "20%" }}>Kategori</th>
                  <th>Materi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Kelompok Dasar</b>
                  </td>
                  <td>
                    Kebijakan & Dasar-Dasar K3, Peraturan Perundangan Pesawat
                    Uap (UU No. 1 Tahun 1970, Permenaker No. 37 Tahun 2016)
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Kelompok Inti</b>
                  </td>
                  <td>
                    Pengetahuan Dasar Bejana Tekanan dan Tangki Timbun, Fungsi
                    Perlengkapan, Fluida Pengisi, Korosi dan Pencegahannya,
                    Pengetahuan Bahan, Penilaian Perhitungan Konstruksi, Non
                    Destructive Test (NDT), Pemeriksaan dan Pengujian
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Kelompok Penunjang</b>
                  </td>
                  <td>
                    Standar Pemeriksaan & Pengujian, Perpindahan Panas,
                    Pengetahuan Las
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Evaluasi</b>
                  </td>
                  <td>
                    Ujian teori dan praktik secara langsung serta melalui portal{" "}
                    <b>temank3.kemnaker.go.id</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Jadwal Pelatihan */}
          <h5 className="fw-bold text-success mb-4">Jadwal Pembinaan</h5>
          <div className="border-start border-3 border-success ps-3">
            <div className="mb-4">
              <h6 className="fw-bold mb-1 text-success">
                20 – 25 Oktober 2025
              </h6>
              <p className="text-muted mb-0">
                <b>Teori (Online):</b> via Zoom Meeting & Google Classroom.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold mb-1 text-success">
                27 – 28 Oktober 2025
              </h6>
              <p className="text-muted mb-0">
                <b>Praktik (Offline):</b> di PT. Nutrifood, Cikarang, Bekasi.
              </p>
            </div>

            <div className="mb-0">
              <h6 className="fw-bold mb-1 text-success">29 Oktober 2025</h6>
              <p className="text-muted mb-0">
                <b>Ujian Teman K3:</b> di Training Center GMK Jakarta.
              </p>
            </div>
          </div>

          {/* Info Teknis */}
          <p className="text-muted fs-5 mt-3" style={{ textAlign: "justify" }}>
            Pembinaan dilaksanakan selama <b>90 Jam Pelajaran (JP)</b> dengan
            kombinasi teori dan praktik. Ujian dilaksanakan secara online
            melalui <b>Teman K3 Kemnaker RI</b> dan praktik langsung di
            lapangan.
          </p>
          <ul className="text-muted fs-5">
            <li>Instruktur dari Kemnaker RI dan Tenaga Ahli PUBT.</li>
            <li>
              Metode: Pre-test, Video Mandiri, Telekonferensi via Zoom, Quiz,
              dan Praktik Lapangan.
            </li>
            <li>
              Peserta wajib menggunakan APD (Safety Helmet & Shoes) saat
              praktik.
            </li>
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
                Rp. 11.500.000,- / Peserta (belum termasuk pajak & akomodasi)
              </p>
              <table className="table table-bordered">
                <thead className="table-success">
                  <tr>
                    <th>Sudah Termasuk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sertifikat & Lisensi Kemnaker RI</td>
                  </tr>
                  <tr>
                    <td>E-Certificate Attendance</td>
                  </tr>
                  <tr>
                    <td>E-Modul & Video Materi</td>
                  </tr>
                  <tr>
                    <td>Zoom, Google Classroom, WA Group</td>
                  </tr>
                  <tr>
                    <td>Training Kit & Prasarana Praktik</td>
                  </tr>
                  <tr>
                    <td>Lunch & Coffee Break (Offline)</td>
                  </tr>
                  <tr>
                    <td>Narasumber & Evaluator Kemnaker RI</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Lokasi */}
            <div className="col-md-6 d-flex justify-content-center align-items-start">
              <div
                className="card shadow rounded-4"
                style={{ width: "100%", maxWidth: "450px" }}
              >
                <div className="card-body text-center">
                  <FaMapMarkerAlt className="text-success mb-3" size={40} />
                  <h5 className="fw-bold text-success mb-3">
                    Lokasi Praktik & Ujian
                  </h5>
                  <p className="text-muted fs-5 mb-4">
                    PT. Nutrifood, Cikarang, Bekasi <br />& Training Center GMK
                    Jakarta
                  </p>
                  <iframe
                    title="Lokasi GMK Jakarta Timur"
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

      {/* AJAKAN PENDAFTARAN */}
      <section className="py-5 bg-white border-bottom text-center">
        <div className="container">
          <h2 className="fw-bold text-success mb-3">
            ⚡ Ayo Daftar Sekarang! ⚡
          </h2>
          <p className="text-success fs-5">(Periode 20 – 29 Oktober 2025)</p>
          <p
            className="text-muted fs-5"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            Segera daftarkan diri Anda dalam program{" "}
            <b>
              Pembinaan & Sertifikasi K3 Teknisi Bejana Tekanan dan Tangki
              Timbun
            </b>
            bersama <b>PT. Geo Mandiri Kreasi</b> dan raih sertifikat resmi{" "}
            <b>Kemnaker RI</b>.
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
                  Bank Mandiri KCP Puri Sentra Niaga Kalimalang <br />
                  <b>No. Rekening: 006-00-0601846-3</b> <br />
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
