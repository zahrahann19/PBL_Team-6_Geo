import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFlask, FaWarehouse, FaBox, FaShieldAlt } from "react-icons/fa";

export default function RINTEK_LB3() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const prosesRintek = [
    {
      step: 1,
      title: "Penyusunan Dokumen",
      desc: "Meliputi identifikasi limbah B3, lokasi penyimpanan, pengemasan, dan SOP penanganan.",
    },
    {
      step: 2,
      title: "Pengajuan Melalui OSS",
      desc: "RINTEK LB3 diajukan bersama persetujuan lingkungan (AMDAL/UKL-UPL).",
    },
    {
      step: 3,
      title: "Verifikasi Teknis",
      desc: "DLH atau KLHK menilai kesesuaian dokumen dengan ketentuan teknis.",
    },
    {
      step: 4,
      title: "Penerbitan RINTEK LB3",
      desc: "Diterbitkan sebagai bagian dari persetujuan lingkungan kegiatan.",
    },
    {
      step: 5,
      title: "Penerbitan SLO",
      desc: "Setelah beroperasi, dilakukan verifikasi lapangan untuk SLO.",
    },
  ];

  const faqs = [
    {
      q: "Apa itu RINTEK LB3?",
      a: "RINTEK LB3 adalah Rincian Teknis Penyimpanan Limbah Bahan Berbahaya dan Beracun (B3) yang wajib bagi kegiatan yang menghasilkan limbah B3.",
    },
    {
      q: "Apa saja informasi dalam RINTEK LB3?",
      a: "Identifikasi limbah, tata letak tempat penyimpanan sementara, cara pengemasan, SOP penanganan, dan fasilitas keselamatan.",
    },
    {
      q: "Apa bedanya RINTEK LB3 dan PERTEK LB3?",
      a: "RINTEK LB3 fokus pada penyimpanan sementara limbah B3, sedangkan PERTEK LB3 mengatur pengelolaan (pengumpulan, pemanfaatan, pengolahan).",
    },
  ];

  return (
    <div className="bg-light mt-5">
      {/* HEADER */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fw-bold text-success mb-3">Apa itu RINTEK LB3?</h2>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                <strong>RINTEK LB3</strong> (Rincian Teknis Penyimpanan Limbah
                B3) adalah dokumen teknis yang memuat informasi cara penyimpanan
                sementara limbah B3 di lokasi penghasil sebelum diserahkan
                kepada pihak pengelola berizin.
                <br />
                Dokumen ini disusun sesuai dengan{" "}
                <strong>PP No. 22 Tahun 2021</strong> dan
                <strong> Permen LHK No. 6 Tahun 2021</strong> sebagai bagian
                dari persetujuan lingkungan.
              </p>
            </div>

            {/* Video di samping */}
            <div className="col-md-5 text-center">
              <div className="ratio ratio-16x9 shadow rounded">
                <iframe
                  src="/RINTEK_LB3/Video_RINTEK-LB3.mp4"
                  title="Video Penjelasan RINTEK LB3"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === INFORMASI RINTEK LB3 === */}
<section className="py-5 bg-white border-bottom">
  <div className="container">
    <div className="row  text-start">
      <div className="col-md-8">
        <h2 className="fw-bold text-success mb-4 fs-2">
          Informasi dalam RINTEK LB3
        </h2>
                  <ul className="text-start fs-5 mb-0">
            <li>Identifikasi jenis dan jumlah limbah B3</li>
            <li>Tata letak dan deskripsi Tempat Penyimpanan Sementara (TPS) Limbah B3</li>
            <li>Pengemasan dan pelabelan limbah sesuai ketentuan</li>
            <li>Prosedur tanggap darurat dan penanganan tumpahan</li>
            <li>Peralatan keselamatan kerja dan sarana darurat</li>
          </ul>
      </div>
    </div>
  </div>
</section>

      {/* PROSES */}
      <section className="py-5 bg-light border-bottom">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-3">
            Proses Pengurusan RINTEK LB3
          </h2>
          <div className="row g-4 justify-content-center">
            {prosesRintek.map((s) => (
              <div key={s.step} className="col-6 col-md-3 col-lg-2">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center">
                    <div
                      className="bg-success text-white rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        fontWeight: "bold",
                      }}
                    >
                      {s.step}
                    </div>
                    <h6 className="fw-bold">{s.title}</h6>
                    <p className="text-muted small">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

{/* === PERBEDAAN RINTEK & PERTEK LB3 === */}
<section className="py-5 bg-white border-bottom">
  <div className="container">
    <div className="row ">
      <div className="col-md-8">
        <h2 className="fw-bold text-success mb-4 fs-2">
          Perbedaan RINTEK dan PERTEK LB3
        </h2>

        <div className="d-flex justify-content-center">
          <div className="card border-0 shadow-sm p-4 w-auto">
            <table className="table table-bordered mb-0 align-middle">
              <thead className="table-success text-success">
                <tr>
                  <th className="text-center">Aspek</th>
                  <th className="text-center">RINTEK LB3</th>
                  <th className="text-center">PERTEK LB3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-semibold">Fokus Kegiatan</td>
                  <td className="text-muted fs-6 text-start">
                    Penyimpanan sementara limbah B3 di lokasi penghasil.
                  </td>
                  <td className="text-muted fs-6 text-start">
                    Pengelolaan limbah B3 seperti pengumpulan, pemanfaatan,
                    pengolahan, atau penimbunan oleh pihak berizin.
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">Pelaku</td>
                  <td className="text-muted fs-6 text-start">
                    Pelaku usaha penghasil limbah B3.
                  </td>
                  <td className="text-muted fs-6 text-start">
                    Pihak ketiga yang memiliki izin pengelolaan limbah B3.
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">Keluaran Dokumen</td>
                  <td className="text-muted fs-6 text-start">
                    Rencana teknis penyimpanan limbah B3 di TPS.
                  </td>
                  <td className="text-muted fs-6 text-start">
                    Persetujuan teknis pengelolaan limbah B3 dari instansi lingkungan.
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">Dasar Hukum</td>
                  <td className="text-muted fs-6 text-start">
                    PP No. 22 Tahun 2021 & PermenLHK No. 6 Tahun 2021.
                  </td>
                  <td className="text-muted fs-6 text-start">
                    PP No. 22 Tahun 2021 & PermenLHK No. 19 Tahun 2021.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* PROMOSI */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="fw-bold text-success mb-3">
                Konsultasi RINTEK LB3 bersama Geo Mandiri Group
              </h3>
              <p className="fs-5 text-muted mb-4">
                Kami membantu penyusunan RINTEK LB3 sesuai standar KLHK dan DLH,
                termasuk layout TPS, pengemasan limbah, dan prosedur SOP.
              </p>
              <ul>
                <li>Pendampingan penyusunan RINTEK LB3 lengkap</li>
                <li>Pemenuhan ketentuan OSS berbasis risiko</li>
                <li>Konsultasi dengan ahli teknik lingkungan</li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="/RINTEK_LB3/Brosur_RINTEKLB3.jpg"
                alt="Brosur RINTEK LB3"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>
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
            {faqs.map((f, i) => (
              <div className="accordion-item mb-2" key={i}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      expandedFaq === i ? "" : "collapsed"
                    }`}
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  >
                    {f.q}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    expandedFaq === i ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK */}
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
