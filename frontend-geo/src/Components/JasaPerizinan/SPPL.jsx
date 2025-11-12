import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFileSignature,
  FaClipboardList,
  FaCheckCircle,
  FaFileAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function SPPL() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const spplProcess = [
    { step: 1, title: "Pendaftaran OSS", desc: "Pelaku usaha mendaftarkan perusahaannya melalui sistem OSS." },
    { step: 2, title: "Penentuan KBLI", desc: "Sistem menentukan otomatis apakah kegiatan wajib AMDAL, UKL-UPL, atau SPPL." },
    { step: 3, title: "Pengisian Formulir", desc: "Pelaku usaha mengisi pernyataan kesanggupan pengelolaan lingkungan." },
    { step: 4, title: "Integrasi dengan NIB", desc: "SPPL terbit otomatis dan terintegrasi dengan Nomor Induk Berusaha (NIB)." },
    { step: 5, title: "Tanpa Biaya", desc: "Pengajuan SPPL melalui OSS tidak dipungut biaya apa pun." },
  ];

  const faqs = [
    {
      q: "Apa itu SPPL?",
      a: "SPPL (Surat Pernyataan Kesanggupan Pengelolaan dan Pemantauan Lingkungan Hidup) adalah bentuk sederhana dari persetujuan lingkungan untuk kegiatan yang tidak wajib AMDAL maupun UKL-UPL.",
    },
    {
      q: "Siapa yang wajib memiliki SPPL?",
      a: "SPPL wajib dimiliki oleh usaha kecil dan mikro, seperti warung, bengkel kecil, atau usaha rumahan yang memiliki dampak lingkungan minimal.",
    },
    {
      q: "Apakah SPPL berbayar?",
      a: "Tidak. Pengajuan SPPL melalui sistem OSS sepenuhnya gratis dan terintegrasi dengan proses perizinan NIB.",
    },
  ];

  return (
    <div className="bg-light mt-5">
      {/* === HEADER (Deskripsi + Video) === */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row align-items-center">
            {/* === Deskripsi kiri === */}
            <div className="col-md-7">
              <h2 className="fw-bold text-success mb-3">Apa itu SPPL?</h2>
          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                <strong>SPPL</strong> (Surat Pernyataan Kesanggupan Pengelolaan dan Pemantauan
                Lingkungan Hidup) adalah salah satu bentuk persetujuan lingkungan yang paling sederhana.
                Dokumen ini diperuntukkan bagi usaha atau kegiatan yang tidak memiliki dampak penting
                terhadap lingkungan, sehingga tidak wajib menyusun <strong>AMDAL</strong> atau <strong>UKL-UPL</strong>.
                <br />
                Melalui SPPL, pelaku usaha menyatakan kesanggupan untuk melaksanakan upaya pengelolaan
                dan pemantauan lingkungan secara mandiri, seperti pengelolaan limbah domestik, penghematan
                energi, dan pemeliharaan kebersihan lingkungan sekitar.

              </p>

            </div>

            {/* Video di samping */}
            <div className="col-md-5 text-center">
              <div className="ratio ratio-16x9 shadow rounded">
                <iframe
                  src="/SPPL/Video_SPPL.mp4"
                  title="Video Penjelasan SPPL"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* === FUNGSI & TUJUAN SPPL === */}
<section className="py-5 bg-white border-bottom">
  <div className="container flex justify-center">
     <h2 className="fw-bold text-success mb-3 fs-2">
          Fungsi & Tujuan SPPL
        </h2>
    <div className="row align-items-center">
      {/* === Kiri: Isi / Tabel === */}
      <div className="col-md-7 mb-4 mb-md-0">
        <div className="card border-0 shadow-sm p-4">
          <table className="table table-bordered mb-0">
            <thead className="table-success text-success">
              <tr>
                <th>Aspek</th>
                <th>Penjelasan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-semibold">Pernyataan Komitmen</td>
                <td className="fs-6 text-muted">
                  Menunjukkan kesanggupan pelaku usaha dalam pengelolaan dan
                  pemantauan lingkungan hidup.
                </td>
              </tr>
              <tr>
                <td className="fw-semibold">Syarat Perizinan</td>
                <td className="fs-6 text-muted">
                  Menjadi dokumen wajib untuk memperoleh Nomor Induk Berusaha
                  (NIB) melalui sistem OSS.
                </td>
              </tr>
              <tr>
                <td className="fw-semibold">Panduan Pengelolaan</td>
                <td className="fs-6 text-muted">
                  Memberikan pedoman sederhana dalam pengelolaan limbah,
                  kebersihan, serta pemanfaatan ruang hijau.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

{/* === KRITERIA SPPL === */}
<section className="py-5 bg-white border-bottom">
  <div className="container">
    <div className="row align-items-center flex-md-row-reverse">
      {/* === Kanan: Isi === */}
      <div className="col-md-7 mb-4 mb-md-0">
        <div className="card border-0">
          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
            SPPL diperuntukkan bagi kegiatan usaha yang <b>berisiko rendah</b> dan
            tidak termasuk dalam kategori wajib UKL–UPL maupun AMDAL. Umumnya
            mencakup usaha mikro dan kecil seperti rumah makan, laundry, bengkel,
            toko, dan kegiatan serupa.
          </p>
          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
            Berdasarkan <b>Peraturan Pemerintah No. 22 Tahun 2021</b>, kewajiban
            SPPL ditentukan oleh tingkat risiko kegiatan (KBLI), bukan oleh luas
            lahan atau besarnya modal usaha.
          </p>
        </div>
      </div>

      {/* === Kiri: Judul & Icon === */}
      <div className="col-md-5 text-center text-md-start">
        <div
          className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
          style={{ width: "80px", height: "80px" }}
        >
          <FaClipboardList className="text-success" style={{ fontSize: "2.2rem" }} />
        </div>
        <h2 className="fw-bold text-success mb-3 fs-2">
          Kriteria Kegiatan Wajib SPPL
        </h2>
      </div>
    </div>
  </div>
</section>


      {/* === PROSES SPPL === */}
      <section className="py-5 bg-light border-bottom">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-3">Proses Pengajuan SPPL</h2>
          <p className="text-muted mb-5">
            Sejak sistem <strong>OSS</strong> diberlakukan, pengajuan SPPL dilakukan secara online
            dan otomatis terintegrasi dengan NIB.
          </p>

          <div className="row g-4 justify-content-center">
            {spplProcess.map((step) => (
              <div key={step.step} className="col-6 col-md-3 col-lg-2">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center">
                    <div
                      className="bg-success text-white rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3"
                      style={{ width: "50px", height: "50px", fontWeight: "bold" }}
                    >
                      {step.step}
                    </div>
                    <h6 className="fw-bold">{step.title}</h6>
                    <p className="text-muted small">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PROMOSI JASA === */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Deskripsi kiri */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="fw-bold text-success mb-3">Konsultasi SPPL bersama Geo Mandiri Group</h3>
              <p className="fs-5 text-muted mb-4">
                Geo Mandiri Group siap membantu pelaku usaha kecil dan menengah
                dalam penyusunan SPPL sesuai format OSS agar proses perizinan berjalan lancar dan sah secara hukum.
              </p>
              <ul>
                <li>Pendampingan pengisian OSS</li>
                <li>Asistensi teknis dokumen lingkungan</li>
                <li>Konsultasi gratis dan pelayanan cepat</li>
              </ul>
            </div>

            {/* Poster kanan */}
            <div className="col-md-6 text-center">
              <img
                src="/SPPL/Brosur_SPPL.jpg"
                alt="Poster SPPL"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="bg-light py-5 border-top">
        <div className="container">
          <h2 className="text-center fw-bold text-success mb-4">Pertanyaan Umum</h2>
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
