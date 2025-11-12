import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaHome, FaDatabase, FaFileAlt, FaUser, FaUsers, FaBriefcase } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-success">
      <div className="container-fluid">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center justify-content-center"
          style={{ margin: 0, padding: "0px 0" }}
        >
          <img
            src="/Logo-Geo.png"
            alt="Logo Geo"
            style={{
              height: "55px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
          <span
            className="fw-bold text-white"
            style={{
              fontFamily : "sans-serif",
              fontSize: "1.0rem",
              lineHeight: "1.2",
              letterSpacing: "0.5px",
              background: "#ffffffff",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "2px 2px 4px rgba(0, 50, 0, 0.5)"
            }}
          >
            Geo Mandiri Group <br/>
          </span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FaHome className="me-1" /> BERANDA
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/home-database">
                <FaDatabase className="me-1" /> DATABASE
              </Link>
            </li>

            {/* Dropdown Bidang */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="bidangDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaFileAlt className="me-1" /> BIDANG
              </Link>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="bidangDropdown">
                <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/pembinaan">
                    <FaUsers className="me-2 text-success" /> Pembinaan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/konsultan">
                    <FaBriefcase className="me-2 text-success" /> Konsultan
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/hubungi-kami">
                <FaUser className="me-1" /> HUBUNGI KAMI
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
