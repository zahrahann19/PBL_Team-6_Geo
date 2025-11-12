import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PTP() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const materiPTP = [
    {
      title: "Ahli K3 PTP",
      path: "/ptp/ahlik3_ptp",
      desc: "Pelatihan bagi calon ahli K3 yang bertanggung jawab mengawasi penerapan sistem K3 di tempat kerja sesuai dengan Permenaker No. 02/MEN/1992.",
    },
    {
      title: "Operator Mesin Produksi & Perkakas",
      path: "/ptp/produksi",
      desc: "Pembinaan operator agar memahami standar K3, pengoperasian aman mesin produksi, dan perawatan rutin.",
    },
    {
      title: "Operator Tanur",
      path: "/ptp/tanur",
      desc: "Diperuntukkan bagi tenaga kerja yang mengoperasikan tanur industri agar mencegah kecelakaan kerja dan kerusakan alat.",
    },
    {
      title: "Operator Diesel",
      path: "/ptp/diesel",
      desc: "Pelatihan untuk mengoperasikan dan merawat mesin diesel dengan aman sesuai standar industri.",
    },
    {
      title: "Teknisi PTP",
      path: "/ptp/teknisi",
      desc: "Program teknisi bagi tenaga kerja yang mendukung kegiatan PTP di bidang pemeliharaan dan pengujian alat.",
    },
  ];

  const faqs = [
    {
      q: "Apa itu PTP?",
      a: "PTP (Pesawat Tenaga dan Produksi) adalah kelompok alat yang menggunakan energi untuk proses produksi, seperti mesin, tanur, dan peralatan mekanik lainnya.",
    },
    {
      q: "Siapa yang wajib mengikuti pembinaan PTP?",
      a: "Operator, teknisi, dan ahli K3 yang menangani pesawat tenaga dan produksi di industri wajib mengikuti pembinaan sesuai bidangnya.",
    },
    {
      q: "Apa manfaat memiliki sertifikat PTP?",
      a: "Sebagai bukti kompetensi tenaga kerja dan persyaratan legal untuk pengoperasian alat di perusahaan.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* === HEADER === */}
      <section className="py-5 bg-white border-bottom">
        <div className="container mt-5">
          <h2 className="fw-bold text-success mb-3">
            Pembinaan Pesawat Tenaga dan Produksi (PTP)
          </h2>
          <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
            Program <strong>Pembinaan Pesawat Tenaga dan Produksi (PTP)</strong>{" "}
            merupakan upaya strategis dalam meningkatkan kompetensi tenaga kerja
            yang terlibat dalam pengoperasian, pemeliharaan, serta pengawasan
            alat-alat produksi di berbagai sektor industri. Pesawat tenaga dan
            produksi mencakup beragam peralatan seperti mesin-mesin industri,
            tanur, diesel, serta perkakas lainnya yang berfungsi menggerakkan
            proses produksi dan menjadi tulang punggung kegiatan manufaktur.
            <br />
            <br />
            Pelatihan ini dirancang agar tenaga kerja tidak hanya memahami aspek
            teknis dari peralatan tersebut, tetapi juga menguasai
            prinsip-prinsip Keselamatan dan Kesehatan Kerja (K3) yang wajib
            diterapkan selama proses operasional. Penerapan K3 yang tepat dapat
            mencegah kecelakaan kerja, mengurangi risiko kerusakan alat, serta
            meningkatkan efisiensi produksi.
          </p>
        </div>
      </section>

      {/* === SUB-MATERI === */}
      <section className="py-5 bg-gray-50 border-bottom">
        <div className="container">
          <h3 className="fw-bold text-success mb-4">Pembinaan PTP</h3>
          <div className="row g-4">
            {materiPTP.map((m, i) => (
              <div className="col-md-4" key={i}>
                <div
                  onClick={() => navigate(m.path)}
                  className="card h-100 border-0 shadow-sm rounded-4 hover-shadow transition cursor-pointer"
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

      {/* === FAQ === */}
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
