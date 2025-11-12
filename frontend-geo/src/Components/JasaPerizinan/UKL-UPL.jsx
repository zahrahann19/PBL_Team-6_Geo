import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBalanceScale, FaClipboardList } from "react-icons/fa"; // ✅ Tambah ikon

export default function UKLUPL() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const uklProcess = [
    { step: 1, title: "Pendaftaran OSS", desc: "Pelaku usaha mendaftar dan memperoleh NIB melalui sistem OSS." },
    { step: 2, title: "Penapisan", desc: "Sistem otomatis menentukan apakah wajib UKL-UPL atau dokumen lain." },
    { step: 3, title: "Penyusunan Formulir", desc: "Pelaku usaha mengisi data kegiatan, dampak, serta rencana pengelolaan." },
    { step: 4, title: "Verifikasi", desc: "Dokumen diperiksa oleh Dinas Lingkungan Hidup setempat." },
    { step: 5, title: "Persetujuan Lingkungan", desc: "Instansi berwenang menerbitkan persetujuan lingkungan resmi." },
  ];

  const faqs = [
    {
      q: "Apa itu UKL-UPL?",
      a: "UKL-UPL adalah singkatan dari Upaya Pengelolaan Lingkungan dan Upaya Pemantauan Lingkungan. Dokumen ini wajib bagi kegiatan yang tidak termasuk kategori wajib AMDAL.",
    },
    {
      q: "Apa perbedaan UKL-UPL dengan AMDAL?",
      a: "AMDAL diperuntukkan bagi kegiatan berdampak besar, sedangkan UKL-UPL untuk kegiatan berskala lebih kecil dengan dampak yang tidak signifikan.",
    },
    {
      q: "Apakah UKL-UPL harus disusun oleh konsultan?",
      a: "Sangat disarankan disusun oleh konsultan lingkungan berpengalaman agar sesuai format OSS dan memenuhi standar Dinas Lingkungan Hidup.",
    },
  ];

  return (
    <div className="bg-light mt-5">

      {/* === HEADER SECTION (Deskripsi + Video) === */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fw-bold text-success mb-3">Apa itu UKL-UPL?</h2>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                UKL-UPL (Upaya Pengelolaan dan Pemantauan Lingkungan)
                adalah dokumen lingkungan yang wajib disusun oleh pelaku usaha
                untuk mendapatkan persetujuan lingkungan. Dokumen ini diperuntukkan
                bagi usaha atau kegiatan yang <strong>tidak termasuk dalam kriteria wajib AMDAL</strong>.
                <br />
                <strong>UKL (Upaya Pengelolaan Lingkungan)</strong> berisi langkah-langkah
                pengendalian dampak seperti penerapan teknologi ramah lingkungan,
                pengolahan limbah, dan mitigasi risiko lingkungan. Sedangkan{" "}
                <strong>UPL (Upaya Pemantauan Lingkungan)</strong> berisi kegiatan
                observasi dan pelaporan rutin untuk memastikan efektivitas pengelolaan lingkungan.
              </p>
            </div>

            <div className="col-md-5 text-center">
              <div className="ratio ratio-16x9 shadow rounded">
                <iframe
                  src="/UKL-UPL/Video_UKLUPL.mp4"
                  title="Video Penjelasan UKL UPL"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === DASAR HUKUM === */}
      <section className="py-5 bg-success bg-opacity-10 border-bottom">
        <div className="container">
          <div className="row align-items-center">
            {/* Ikon kiri */}
            <div className="col-md-5 text-center mb-4 mb-md-0">
              <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center shadow"
                style={{ width: "140px", height: "140px" }}>
                <FaBalanceScale size={70} />
              </div>
            </div>

            {/* Teks kanan */}
            <div className="col-md-7">
              <h2 className="fw-bold text-success mb-3">Dasar Hukum</h2>
              <p className="text-muted fs-6" style={{ textAlign: "justify" }}>
                Landasan hukum pelaksanaan UKL–UPL diatur dalam:
              </p>
              <ul className="text-muted fs-6" style={{ textAlign: "justify" }}>
                <li><b>UU No. 32 Tahun 2009</b> tentang Perlindungan dan Pengelolaan Lingkungan Hidup</li>
                <li><b>PP No. 22 Tahun 2021</b> tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup</li>
                <li>Integrasi dalam sistem <b>OSS</b> berdasarkan <b>UU Cipta Kerja</b></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === PROSEDUR UKL-UPL === */}
      <section className="py-5 bg-light border-bottom">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-3">Prosedur UKL-UPL</h2>
          <p className="text-muted mb-5">
            Tahapan penyusunan UKL-UPL berdasarkan PP No. 22 Tahun 2021 dan sistem OSS.
          </p>

          <div className="row g-4 justify-content-center">
            {uklProcess.map((step) => (
              <div key={step.step} className="col-6 col-md-3 col-lg-2">
                <div className="border-0 shadow-sm bg-white p-3 rounded h-100">
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
            ))}
          </div>
        </div>
      </section>

{/* === PERBEDAAN UKL-UPL & AMDAL === */}
<section className="py-5 bg-white border-bottom">
  <div className="container flex justify-center">
    <div className="row justify-content-center text-center">
      <div className="col-md-8">
        <h2 className="fw-bold text-success mb-3">
          Perbedaan UKL–UPL dan AMDAL
        </h2>
        <p className="text-muted fs-6" style={{ textAlign: "justify" }}>
          Perbedaan utama antara UKL–UPL dan AMDAL terletak pada skala dampak
          lingkungan dan kompleksitas analisis:
        </p>
        <div className="d-flex justify-content-center">
          <table className="table table-bordered mt-3 small text-muted w-auto">
            <thead className="table-success text-success">
              <tr>
                <th>Aspek</th>
                <th>UKL–UPL</th>
                <th>AMDAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Skala Dampak</td>
                <td>Berdampak kecil hingga sedang</td>
                <td>Berdampak besar dan penting</td>
              </tr>
              <tr>
                <td>Proses</td>
                <td>Formulir sederhana melalui OSS</td>
                <td>Analisis mendalam oleh tim ahli</td>
              </tr>
              <tr>
                <td>Waktu Penyusunan</td>
                <td>Lebih cepat (±1–2 minggu)</td>
                <td>Lebih lama (bisa ≥1 bulan)</td>
              </tr>
              <tr>
                <td>Penanggung Jawab</td>
                <td>Pelaku usaha / konsultan</td>
                <td>Tim penyusun AMDAL tersertifikasi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* === PROMOSI === */}
      <section className="py-5 bg-light border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="fw-bold text-success mb-3">
                Konsultasi UKL-UPL bersama Geo Mandiri Group
              </h3>
              <p className="fs-5 text-muted mb-4">
                Geo Mandiri Group menyediakan jasa penyusunan UKL-UPL lengkap,
                mulai dari identifikasi dampak, penyusunan formulir OSS,
                hingga pendampingan verifikasi Dinas Lingkungan Hidup.
              </p>
              <ul>
                <li>Tim ahli bersertifikat dan berpengalaman</li>
                <li>Proses cepat, akurat, dan sesuai standar OSS</li>
                <li>Konsultasi dan asistensi teknis gratis</li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="/UKL-UPL/Brosur-UKLUPL.jpg"
                alt="Poster UKL-UPL"
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
                    className={`accordion-button ${expandedFaq === index ? "" : "collapsed"}`}
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
