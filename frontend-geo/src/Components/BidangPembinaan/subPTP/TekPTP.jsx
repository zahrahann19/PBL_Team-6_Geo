import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TekPTP() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      q: "Siapa yang dapat mengikuti pelatihan Teknisi PTP?",
      a: "Peserta dengan pengalaman kerja minimal 2 tahun di bidang Pesawat Tenaga & Produksi (PTP), usia maksimal 45 tahun, dan memenuhi persyaratan dokumen serta perangkat seperti laptop dan smartphone Android.",
    },
    {
      q: "Apa manfaat mengikuti pelatihan ini?",
      a: "Peserta akan memahami regulasi K3 PTP, mampu melakukan pemeriksaan & pengujian PTP secara aman, serta mendapatkan sertifikat dan lisensi resmi dari Kemnaker RI.",
    },
    {
      q: "Bagaimana metode pembinaannya?",
      a: "Metode pembinaan meliputi pre‑test, teleconference (Zoom), quiz, praktek offline, dan ujian teori via temank3.kemnaker.go.id.",
    },
    {
      q: "Berapa biaya investasi pelatihan?",
      a: "Rp 11.500.000,- per peserta (belum termasuk pajak dan akomodasi).",
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
                Pembinaan K3 Teknisi Pesawat Tenaga & Produksi
              </h2>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                Pesawat Tenaga & Produksi (PTP) adalah alat yang digunakan untuk
                membangkitkan, memindahkan daya, mengolah, atau membuat produk
                teknis yang berpotensi menimbulkan bahaya kecelakaan. Pembinaan
                ini bertujuan meminimalkan risiko kecelakaan dengan memastikan
                pemasangan alat perlindungan yang efektif. Regulasi terkait PTP
                diatur dalam <b>Permenaker No. 38 Tahun 2016</b>.
                <br />
                Pembinaan K3 Teknisi Pesawat Tenaga & Produksi (PTP)
                dilaksanakan dalam bentuk pembelajaran teori, diskusi
                interaktif, praktik lapangan, serta ujian teori dan praktik
                sesuai standar Kementerian Ketenagakerjaan RI.
              </p>
            </div>
            <div className="col-md-5 text-center">
              <img
                src="/PTP/TekPTP.png"
                alt="Pelatihan Teknisi PTP"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "350px", objectFit: "contain" }}
              />
            </div>
          </div>
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
                    Kebijakan K3, UU No. 1 Tahun 1970, Permenaker No. 38/2016
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Kelompok Inti</b>
                  </td>
                  <td>
                    Dasar PTP, Motor Penggerak, Hidrolik, Kelistrikan, Perangkat
                    K3, Bahan & Korosi, Peninjauan Konstruksi, NDT, Pemeriksaan
                    dan Pengujian
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Kelompok Penunjang</b>
                  </td>
                  <td>
                    Standar Pemeriksaan & Pengujian, Stabilitas, Pengetahuan Las
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Ujian</b>
                  </td>
                  <td>
                    Ujian teori dan praktik secara langsung & melalui sistem
                    online
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Jadwal Pelatihan */}
          <h5 className="fw-bold text-success mb-4">Jadwal Pelatihan</h5>
          <div className="border-start border-3 border-success ps-3">
            <div className="mb-4">
              <h6 className="fw-bold mb-1 text-success">
                20 – 25 Oktober 2025
              </h6>
              <p className="text-muted mb-0">
                <b>Teori (Online):</b> via Zoom, Google Classroom, dan WhatsApp
                Group.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold mb-1 text-success">
                27 – 28 Oktober 2025
              </h6>
              <p className="text-muted mb-0">
                <b>Praktik (Offline):</b> di Politeknik Negeri Jakarta, Depok.
              </p>
            </div>

            <div className="mb-0">
              <h6 className="fw-bold mb-1 text-success">29 Oktober 2025</h6>
              <p className="text-muted mb-0">
                <b>Ujian Teman K3:</b> di Training Center GMK melalui{" "}
                <b>temank3.kemnaker.go.id</b>.
              </p>
            </div>
          </div>

          {/* Info Teknis */}
          <p className="text-muted fs-5 mt-3" style={{ textAlign: "justify" }}>
            Peserta juga akan mengikuti ujian melalui aplikasi resmi{" "}
            <b>Teman K3</b>.
          </p>
          <ul className="text-muted fs-5">
            <li>Instruktur dari Kemnaker RI, praktisi, dan akademisi.</li>
            <li>
              Ujian teori & praktik, disertai sesi tanya jawab dan diskusi.
            </li>
            <li>
              Total 90 Jam Pelajaran (JP), terdiri dari teori, praktik, dan
              ujian.
            </li>
          </ul>
        </div>
      </section>

      {/* === SERTIFIKASI === */}
      <section className="py-5 bg-success bg-opacity-10 border-bottom">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-4">Sertifikasi Kemnaker RI</h2>
          <p className="text-muted mb-5">
            Peserta yang dinyatakan lulus pembinaan akan mendapatkan sertifikasi
            resmi dari Kementerian Ketenagakerjaan Republik Indonesia.
          </p>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-success mb-2">
                    {" "}
                    Sertifikat Kompetensi
                  </h5>
                  <p className="text-muted mb-0">
                    Diterbitkan oleh Kemnaker RI sebagai bukti kelulusan dan
                    kompetensi resmi di bidang Operator Tanur.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-success mb-2">
                    Lisensi / SIO Kemnaker
                  </h5>
                  <p className="text-muted mb-0">
                    Lisensi Operator (SIO) dari Kemnaker RI untuk menjalankan
                    tugas sesuai bidang yang telah dilatih.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AJAKAN */}
      <section className="py-5 bg-white border-bottom text-center">
        <div className="container">
          <h2 className="fw-bold text-success mb-3">
            ⚡ Ayo Bergabung Sekarang! ⚡
          </h2>
          <p className="text-muted mb-4">
            Tingkatkan kompetensi dan karier Anda dengan menjadi{" "}
            <b> Pesawat Tenaga dan Produksi (PTP)</b> bersertifikat
            <b> Kemnaker RI</b>.
            <br />
            Hubungi kami untuk pendaftaran dan informasi lebih lanjut.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 border">
                <h5 className="fw-bold text-success mb-3">
                  📞 Kontak & Pembayaran
                </h5>
                <p className="text-muted mb-1">
                  <b>Restu</b> <br /> 0813 6810 2031 (WA)
                </p>
                <p className="text-muted mb-1">
                  Office: 021 – 8621510 / 021 – 8660 8657 Ext. 203
                </p>
                <p className="text-muted small mb-0">
                  Bank Mandiri Cab. Puri Sentra Niaga Kalimalang
                  <br />
                  <b>No. Rek: 006-00-0601846-3</b>
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

      {/* === FAQ === */}
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

      {/* === BACK BUTTON === */}
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
