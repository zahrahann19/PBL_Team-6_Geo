import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OpTanur() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      q: "Siapa yang wajib mengikuti pelatihan ini?",
      a: "Operator tanur dengan kapasitas <50 ton (Kelas 2) yang memiliki tanggung jawab dalam pengoperasian dan keselamatan kerja.",
    },
    {
      q: "Apa manfaat mengikuti pelatihan ini?",
      a: "Meningkatkan pengetahuan teknis operator, mengurangi risiko kecelakaan kerja, serta mendapatkan sertifikat dan lisensi resmi dari Kemnaker RI.",
    },
    {
      q: "Apa metode pelatihannya?",
      a: "Meliputi pre-test, penyampaian materi oleh narasumber, praktik offline, dan ujian teori via website TemanK3.",
    },
    {
      q: "Berapa biaya pelatihan?",
      a: "Rp 8.000.000,-/peserta (belum termasuk pajak). Pembayaran dilakukan paling lambat 3 hari sebelum pelatihan.",
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
                Pelatihan K3 Operator Tanur (Furnace) – Kelas 2
              </h2>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                Tingginya penggunaan tanur dalam kegiatan produksi meningkatkan
                risiko kecelakaan kerja. Pelatihan K3 ini penting untuk
                memastikan operator memiliki kompetensi teknis dan keselamatan
                yang memadai. Pelatihan ini mengacu pada{" "}
                <b>UU No. 1 Tahun 1970</b> dan{" "}
                <b>Permenaker No. 38 Tahun 2016</b>.
              </p>

              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                Pelatihan ini ditujukan untuk operator tanur kelas 2 dengan
                kapasitas pengoperasian di bawah 50 ton. Pelatihan ini dirancang
                untuk mengurangi kecelakaan kerja akibat kurangnya pengetahuan
                teknis operator dalam mengoperasikan tanur.
              </p>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                <b>Tujuan:</b> Meningkatkan kompetensi dan keselamatan kerja
                operator tanur.
              </p>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                Pengoperasian tanur berdasarkan kapasitasnya dibagi menjadi 2
                kelas:
              </p>
              <ul className="text-muted fs-5">
                <li>
                  <b>Kelas 1:</b> Pengoperasian Tanur Kapasitas &gt; 50 ton
                </li>
                <li>
                  <b>Kelas 2:</b> Pengoperasian Tanur Kapasitas &lt; 50 ton
                </li>
              </ul>
            </div>
            <div className="col-md-5 text-center">
              <img
                src="/PTP/OpTanur.png"
                alt="Pelatihan Operator Tanur"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "350px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        <div className="container mt-5">
          {/* Metode dan Materi */}
          <div className="mb-4">
            <h3 className="fw-bold text-success mb-4">
              Info Pembinaan
            </h3>
            <p className="text-muted fs-5 mb-2">
              <b>Metode Pembinaan:</b> Pre-test, Quiz, Materi oleh Narasumber,
              Praktek Offline, Ujian Teori Online via temank3.kemnaker.go.id
            </p>
            <p className="text-muted fs-5 mb-1">
              <b>Materi Pembinaan Kelas 2 (Total 40 JP):</b>
            </p>
            <ul className="text-muted fs-5">
              <li>
                {" "}
                <b>Kelompok Dasar (6 JP):</b> Dasar K3 & Regulasi
              </li>
              <li>
                {" "}
                <b>Kelompok Inti (22 JP):</b> Tanur, kelistrikan, K3,
                troubleshooting, sistem aman, pemeriksaan
              </li>
              <li>
                {" "}
                <b>Ujian (8 JP):</b> Teori dan Praktik
              </li>
            </ul>
          </div>

          {/* Persyaratan */}
          <div>
            <p className="text-muted fs-5 mb-1">
              <b>Persyaratan Peserta:</b>
            </p>
            <ul className="text-muted fs-5">
              <li> Formulir pendaftaran & pakta integritas bermaterai</li>
              <li>
                {" "}
                Scan ijazah min. SMA/STM, KTP, surat kerja, foto latar merah
              </li>
              <li>
                {" "}
                Android (Aplikasi Teman K3), Gmail aktif, internet stabil
              </li>
              <li>Pakaian rapi (formal), memakai APD saat praktek</li>
              <li>
                {" "}
                Dokumen lengkap dikirim maksimal 7 hari sebelum pelatihan
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* === SERTIFIKASI === */}
      <section className="py-5 bg-success bg-opacity-10 border-bottom">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-4">Sertifikasi Kemnaker RI</h2>
          <p className="text-muted mb-5">
            Peserta yang dinyatakan lulus pembinaan akan mendapatkan sertifikasi
            resmi dari Kementerian Ketenagakerjaan Republik Indonesia.
          </p>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-success mb-2">
                    {" "}
                    Sertifikat Kompetensi
                  </h5>
                  <p className="text-muted mb-0">
                    Diterbitkan oleh Kemnaker RI sebagai bukti kelulusan dan
                    kompetensi resmi di bidang Operator Tanur.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-success mb-2">
                    Lisensi / SIO Kemnaker
                  </h5>
                  <p className="text-muted mb-0">
                    Lisensi Operator (SIO) dari Kemnaker RI untuk menjalankan
                    tugas sesuai bidang yang telah dilatih.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-success mb-2">
                    {" "}
                    Sertifikat Kepesertaan
                  </h5>
                  <p className="text-muted mb-0">
                    Sertifikat resmi sebagai peserta pelatihan dari PT. Geo
                    Mandiri Kreasi.
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
          <h2 className="fw-bold text-success mb-3">
            🔧 Daftar Sekarang dan Tingkatkan Keahlian Anda!
          </h2>
          <p className="text-muted mb-4">
            Dapatkan lisensi resmi Operator K3 K3 Operator Tanur (Furnace) Kelas
            2 . Amankan karier dan lindungi lingkungan kerja Anda.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 border">
                <h5 className="fw-bold text-success mb-3">
                  📞 Kontak & Pembayaran
                </h5>
                <p className="text-muted mb-1">
                  <b>Adina Restuningsih</b> <br /> 0813 6810 2031 (WA)
                </p>
                <p className="text-muted mb-1">
                  Office: 021 – 8621510 / 021 – 8660 8657 Ext. 203
                </p>
                <p className="text-muted small mb-0">
                  Bank Mandiri Cab. Puri Sentra Niaga Kalimalang
                  <br />
                  <b>No. Rek: 006-00-0601846-3</b>
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
