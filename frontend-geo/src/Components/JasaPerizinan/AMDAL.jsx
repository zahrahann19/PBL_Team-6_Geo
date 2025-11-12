import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AMDAL() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const amdalProcess = [
    { step: 1, title: "Penapisan", desc: "Menentukan jenis dokumen lingkungan yang diperlukan." },
    { step: 2, title: "Pelingkupan", desc: "Mengidentifikasi dampak penting (KA-ANDAL)." },
    { step: 3, title: "Penyusunan", desc: "Menyusun dokumen ANDAL, RKL, dan RPL." },
    { step: 4, title: "Penilaian", desc: "Dilakukan oleh Komisi Penilai AMDAL." },
    { step: 5, title: "SKKLH", desc: "Penerbitan Surat Keputusan Kelayakan Lingkungan." },
  ];

  const faqs = [
    {
      q: "Apa itu AMDAL?",
      a: "AMDAL adalah kajian mengenai dampak penting suatu usaha terhadap lingkungan yang menjadi dasar penerbitan persetujuan lingkungan (SKKLH).",
    },
    {
      q: "Apa dokumen yang termasuk dalam AMDAL?",
      a: "KA-ANDAL, ANDAL, RKL, dan RPL.",
    },
    {
      q: "Berapa lama proses AMDAL?",
      a: "Proses AMDAL biasanya memakan waktu beberapa bulan tergantung kompleksitas kegiatan.",
    },
  ];

  return (
    <div className="bg-light mt-5">
      {/* === HEADER SECTION (deskripsi + video samping) === */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row align-items-center">
            {/* === Teks Kiri === */}
            <div className="col-md-7">
              <h2 className="fw-bold text-success mb-3">Apa itu AMDAL?</h2>
          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                AMDAL (Analisis Mengenai Dampak Lingkungan) adalah kajian penting terhadap
                dampak suatu rencana usaha atau kegiatan terhadap lingkungan hidup. Dokumen ini
                menjadi syarat utama dalam proses perizinan berusaha dan menjamin agar kegiatan
                berjalan berkelanjutan tanpa menimbulkan kerusakan lingkungan.
              </p>

            </div>

            {/* Video di samping */}
            <div className="col-md-5 text-center">
              <div className="ratio ratio-16x9 shadow rounded">
                <iframe
                  src="/AMDAL/Video_AMDAL.mp4"
                  title="Video Penjelasan AMDAL"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === DASAR HUKUM & PERSYARATAN === */}
<section className="py-5 bg-light border-bottom">
  <div className="container text-center">
    <h2 className="fw-bold text-success mb-5">Dasar Hukum & Persyaratan</h2>

    <div className="row g-4 justify-content-center">
      {/* Card 1 - Dasar Hukum */}
      <div className="col-12 col-md-6">
        <div className="card border-0 shadow-sm h-100 text-start">
          <div className="card-body p-4">
            <div
              className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <span style={{ fontSize: "1.8rem" }}>⚖️</span>
            </div>
            <h5 className="fw-bold text-success mb-3">Dasar Hukum</h5>
            <p className="text-muted small mb-0">
              Berdasarkan <b>Undang-Undang No. 32 Tahun 2009</b> tentang Perlindungan dan Pengelolaan
              Lingkungan Hidup, <b>PP No. 27 Tahun 2012</b> tentang Izin Lingkungan, serta
              <b> PP No. 22 Tahun 2021</b> Pasal 49 ayat 6.  
              <br /><br />
              SKKLH berlaku selama kegiatan berlangsung sepanjang tidak ada perubahan usaha.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 - Persyaratan Dokumen */}
      <div className="col-12 col-md-6">
        <div className="card border-0 shadow-sm h-100 text-start">
          <div className="card-body p-4">
            <div
              className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <span style={{ fontSize: "1.8rem" }}>📋</span>
            </div>
            <h5 className="fw-bold text-success mb-3">Persyaratan Dokumen</h5>
            <p className="text-muted small mb-2">
              Dokumen yang perlu disiapkan dalam pengajuan AMDAL antara lain:
            </p>
            <ul className="text-muted small ps-3">
              <li>Akta Pendirian Perusahaan</li>
              <li>Sertifikat Tanah</li>
              <li>Gambar Teknis Bangunan (Arsitektur, Struktur, M/E)</li>
              <li>TKPRD dan Masterplan dari Dinas Tata Ruang</li>
              <li>Persetujuan Teknis seperti:</li>
              <ul>
                <li>Pertek Air Limbah (BMAL)</li>
                <li>Rintek LB3</li>
                <li>Pertek Emisi</li>
                <li>Andalalin</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* === PROSES AMDAL === */}
      <section className="py-5 bg-white border-bottom">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-3">Proses AMDAL</h2>
          <p className="text-muted mb-5">
            Lima tahapan utama dalam penyusunan dokumen AMDAL hingga terbitnya persetujuan lingkungan.
          </p>

          <div className="row g-4 justify-content-center">
            {amdalProcess.map((step) => (
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
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* Deskripsi kiri */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="fw-bold text-success mb-3">Konsultasi Bersama Geo Mandiri Group</h3>
              <p className="fs-5 text-muted mb-4">
                Kami siap membantu Anda menyusun dokumen AMDAL (ANDAL, RKL, dan RPL)
                agar proses persetujuan lingkungan berjalan lancar dan sesuai regulasi.
              </p>
              <ul>
                <li>Tim profesional & ahli bersertifikat</li>
                <li>Proses cepat dan sesuai standar KLHK</li>
                <li>Konsultasi gratis bersama tenaga ahli</li>
              </ul>
            </div>

            {/* Poster kanan */}
            <div className="col-md-6 text-center">
              <img
                src="/AMDAL/Brosur-AMDAL.jpg"
                alt="Poster Jasa Konsultan AMDAL"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="bg-white py-5 border-top">
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
