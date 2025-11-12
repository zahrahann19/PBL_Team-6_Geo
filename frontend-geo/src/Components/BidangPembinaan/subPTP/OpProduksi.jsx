import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OpProduksi() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      q: "Apa tujuan pembinaan Operator K3 Mesin Produksi & Perkakas?",
      a: "Untuk mengurangi risiko kecelakaan kerja, meningkatkan kepatuhan terhadap regulasi K3, serta menjamin keselamatan operator dalam mengoperasikan mesin produksi dan perkakas.",
    },
    {
      q: "Apa perbedaan Kelas 1 dan Kelas 2?",
      a: "Kelas 1 diperuntukkan bagi operator mesin produksi CNC (komputerisasi), sedangkan Kelas 2 untuk operator mesin konvensional.",
    },
    {
      q: "Siapa saja yang bisa mengikuti pelatihan ini?",
      a: "Minimal lulusan SLTA/sederajat, usia minimal 21 tahun, sehat jasmani & rohani, dan memiliki pengalaman kerja minimal 3 tahun di bidangnya.",
    },
    {
      q: "Apa fasilitas yang diberikan?",
      a: "Zoom, Google Classroom, WA Group, E-Materi, Sertifikat & Lisensi Kemnaker RI, Sertifikat Kepesertaan PT. Geo Mandiri Kreasi, dan evaluasi dari Instruktur Kemnaker RI.",
    },
    {
      q: "Berapa biaya pembinaannya?",
      a: "Kelas 1: Rp 7.500.000 / peserta. Kelas 2: Rp 6.500.000 / peserta. Belum termasuk pajak.",
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
                Pembinaan K3 Operator Mesin Produksi & Perkakas (Kelas 1 & 2)
              </h2>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                Pelatihan ini bertujuan menyiapkan operator yang mampu mengoperasikan mesin dan
                perkakas dengan aman, mengurangi risiko kecelakaan kerja, dan memastikan
                kepatuhan terhadap <b>UU No. 1 Tahun 1970</b> dan <b>Permenaker No. 38 Tahun 2016</b>.
              </p>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
            Materi pembinaan mencakup teori dasar K3, pengoperasian mesin produksi dan perkakas,
            lingkungan kerja, bahan berbahaya, serta penanganan kecelakaan. Pelatihan terdiri dari teori online
            dan praktik langsung di perusahaan masing-masing.
          </p>
          <ul className="text-muted fs-5">
            <li> Dasar K3 dan perundangan terkait PTP</li>
            <li> Pengetahuan mesin, troubleshooting, sistem pengendalian aman</li>
            <li> Penunjang (Kelas I): Kontrol otomatis & JSA (Job Safety Analysis)</li>
            <li> Ujian teori & praktek</li>
            <li> Kelas I: 50 JP, Kelas II: 40 JP</li>
          </ul>
            </div>
            <div className="col-md-5 text-center">
              <img
                src="/PTP/OpMesin.png"
                alt="Poster Operator Mesin"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "350px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <h4 className="fw-bold text-success mb-4">Jadwal & Biaya Pembinaan</h4>
                            <p className="text-muted fs-5 mt-4 mb-1">
             <b>Jadwal:</b> 25 – 29 Agustus 2025, 08.00 – 16.30 WIB
          </p>
          <p className="text-muted fs-5 mb-1">
             Lokasi: Online (teori) & praktik di perusahaan masing-masing
          </p>
          <p className="text-muted fs-5 mb-0">
             <b>Biaya:</b> Kelas 1: Rp 7.500.000 | Kelas 2: Rp 6.500.000 <br />
            (Belum termasuk pajak. Biaya sudah termasuk fasilitas pelatihan dan lisensi resmi.)
          </p>
        </div>
      </section>


      {/* SERTIFIKASI */}
      <section className="py-5 bg-success bg-opacity-10 border-bottom">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-4">Sertifikasi Kemnaker RI</h2>
          <p className="text-muted mb-5">
            Peserta yang lulus akan mendapatkan lisensi resmi Operator K3 dari Kementerian Ketenagakerjaan Republik Indonesia.
          </p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-success mb-2"> Sertifikat Kompetensi</h5>
                  <p className="text-muted mb-0">
                    Sebagai bukti kompetensi resmi sebagai operator mesin produksi & perkakas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-success mb-2"> Kartu Lisensi</h5>
                  <p className="text-muted mb-0">
                    Kartu resmi lisensi operator K3 dari Kemnaker RI, berlaku nasional.
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
          <h2 className="fw-bold text-success mb-3">🔧 Daftar Sekarang dan Tingkatkan Keahlian Anda!</h2>
          <p className="text-muted mb-4">
            Dapatkan lisensi resmi Operator K3 Mesin Produksi & Perkakas. Amankan karier dan lindungi lingkungan kerja Anda.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 border">
                <h5 className="fw-bold text-success mb-3">📞 Kontak & Pembayaran</h5>
                <p className="text-muted mb-1"><b>Restu</b> <br /> 0813 6810 2031 (WA)</p>
                <p className="text-muted mb-1">Office: (021) 8621510 Ext. 203</p>
                <p className="text-muted small mb-0">
                  Bank Mandiri Cab. Puri Sentra Niaga Kalimalang
                  <br /><b>No. Rek: 006-00-0601846-3</b>
                  <br />a.n. PT. Geo Mandiri Kreasi
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

      {/* FAQ */}
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
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    {faq.q}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${expandedFaq === index ? "show" : ""}`}>
                  <div className="accordion-body">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK BUTTON */}
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
