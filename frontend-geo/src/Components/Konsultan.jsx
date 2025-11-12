import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaLeaf, FaTint, FaFileAlt, FaWater, FaCloud, FaRecycle, FaRoad } from "react-icons/fa";
import { FaSkullCrossbones } from "react-icons/fa6";

export default function Konsultan() {
  const navigate = useNavigate();

  const cards = [
    {
      icon: <FaLeaf size={45} className="text-success mb-3" />,
      title: "AMDAL",
      link: "/amdal",
      text: "Analisis Mengenai Dampak Lingkungan",
    },
    {
      icon: <FaTint size={45} className="text-success mb-3" />,
      title: "UKL UPL",
      link: "/ukl-upl",
      text: "Upaya Pengelolaan Lingkungan dan Upaya Pemantauan Lingkungan",
    },
    {
      icon: <FaFileAlt size={45} className="text-success mb-3" />,
      title: "SPPL",
      link: "/sppl",
      text: "Surat Pernyataan Kesanggupan Pengelolaan dan Pemantauan Lingkungan Hidup",
    },
    {
      icon: <FaWater size={45} className="text-success mb-3" />,
      title: "PERTEK BMAL",
      link: "/pertek-bmal",
      text: "Persetujuan Teknis (PERTEK) untuk pemenuhan Baku Mutu Air Limbah",
    },
    {
      icon: <FaCloud size={45} className="text-success mb-3" />,
      title: "PERTEK EMISI",
      link: "/pertek-emisi",
      text: "Persetujuan Teknis Pemenuhan Baku Mutu Emisi",
    },
    {
      icon: <FaSkullCrossbones size={45} className="text-success mb-3" />,
      title: "RINTEK LB3",
      link: "/rintek-lb3",
      text: "Rincian Teknis Penyimpanan Limbah Bahan Berbahaya dan Beracun (B3).",
    },
    {
      icon: <FaRoad size={45} className="text-success mb-3" />,
      title: "ANDALALIN",
      link: "/andalalin",
      text: "Analisis Dampak Lalu Lintas",
    },
  ];

  return (
    <div className="container my-5 pt-5">
      <div className="row g-4 justify-content-center">
        {cards.map((card, index) => (
          <div key={index} className="col-md-3 col-sm-6">
            <div
              className="card shadow text-center h-100"
              style={{
                border: "none",
                borderRadius: "15px",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
                const icon = e.currentTarget.querySelector("svg");
                if (icon) {
                  icon.style.color = "#146c43";
                  icon.style.transform = "scale(1.1)";
                  icon.style.transition = "all 0.3s ease";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                const icon = e.currentTarget.querySelector("svg");
                if (icon) {
                  icon.style.color = "var(--bs-success)";
                  icon.style.transform = "scale(1)";
                }
              }}
            >
              <div className="card-body d-flex flex-column align-items-center">
                {card.icon}
                <h5 className="card-title fw-bold">
                  <Link to={card.link} className="text-decoration-none text-dark">
                    {card.title}
                  </Link>
                </h5>
                <p className="card-text text-muted">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-4">
        <button
          onClick={() => navigate("/")}
          className="btn btn-success btn-xs btn-update btn-add-card"
          style={{
            borderRadius: "30px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            padding: "10px 25px",
            fontSize: "1rem",
            zIndex: 1000,
            transition: "all 0.3s ease",
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
}
