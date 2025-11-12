import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PERTEK_BMAL() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const pertekProcess = [
    {
      step: 1,
      title: "Penyusunan Kajian Teknis",
      desc: "Pelaku usaha menyusun kajian teknis yang mencakup data sumber limbah, teknologi pengolahan, dan pemenuhan baku mutu.",
    },
    {
      step: 2,
      title: "Pengajuan Dokumen",
      desc: "Kajian teknis diajukan melalui OSS kepada KLHK atau Dinas Lingkungan Hidup sesuai kewenangan.",
    },
    {
      step: 3,
      title: "Verifikasi dan Penilaian",
      desc: "Instansi berwenang melakukan pemeriksaan administrasi dan teknis terhadap dokumen kajian.",
    },
    {
      step: 4,
      title: "Penerbitan PERTEK",
      desc: "Jika dokumen dinyatakan memenuhi syarat, diterbitkan Persetujuan Teknis (PERTEK).",
    },
    {
      step: 5,
      title: "Penerbitan SLO",
      desc: "Setelah implementasi berjalan, dilakukan verifikasi lapangan untuk penerbitan Surat Kelayakan Operasional (SLO).",
    },
  ];

  const faqs = [
    {
      q: "Apa itu PERTEK BMAL?",
      a: "PERTEK BMAL adalah Persetujuan Teknis yang menetapkan ketentuan pemenuhan Baku Mutu Air Limbah bagi pelaku usaha yang menghasilkan limbah cair.",
    },
    {
      q: "Siapa yang wajib memiliki PERTEK BMAL?",
      a: "Setiap pelaku usaha yang menghasilkan air limbah dan membuangnya ke badan air seperti sungai atau laut wajib memiliki PERTEK BMAL.",
    },
    {
      q: "Apakah PERTEK BMAL terpisah dari AMDAL atau UKL-UPL?",
      a: "Tidak. Proses PERTEK BMAL terintegrasi dengan persetujuan lingkungan seperti AMDAL atau UKL-UPL melalui sistem OSS.",
    },
  ];

  return (
    <div className="bg-light mt-5">
      {/* === HEADER SECTION (Deskripsi + Video) === */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row align-items-center">
            {/* === Deskripsi kiri === */}
            <div className="col-md-7">
              <h2 className="fw-bold text-success mb-3">Apa itu PERTEK BMAL?</h2>
          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                <strong>PERTEK BMAL</strong> (Persetujuan Teknis untuk Pemenuhan Baku Mutu Air Limbah)
                merupakan dokumen teknis yang wajib dimiliki oleh pelaku usaha yang menghasilkan
                limbah cair dan membuangnya ke lingkungan seperti sungai, danau, atau laut.
              <br />
              Tujuan utama PERTEK BMAL adalah memastikan bahwa setiap kegiatan usaha
                telah memiliki perencanaan pengelolaan limbah yang sesuai standar pemerintah
                serta menjaga kualitas lingkungan dari pencemaran.
              </p>
            </div>

            {/* Video di samping */}
            <div className="col-md-5 text-center">
              <div className="ratio ratio-16x9 shadow rounded">
                <iframe
                  src="/PERTEK-BMAL/Video_PertekBMAL.mp4"
                  title="Video Penjelasan PERTEK BMAL"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* === DASAR HUKUM === */}
<section className="py-5 bg-light border-bottom">
  <div className="container">
    <h2 className="fw-bold text-success mb-5 text-start">
      Dasar Hukum PERTEK BMAL
    </h2>

    <div className="d-flex flex-column gap-4">
      {/* Card 1 */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex align-items-start">
            <div
              className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
              style={{ width: "55px", height: "55px" }}
            >
              <span style={{ fontSize: "1.6rem" }}>⚖️</span>
            </div>
            <div>
              <h5 className="fw-bold text-success mb-2">Peraturan Pemerintah</h5>
              <p className="text-muted small mb-0">
                <b>PP Nomor 22 Tahun 2021</b> tentang Penyelenggaraan
                Perlindungan dan Pengelolaan Lingkungan Hidup.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex align-items-start">
            <div
              className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
              style={{ width: "55px", height: "55px" }}
            >
              <span style={{ fontSize: "1.6rem" }}>📜</span>
            </div>
            <div>
              <h5 className="fw-bold text-success mb-2">Peraturan Menteri LHK</h5>
              <p className="text-muted small mb-0">
                <b>Permen LHK No. 5 Tahun 2021</b> tentang Tata Cara Penerbitan Persetujuan Teknis
                dan Surat Kelayakan Operasional (SLO) di bidang Pengendalian Pencemaran Lingkungan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* === PROSES PERTEK BMAL === */}
      <section className="py-5 bg-white border-bottom">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-3">Proses PERTEK BMAL</h2>
          <p className="text-muted mb-5">
            Proses pengurusan PERTEK BMAL terintegrasi dengan sistem OSS dan persetujuan lingkungan seperti AMDAL atau UKL-UPL.
          </p>

          <div className="row g-4 justify-content-center">
            {pertekProcess.map((step) => (
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
              <h3 className="fw-bold text-success mb-3">
                Konsultasi PERTEK BMAL bersama Geo Mandiri Group
              </h3>
              <p className="fs-5 text-muted mb-4">
                Geo Mandiri Group membantu pelaku usaha menyusun dokumen teknis PERTEK BMAL
                secara profesional agar sesuai dengan ketentuan KLHK maupun DLH daerah.
              </p>
              <ul>
                <li>Penyusunan kajian teknis IPAL & limbah cair</li>
                <li>Pendampingan pengajuan OSS dan persetujuan lingkungan</li>
                <li>Konsultasi teknis bersama ahli lingkungan berpengalaman</li>
              </ul>
            </div>

            {/* Poster kanan */}
            <div className="col-md-6 text-center">
              <img
                src="/PERTEK-BMAL/Brosur_PERTEK-BMAL.jpg"
                alt="Poster PERTEK BMAL"
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
        ← Kembali
      </button>
    </div>
  );
}
