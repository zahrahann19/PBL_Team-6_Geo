import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OpDiesel() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      q: "Apa tujuan pelatihan Operator Motor Diesel (Genset)?",
      a: "Untuk memastikan operator memahami keselamatan kerja dalam pengoperasian motor diesel, serta mematuhi regulasi K3 sesuai UU No. 1 Tahun 1970 dan Permenaker No. PER.36/MEN/2016.",
    },
    {
      q: "Apa saja materi yang diajarkan?",
      a: "Materi dasar K3, kelistrikan, perangkat keselamatan, troubleshooting, sistem pengendalian, lingkungan kerja, serta job safety analysis. Termasuk ujian teori dan praktek.",
    },
    {
      q: "Bagaimana metode pelatihannya?",
      a: "3 hari teori online via Zoom, 1 hari praktek offline. Dilengkapi pre-test, kuis, Google Classroom, WA Group, dan ujian online via TemanK3.",
    },
    {
      q: "Berapa biaya pelatihan?",
      a: "Rp 6.500.000 per peserta (belum termasuk pajak dan akomodasi).",
    },
    {
      q: "Apa persyaratan pesertanya?",
      a: "Maks. usia 45 tahun, pengalaman di bidang terkait, dokumen lengkap, dan perangkat online (laptop + smartphone Android).",
    },
  ];

  return (
    <div className="bg-light mt-5">
      {/* === HEADER === */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fw-bold text-success mb-3">
                Pembinaan K3 Operator Penggerak Mula (Motor Diesel/Genset)
              </h2>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                Pelatihan ini dirancang untuk operator Motor Diesel (Genset)
                yang menghadapi potensi bahaya tinggi dalam pengoperasiannya.
                Mengacu pada <b>UU No.1 Tahun 1970</b> dan{" "}
                <b>PER.36/MEN/2016</b>, pelatihan ini memberikan pemahaman
                menyeluruh tentang keselamatan dan pengendalian risiko dalam
                penggunaan pesawat tenaga & produksi.
                <br />
                Pelatihan ini membekali peserta dengan pemahaman terkait aspek
                teknis dan keselamatan kerja pengoperasian motor diesel, baik
                dari sisi teori maupun praktek. Materi pelatihan terbagi
                menjadi:
              </p>
              <ul className="text-muted fs-5">
                <li>
                  <b>Dasar:</b> Kebijakan & peraturan K3
                </li>
                <li>
                  <b>Inti:</b> Kelistrikan, alat keselamatan, troubleshooting,
                  pengendalian & pemeliharaan
                </li>
                <li>
                  <b>Penunjang:</b> Lingkungan kerja, perhitungan kapasitas, JSA
                </li>
                <li>
                  <b>Ujian:</b> Teori via Zoom/TemanK3 & praktek langsung
                </li>
              </ul>
            </div>
            <div className="col-md-5 text-center">
              <img
                src="/PTP/OpDiesel.png"
                alt="Operator Diesel"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "350px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        {/* === TENTANG PELATIHAN === */}

        <div className="container mt-5">
          <h3 className="fw-bold text-success mb-3">
            {" "}
            Jadwal & Biaya Pembinaan
          </h3>
          <p className="text-muted fs-5 mt-4">
            <b>Jadwal:</b> 20 – 23 Oktober 2025 <br />
            (3 hari teori online, 1 hari praktek offline)
          </p>
          <p className="text-muted fs-5">
            <b>Investasi:</b> Rp 6.500.000,- / peserta <br />
            (Belum termasuk pajak dan akomodasi)
          </p>
        </div>
      </section>

      {/* === SERTIFIKASI === */}
      <section className="py-5 bg-success bg-opacity-10 border-bottom">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-4">Sertifikasi Kemnaker RI</h2>
          <p className="text-muted mb-5">
            Peserta yang lulus ujian akan mendapatkan{" "}
            <b>Sertifikat & Lisensi (SIO)</b> Operator dari Kementerian
            Ketenagakerjaan Republik Indonesia.
          </p>
          <div className="row justify-content-center g-4">
            <div className="col-md-5">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-success mb-2">
                    🎓 Sertifikat Kompetensi
                  </h5>
                  <p className="text-muted mb-0">
                    Bukti kelulusan dan pemenuhan kompetensi sebagai operator
                    diesel.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-success mb-2">
                    🪪 Lisensi (SIO) Operator
                  </h5>
                  <p className="text-muted mb-0">
                    Diterbitkan oleh Kemnaker RI dan berlaku nasional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === AJAKAN DAFTAR === */}
      <section className="py-5 bg-white border-bottom text-center">
        <div className="container">
          <h2 className="fw-bold text-success mb-3">
            🚀 Siap Jadi Operator Profesional?
          </h2>
          <p className="text-muted mb-4">
            Tingkatkan kompetensi dan keselamatan kerja Anda dengan mengikuti
            pelatihan ini. Dapatkan sertifikat dan lisensi resmi dari Kemnaker
            RI.
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
                  Office: (021) 8621510 / 8660 8657 Ext. 203
                </p>
                <p className="text-muted small mb-0">
                  Bank Mandiri Cab. Puri Sentra Niaga Kalimalang
                  <br />
                  <b>No. Rekening: 006-00-0601846-3</b>
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
