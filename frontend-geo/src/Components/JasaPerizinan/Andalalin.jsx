import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBalanceScale } from "react-icons/fa";

export default function Andalalin() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const andalalinProcess = [
    {
      step: 1,
      title: "Penyusunan Dokumen",
      desc: "Pemrakarsa menyusun dokumen ANDALALIN yang memuat kajian teknis dampak lalu lintas.",
    },
    {
      step: 2,
      title: "Verifikasi",
      desc: "Pengajuan dokumen ke instansi terkait (Kemenhub / Dinas Perhubungan) untuk verifikasi awal.",
    },
    {
      step: 3,
      title: "Penilaian Teknis",
      desc: "Penilaian teknis oleh tim ahli / instansi untuk memastikan analisis dan rekomendasi layak.",
    },
    {
      step: 4,
      title: "Penerbitan Persetujuan",
      desc: "Setelah disetujui, instansi akan menerbitkan persetujuan ANDALALIN.",
    },
    {
      step: 5,
      title: "Integrasi Perizinan",
      desc: "Persetujuan ANDALALIN menjadi syarat untuk perizinan lain (mis. PBG/IMB) dan dapat terintegrasi dengan AMDAL untuk proyek skala besar.",
    },
  ];

  const faqs = [
    {
      q: "Apa itu ANDALALIN?",
      a: "ANDALALIN (Analisis Dampak Lalu Lintas) adalah kajian mengenai dampak lalu lintas dari pembangunan suatu pusat kegiatan, permukiman, atau infrastruktur baru.",
    },
    {
      q: "Apakah ANDALALIN sama dengan izin?",
      a: "Bukan. ANDALALIN adalah persetujuan/kajian teknis yang menjadi salah satu syarat perizinan lain seperti Persetujuan Bangunan Gedung (PBG).",
    },
    {
      q: "Instansi mana yang menerbitkan persetujuan?",
      a: "Persetujuan biasanya diterbitkan oleh Kementerian Perhubungan atau Dinas Perhubungan daerah sesuai kewenangan dan ketentuan.",
    },
    {
      q: "Apakah ANDALALIN selalu wajib?",
      a: "Untuk proyek dengan potensi berdampak lalu lintas signifikan, ANDALALIN menjadi syarat. Untuk skala tertentu, integrasinya dengan perizinan berbasis risiko (OSS) dapat mempengaruhi kewajiban.",
    },
  ];

  return (
    <div className="bg-light mt-5">
      {/* === HEADER + VIDEO === */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row align-items-center">
            {/* Penjelasan */}
            <div className="col-md-7">
              <h2 className="fw-bold text-success mb-3">Apa itu ANDALALIN?</h2>
              <p className="text-muted fs-5" style={{ textAlign: "justify" }}>
                <strong>ANDALALIN (Analisis Dampak Lalu Lintas)</strong>{" "}
                merupakan kajian mengenai dampak lalu lintas dari pembangunan
                suatu pusat kegiatan, permukiman, atau infrastruktur baru.
                Tujuan utamanya adalah memprediksi, mengantisipasi, dan mencegah
                dampak negatif pada kondisi lalu lintas di sekitar lokasi proyek
                agar operasi proyek berjalan lancar dan aman.
                <br />
                Hasil kajian akan menentukan bangkitan perjalanan, distribusi
                rute, pengaruh terhadap tingkat pelayanan jalan, serta
                rekomendasi rekayasa lalu lintas (mis. perbaikan persimpangan,
                penambahan lajur, manajemen akses) yang diperlukan agar dampak
                dapat diminimalkan.
              </p>
            </div>

            {/* Video di samping */}
            <div className="col-md-5 text-center">
              <div className="ratio ratio-16x9 shadow rounded">
                <iframe
                  src="/ANDALALIN/Video_Andalalin.mp4"
                  title="Video Penjelasan ANDALALIN"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === INFORMASI ANDALALIN === */}
      <section className="py-5 bg-white">
        <div className="container">
          {/* === HUBUNGAN DENGAN PERIZINAN & INTEGRASI DENGAN AMDAL === */}
          <div className="text-start mb-5">
            <h3 className="fw-bold text-success mb-3">
              Hubungan dengan Perizinan
            </h3>
            <p
              className="text-muted fs-6 mb-4"
              style={{ textAlign: "justify" }}
            >
              <b>ANDALALIN</b> bukan merupakan izin tersendiri, melainkan
              dokumen persetujuan teknis yang menjadi syarat penting untuk
              memperoleh <b>Persetujuan Bangunan Gedung (PBG)</b>
              atau izin sejenis. Kajian ini memastikan bahwa pembangunan tidak
              akan menimbulkan gangguan terhadap kelancaran lalu lintas di
              sekitar lokasi kegiatan.
            </p>

            <h3 className="fw-bold text-success mb-3">
              Integrasi dengan AMDAL
            </h3>
            <p className="text-muted fs-6" style={{ textAlign: "justify" }}>
              Dalam penerapan <b>Undang-Undang Cipta Kerja</b>, proses
              penyusunan <b>ANDALALIN</b>
              kini dapat diintegrasikan dengan dokumen <b>AMDAL</b> (Analisis
              Mengenai Dampak Lingkungan), terutama untuk proyek berskala besar.
              Tujuannya adalah untuk menyederhanakan proses perizinan,
              mempercepat waktu penyelesaian, dan memastikan seluruh aspek
              lingkungan serta transportasi dianalisis secara terpadu.
            </p>
          </div>
        </div>
      </section>

      {/* === DASAR HUKUM ANDALALIN === */}
      <section className="py-5 bg-success bg-opacity-10">
        <div className="container">
          <div className="row align-items-center">
            {/* Ikon kiri */}
            <div className="col-md-5 text-center mb-4 mb-md-0">
              <div
                className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center shadow"
                style={{ width: "140px", height: "140px" }}
              >
                <FaBalanceScale size={70} />
              </div>
            </div>

            {/* Teks kanan */}
            <div className="col-md-7">
              <h2 className="fw-bold text-success mb-3">
                Dasar Hukum ANDALALIN
              </h2>
              <p className="text-muted fs-6" style={{ textAlign: "justify" }}>
                Landasan hukum pelaksanaan{" "}
                <b>Analisis Dampak Lalu Lintas (ANDALALIN)</b> diatur dalam:
              </p>
              <ul className="text-muted fs-6" style={{ textAlign: "justify" }}>
                <li>
                  <b>UU No. 22 Tahun 2009</b> tentang Lalu Lintas dan Angkutan
                  Jalan
                </li>
                <li>
                  <b>PP No. 30 Tahun 2021</b> tentang Penyelenggaraan Lalu
                  Lintas dan Angkutan Jalan
                </li>
                <li>
                  <b>Permenhub No. 17 Tahun 2021</b> tentang Penyelenggaraan
                  Analisis Dampak Lalu Lintas
                </li>
                <li>
                  Integrasi dalam sistem <b>OSS</b> berdasarkan{" "}
                  <b>UU Cipta Kerja</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === PROSES ANDALALIN === */}
      <section className="py-5 bg-white border-bottom">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-3">Proses ANDALALIN</h2>
          <p className="text-muted mb-5">
            Lima tahapan utama dalam penyusunan dan persetujuan dokumen
            ANDALALIN hingga terbitnya persetujuan teknis.
          </p>

          <div className="row g-4 justify-content-center">
            {andalalinProcess.map((p) => (
              <div key={p.step} className="col-6 col-md-3 col-lg-2">
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
                      {p.step}
                    </div>
                    <h6 className="fw-bold">{p.title}</h6>
                    <p className="text-muted small">{p.desc}</p>
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
              <h3 className="fw-bold text-success mb-3">
                Konsultasi ANDALALIN — Geo Mandiri Group
              </h3>
              <p className="text-muted fs-5 mb-3">
                Kami membantu penyusunan dokumen ANDALALIN: pemodelan bangkitan
                perjalanan, analisis distribusi rute, rekomendasi rekayasa lalu
                lintas, serta koordinasi pengajuan ke instansi berwenang.
              </p>
              <ul className="text-muted">
                <li>Tim ahli transportasi & perhubungan</li>
                <li>Pengalaman koordinasi dengan Dinas/Kementerian terkait</li>
                <li>Penyusunan dokumen siap verifikasi</li>
              </ul>
            </div>

            {/* Poster kanan */}
            <div className="col-md-6 text-center">
              <img
                src="/ANDALALIN/Brosur-Andalalin.jpg"
                alt="Poster Jasa Konsultan Andalalin"
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
