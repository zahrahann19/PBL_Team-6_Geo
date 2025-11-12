import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AhliK3PTP() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const prosesPTP = [
    {
      step: 1,
      title: "Pendaftaran",
      desc: "Mengajukan permohonan pembinaan kepada penyelenggara resmi PT. Geo Mandiri Kreasi.",
    },
    {
      step: 2,
      title: "Pembinaan",
      desc: "Mengikuti pembinaan teori dan praktik lapangan sesuai kurikulum Kemnaker RI.",
    },
    {
      step: 3,
      title: "Evaluasi",
      desc: "Menjalani ujian teori, kertas kerja, dan seminar evaluasi hasil pembinaan.",
    },
    {
      step: 4,
      title: "Penetapan",
      desc: "Hasil pembinaan dinilai oleh evaluator dan diverifikasi oleh Kemnaker RI.",
    },
    {
      step: 5,
      title: "Sertifikasi",
      desc: "Peserta lulus akan memperoleh Sertifikat, SK Penunjukan, dan Kartu Kewenangan Kemnaker RI.",
    },
  ];

  const faqs = [
    {
      q: "Apa tujuan pembinaan Ahli K3 Pesawat Tenaga & Produksi?",
      a: "Untuk melindungi keselamatan dan kesehatan tenaga kerja, memastikan alat produksi beroperasi dengan aman, serta menciptakan lingkungan kerja yang produktif dan bebas kecelakaan.",
    },
    {
      q: "Siapa yang dapat mengikuti program ini?",
      a: "Peserta minimal lulusan D3/S1 Teknik, sehat jasmani dan rohani, sudah bekerja di bidang terkait minimal 2 tahun, serta direkomendasikan oleh pimpinan perusahaan.",
    },
    {
      q: "Apa fasilitas yang akan didapatkan peserta?",
      a: "Peserta akan mendapatkan e-materi, training kit, sertifikat, SK Penunjukan, kartu kewenangan Kemnaker, konsumsi, serta akses zoom untuk seminar evaluasi.",
    },
    {
      q: "Berapa biaya pembinaan?",
      a: "Biaya pembinaan sebesar Rp33.000.000,-/peserta (belum termasuk pajak, transportasi, dan akomodasi).",
    },
  ];

  return (
    <div className="bg-light mt-5">
      {/* === HEADER SECTION === */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fw-bold text-success mb-3">
                Pembinaan Ahli K3 Pesawat Tenaga & Produksi (AK3 PTP)
              </h2>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                Tingginya angka kecelakaan kerja dalam penggunaan Pesawat Tenaga
                dan Produksi (PTP) menuntut tenaga ahli yang kompeten di bidang
                keselamatan kerja. Pemerintah mewajibkan setiap industri yang
                menggunakan PTP memiliki Ahli K3 PTP sesuai dengan{" "}
                <b>Undang-Undang No. 1 Tahun 1970</b> dan{" "}
                <b>Permenaker No. 38 Tahun 2016</b>.
                <br />
                <br />
                Pembinaan ini bertujuan menyiapkan tenaga kerja profesional yang
                mampu memastikan seluruh peralatan produksi beroperasi secara
                aman dan efisien, serta menjaga lingkungan kerja yang sehat dan
                produktif.
              </p>
            </div>
            <div className="col-md-5 text-center">
              <img
                src="/PTP/AhliK3.png"
                alt="Poster Pembinaan AK3 PTP"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "350px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        <div className="container mt-5">
          {/* === TENTANG PEMBINAAN + JADWAL & BIAYA  === */}
          <p className="text-muted \ fs-5" style={{ textAlign: "justify" }}>
            Pembinaan AK3 PTP dilaksanakan secara klasikal melalui teori,
            diskusi, tanya jawab, serta <b>Praktik Kerja Lapangan (PKL)</b>{" "}
            berupa pemeriksaan dan pengujian langsung terhadap pesawat tenaga &
            produksi. Peserta juga diwajibkan menyusun{" "}
            <b>Laporan On Job Training (OJT)</b> sebagai bagian dari proses
            evaluasi.
          </p>

          <ul className="text-muted fs-5">
            <li> Instruktur dari Kemnaker RI dan praktisi ahli K3.</li>
            <li> Ujian teori, kertas kerja, dan seminar hasil pembinaan.</li>
            <li> Total 250 Jam Pelajaran (termasuk 50 JP untuk PKL).</li>
          </ul>

          <p className="text-muted fs-5 mt-4 mb-1">
            <b>Jadwal & Lokasi:</b> 12 Juni – 12 Juli 2025, 08.00 – 17.00 WIB,
            Depok / Bogor Training Center
          </p>
          <p className="text-muted fs-5 mb-0">
            <b>Biaya Pembinaan:</b> Rp 33.000.000,- / Peserta (belum termasuk
            pajak, transportasi & akomodasi). Termasuk e-materi, training kit,
            konsumsi, dan sertifikat Kemnaker RI.
          </p>
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
                    Sertifikat Kompetensi
                  </h5>
                  <p className="text-muted mb-0">
                    Diterbitkan oleh Kemnaker RI sebagai bukti kelulusan dan
                    kompetensi resmi di bidang K3 PTP.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-success mb-2">
                    SK Penunjukan (SKP)
                  </h5>
                  <p className="text-muted mb-0">
                    Surat keputusan resmi sebagai penunjukan Ahli K3 PTP di
                    perusahaan tempat bekerja.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-success mb-2">
                    Kartu Kewenangan
                  </h5>
                  <p className="text-muted mb-0">
                    Identitas resmi Ahli K3 yang berlaku secara nasional untuk
                    melaksanakan tugas pengawasan K3.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === PROMOSI / AJAKAN === */}
      <section className="py-5 bg-white border-bottom text-center">
        <div className="container">
          <h2 className="fw-bold text-success mb-3">
            ⚡ Ayo Bergabung Sekarang! ⚡
          </h2>
          <p className="text-muted mb-4">
            Tingkatkan kompetensi dan karier Anda dengan menjadi{" "}
            <b>Ahli K3 Pesawat Tenaga & Produksi</b> bersertifikat{" "}
            <b>Kemnaker RI</b>. <br />
            Hubungi kami untuk pendaftaran dan informasi
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
                  Office: (021) 8621510 Ext. 203
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
