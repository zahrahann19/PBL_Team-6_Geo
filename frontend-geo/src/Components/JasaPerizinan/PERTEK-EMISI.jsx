import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCloud,
  FaIndustry,
  FaFilter,
  FaCheckCircle,
} from "react-icons/fa";

export default function PERTEK_EMISI() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const pertekEmisiSteps = [
    { step: 1, title: "Penyusunan Kajian Teknis", desc: "Mencakup deskripsi kegiatan, identifikasi sumber emisi, rona lingkungan, serta rencana pengendalian dan pemantauan emisi." },
    { step: 2, title: "Pengajuan Dokumen", desc: "Diajukan kepada KLHK atau DLH melalui sistem OSS." },
    { step: 3, title: "Verifikasi Teknis", desc: "Dilakukan pemeriksaan kelayakan oleh tim teknis dari instansi berwenang." },
    { step: 4, title: "Penerbitan PERTEK", desc: "Persetujuan diterbitkan apabila memenuhi seluruh persyaratan teknis." },
    { step: 5, title: "Penerbitan SLO", desc: "Setelah implementasi berjalan, diterbitkan Surat Kelayakan Operasional (SLO)." },
  ];

  const faqs = [
    { q: "Apa itu PERTEK Emisi?", a: "Persetujuan Teknis Pemenuhan Baku Mutu Emisi untuk memastikan emisi udara tidak melebihi standar pencemaran." },
    { q: "Siapa yang wajib memiliki PERTEK Emisi?", a: "Usaha wajib AMDAL atau UKL-UPL yang memiliki sumber emisi udara seperti pabrik, PLTU, insinerator, dan pertambangan." },
    { q: "Apakah PERTEK Emisi terpisah dari izin lingkungan?", a: "Tidak. Proses PERTEK Emisi terintegrasi dengan persetujuan lingkungan melalui OSS." },
  ];

  return (
    <div className="bg-light mt-5">
      {/* HEADER */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fw-bold text-success mb-3">Apa itu PERTEK Emisi?</h2>
          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                <strong>PERTEK Emisi</strong> (Persetujuan Teknis Pemenuhan Baku Mutu Emisi)
                wajib dimiliki oleh setiap usaha yang menghasilkan emisi udara dari proses pembakaran atau kegiatan industri.
                Tujuannya adalah memastikan emisi yang dilepaskan tidak melebihi batas baku mutu yang telah ditetapkan pemerintah.
              <br />
                              Dokumen ini menjadi syarat penting dalam sistem <strong>Online Single Submission (OSS)</strong> 
                dan berfungsi untuk menjaga kualitas udara serta mencegah pencemaran dari kegiatan usaha.

              </p>
              
            </div>

             {/* Video di samping */}
            <div className="col-md-5 text-center">
              <div className="ratio ratio-16x9 shadow rounded">
                <iframe
                  src="/PERTEK-EMISI/Video_PERTEK-EMISI.mp4"
                  title="Video Penjelasan PERTEK EMISI"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* === RUANG LINGKUP & DASAR HUKUM === */}
<section className="py-5 bg-light border-bottom">
  <div className="container text-center">
    <h2 className="fw-bold text-success mb-5">PERTEK Emisi</h2>

    <div className="row g-4 justify-content-center">
      {/* Card 1 */}
      <div className="col-12 col-md-6">
        <div className="card border-0 shadow-sm h-100 text-start">
          <div className="card-body p-4">
            <h5 className="fw-bold text-success mb-3">Ruang Lingkup</h5>
            <p className="text-muted small">
              Wajib dimiliki oleh kegiatan yang memiliki sumber emisi udara, termasuk:
            </p>
            <ul className="text-muted small">
              <li>Pabrik dengan cerobong asap industri</li>
              <li>Pembangkit listrik berbahan bakar fosil</li>
              <li>Insinerator / pembakaran limbah</li>
              <li>Pertambangan yang menghasilkan debu</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-12 col-md-6">
        <div className="card border-0 shadow-sm h-100 text-start">
          <div className="card-body p-4">
            <h5 className="fw-bold text-success mb-3">Dasar Hukum</h5>
            <ul className="text-muted small">
              <li><b>PP No. 22 Tahun 2021</b> tentang Pengelolaan Lingkungan Hidup.</li>
              <li><b>Permen LHK No. 5 Tahun 2021</b> tentang Tata Cara Persetujuan Teknis & SLO.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* PROSES */}
      <section className="py-5 bg-white border-bottom">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-3">Proses Pengurusan PERTEK Emisi</h2>
          <div className="row g-4 justify-content-center">
            {pertekEmisiSteps.map((s) => (
              <div key={s.step} className="col-6 col-md-3 col-lg-2">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center">
                    <div className="bg-success text-white rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3"
                      style={{ width: "50px", height: "50px", fontWeight: "bold" }}>{s.step}</div>
                    <h6 className="fw-bold">{s.title}</h6>
                    <p className="text-muted small">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMOSI */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="fw-bold text-success mb-3">Konsultasi PERTEK Emisi bersama Geo Mandiri Group</h3>
              <p className="fs-5 text-muted mb-4">
                Kami membantu penyusunan dokumen kajian teknis PERTEK Emisi agar sesuai dengan standar KLHK
                dan DLH daerah serta mendampingi proses pengajuan melalui sistem OSS.
              </p>
              <ul>
                <li>Identifikasi sumber dan beban emisi</li>
                <li>Desain sistem pengendalian (filter/scrubber)</li>
                <li>Pendampingan verifikasi teknis dan SLO</li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img src="/PERTEK-Emisi/Brosur_PERTEK-EMISI.jpg" alt="Poster PERTEK Emisi"
                className="img-fluid rounded shadow" style={{ maxHeight: "400px", objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light py-5 border-top">
        <div className="container">
          <h2 className="text-center fw-bold text-success mb-4">Pertanyaan Umum</h2>
          <div className="accordion" id="faqAccordion">
            {faqs.map((f, i) => (
              <div className="accordion-item mb-2" key={i}>
                <h2 className="accordion-header">
                  <button className={`accordion-button ${expandedFaq === i ? "" : "collapsed"}`}
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                    {f.q}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${expandedFaq === i ? "show" : ""}`}>
                  <div className="accordion-body">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK */}
      <button onClick={() => navigate(-1)} className="btn btn-success"
        style={{ position: "fixed", bottom: "30px", left: "30px", borderRadius: "30px", padding: "10px 25px", boxShadow: "0 4px 8px rgba(0,0,0,0.3)", zIndex: 1000 }}>
        ← Kembali
      </button>
    </div>
  );
}
