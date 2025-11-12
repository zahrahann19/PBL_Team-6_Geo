import React from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { FaIndustry, FaCog } from "react-icons/fa";

export default function Pembinaan() {
  const navigate = useNavigate();

  const cards = [
    {
      icon: <FaCog size={45} className="text-success mb-3" />,
      title: "Pesawat Tenaga Produksi",
      text: "Program Pembinaan Pesawat Tenaga dan Produksi (PTP)",
      link: "/ptp",
    },
    {
      icon: <FaIndustry size={45} className="text-success mb-3" />,
      title: "Pesawat Uap Bejana dan Tekanan",
      text: "Program Pesawat Uap Bejana dan Tekanan (PUBT)",
      link: "/pubt",
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
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0,0,0,0.15)";
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
                  <Link
                    to={card.link}
                    className="text-decoration-none text-dark"
                  >
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
