import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PUBT() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const materiPUBT = [
    {
      title: "Ahli K3 PUBT",
      path: "/pubt/ahliK3",
      desc: "Pelatihan bagi calon ahli K3 untuk peralatan bejana tekan dan boiler sesuai ketentuan Permenaker.",
    },
    {
      title: "Operator Boiler Kelas 1",
      path: "/pubt/boiler1",
      desc: "Pelatihan pengoperasian boiler kapasitas tinggi dengan prinsip K3 dan efisiensi energi.",
    },
    {
      title: "Operator Boiler Kelas 2",
      path: "/pubt/boiler2",
      desc: "Untuk operator boiler kapasitas menengah dengan fokus pada pengawasan tekanan dan perawatan alat.",
    },
    {
      title: "Teknisi Bejana Tekanan dan Tangki Timbun",
      path: "/pubt/tekbejana",
      desc: "Diperuntukkan bagi teknisi pemeliharaan bejana tekan agar mampu melakukan inspeksi dan perawatan aman.",
    },
  ];

  const faqs = [
    {
      q: "Apa itu PUBT?",
      a: "PUBT (Pesawat Uap dan Bejana Tekan) mencakup peralatan yang bekerja dengan tekanan uap atau gas, seperti boiler dan tangki tekan.",
    },
    {
      q: "Mengapa sertifikasi PUBT penting?",
      a: "Untuk memastikan operator memahami prinsip kerja, keselamatan, dan peraturan teknis alat bertekanan.",
    },
    {
      q: "Apakah pelatihan PUBT wajib?",
      a: "Ya, setiap tenaga kerja yang mengoperasikan atau merawat peralatan bertekanan wajib memiliki sertifikat kompetensi.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER */}
      <section className="py-5 bg-white border-bottom">
        <div className="container mt-5">
          <h2 className="fw-bold text-success mb-5 my-5">
            Pembinaan Pesawat Uap dan Bejana Tekan (PUBT)
          </h2>
          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
            Program <strong>Pembinaan Pesawat Uap dan Bejana Tekan (PUBT)</strong> bertujuan
            untuk membekali tenaga kerja dengan kemampuan dan pengetahuan teknis
            dalam mengoperasikan, merawat, dan mengawasi peralatan bertekanan
            seperti boiler, bejana tekan, tangki gas, serta sistem perpipaan
            bertekanan tinggi. 
            <br />
            Peralatan bertekanan merupakan salah satu
            komponen vital dalam proses industri — digunakan untuk menghasilkan
            uap, energi, maupun menyimpan fluida di bawah tekanan. Namun,
            penggunaan alat bertekanan memiliki risiko tinggi apabila tidak
            dioperasikan dengan benar, seperti ledakan, kebocoran, dan kerusakan
            material. Oleh karena itu, dibutuhkan tenaga kerja yang kompeten,
            terlatih, dan memahami sepenuhnya prinsip-prinsip K3 (Keselamatan
            dan Kesehatan Kerja) serta teknik pengendalian tekanan dan suhu.
          </p>
        </div>
      </section>

      {/* SUB-MATERI */}
      <section className="py-5 bg-gray-50 border-bottom">
        <div className="container">
          <h3 className="fw-bold text-success mb-4">Program PUBT</h3>
          <div className="row g-4">
            {materiPUBT.map((m, i) => (
              <div className="col-md-4" key={i}>
                <div
                  onClick={() => navigate(m.path)}
                  className="card h-100 border-0 shadow-sm rounded-4 transition"
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.02)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div className="card-body p-4">
                    <h5 className="fw-bold text-success mb-2">{m.title}</h5>
                    <p className="text-muted mb-0">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5 bg-white border-top">
        <div className="container">
          <h3 className="fw-bold text-success mb-4">Pertanyaan Umum</h3>
          <div className="accordion" id="faqAccordion">
            {faqs.map((f, i) => (
              <div className="accordion-item mb-2 rounded" key={i}>
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

      {/* === BACK BUTTON === */}
      <button
        onClick={() => navigate("/pembinaan")}
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
