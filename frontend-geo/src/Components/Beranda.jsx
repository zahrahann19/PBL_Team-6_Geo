import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaChalkboardTeacher,
  FaUserTie,
  FaHandsHelping,
  FaBalanceScale,
  FaMoneyBillWave,
  FaMapMarkedAlt,
  FaDatabase,
} from "react-icons/fa";

export default function Beranda() {
  const carouselImages = [
    { src: "/carousel-web-1.png", alt: "Poster 1 - Materi Utama PUBT" },
    { src: "/carousel-2.jpg", alt: "Poster 2 - Jasa Perizinan Lingkungan" },
    { src: "/carousel-3.png", alt: "Poster 3 - Materi Utama PTP" },
    { src: "/carousel-4.jpg", alt: "Poster 4 - Training Lapangan" },
  ];

  const cards = [
    {
      icon: <FaChalkboardTeacher size={60} className="text-success mb-4" />,
      title: "Pembinaan",
      description:
        "Kami menyediakan berbagai jenis pembinaan K3 sesuai kebutuhan industri Anda.",
      link: "/pembinaan",
    },
    {
      icon: <FaUserTie size={60} className="text-success mb-4" />,
      title: "Konsultan",
      description:
        "Layanan konsultasi K3 untuk meningkatkan standar keselamatan kerja perusahaan Anda.",
      link: "/konsultan",
    },
    {
      icon: <FaDatabase size={45} className="text-success mb-3" />,
      title: "Database",
      description:
        "Informasi data peserta pembinaan di tahun 2024 & 2025",
      link: "/home-database",
    },
  ];

  const keunggulanKami = [
    {
      icon: <FaHandsHelping size={40} className="text-success mb-3" />,
      title: "Tim Ahli Berpengalaman",
      text: "Didukung oleh tenaga ahli bersertifikat dan berpengalaman di bidang K3.",
    },
    {
      icon: <FaBalanceScale size={40} className="text-success mb-3" />,
      title: "Legalitas Resmi",
      text: "Perusahaan kami memiliki izin dan akreditasi resmi dari instansi terkait.",
    },
    {
      icon: <FaMoneyBillWave size={40} className="text-success mb-3" />,
      title: "Harga Kompetitif",
      text: "Kami menawarkan layanan dengan kualitas tinggi dan harga yang bersaing.",
    },
    {
      icon: <FaMapMarkedAlt size={40} className="text-success mb-3" />,
      title: "Layanan Nasional",
      text: "Kami melayani perusahaan dari berbagai wilayah di seluruh Indonesia.",
    },
  ];

  // ✅ Carousel langsung autoplay saat halaman dibuka
  useEffect(() => {
    const timer = setTimeout(() => {
      const carouselEl = document.querySelector("#homeCarousel");
      if (carouselEl && window.bootstrap) {
        const carousel = new window.bootstrap.Carousel(carouselEl, {
          interval: 3000,
          ride: "carousel",
          pause: false,
          wrap: true,
        });
        carousel.cycle();
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* === HERO SECTION DENGAN CAROUSEL === */}
      <div
        className="mt-3 py-4 py-md-5"
        style={{
          backgroundImage: "url('/bg-tr80.jpeg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundColor: "#198754",
        }}
      >
        <div className="container py-3 py-md-5" style={{ marginTop: "20px" }}>
          <div
            id="homeCarousel"
            className="carousel slide carousel-fade my-5"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner rounded-4 overflow-hidden shadow">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={image.src}
                    className="d-block w-100 img-fluid"
                    alt={image.alt}
                    style={{
                      maxHeight: "400px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Tombol Navigasi */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* === MARQUEE === */}
      <div className="bg-success-subtle text-success py-3">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="6"
          className="fw-semibold"
        >
          "Kami solusi untuk meningkatkan budaya keselamatan kerja di perusahaan
          Anda. Dapatkan Pembinaan dan Konsultasi K3 terbaik dari tim ahli
          kami."
        </marquee>
      </div>

      {/* === LAYANAN UTAMA === */}
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {cards.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
              <Link to={card.link} className="text-decoration-none text-dark">
                <div
                  className="card border-0 shadow-sm rounded-4 h-100 text-center"
                  style={{ transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <div className="card-body d-flex flex-column justify-content-center align-items-center py-4">
                    {card.icon}
                    <h5 className="card-title fw-bold mb-3">{card.title}</h5>
                    <p className="card-text text-muted">{card.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* === KEUNGGULAN KAMI === */}
      <div className="bg-light">
        <div className="container py-5 text-center">
          <h3 className="fw-bold mb-4 text-success">Mengapa Memilih Kami?</h3>
          <div className="row g-4">
            {keunggulanKami.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                <div className="card border-0 shadow-sm rounded-4 h-100 p-4">
                  {item.icon}
                  <h6 className="fw-bold mb-2">{item.title}</h6>
                  <p className="text-muted small">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
