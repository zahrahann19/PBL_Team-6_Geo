import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-warning text-white pt-4 pb-2">
      <div className="container">
        {/* Baris Atas: Logo */}
        <div className="row align-items-center mb-4">
          <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0">
            <img
              src="/Logo-Geo.png"
              alt="Geo Mandiri Logo"
              style={{ height: "70px", width: "auto", marginRight: "10px" }}
            />
            <h5 className="fw-bold mb-0">Geo Mandiri Group</h5>
          </div>
        </div>

        {/* Baris Tengah: Deskripsi, Sosial Media, Alamat */}
        <div className="row text-start align-items-start">
          {/* Kolom 1 - Deskripsi */}
          <div className="col-md-4 mb-4 me-md-5">
            <h6 className="fw-bold">Tentang kami</h6>
            <p
              className="d-flex align-items-start mb-2"
              style={{ textAlign: "justify" }}
            >
              GEO MANDIRI GROUP Management Consultant, Training Centre & Event
              Organizer yang memberikan layanan pembinaan dan perizinan
              konsultan secara profesional yang didukung oleh para tenaga ahli
              yang berpengalaman, kami berkomitmen pada integritas, mutu, dan
              kepuasan klien
            </p>
          </div>

          {/* Kolom 2 - Sosial Media */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Sosial Media</h6>
            <a
              href="https://instagram.com/geomandirigroupcreative"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none d-flex align-items-center mb-2"
            >
              <FaInstagram className="me-2" /> @geomandirigroup
            </a>
            <a
              href="http://tiktok.com/@geomandirigroupcreative"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none d-flex align-items-center"
            >
              <FaTiktok className="me-2" /> @geogroupcreative
            </a>
          </div>

          {/* Kolom 3 - Alamat & Kontak */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold ">Alamat</h6>

            <p
              className="d-flex align-items-start mb-2"
              style={{ textAlign: "justify" }}
            >
              <FaMapMarkerAlt
                className="me-2 text-success"
                style={{ fontSize: "2rem" }}
              />
              JL. Raya Jatiwaringin, Rukan Kaca Hijau No. 6-C, Pangkalan Jati,
              RT.2/RW.13, Cipinang Melayu, Kec. Makasar, Kota Jakarta Timur,
              Daerah Khusus Ibukota Jakarta 13620
            </p>

            <p className="d-flex align-items-center mb-2">
              <FaPhoneAlt className="me-2 text-success" />
              (021) 8661-8812
            </p>

            <p className="d-flex align-items-center">
              <FaEnvelope className="me-2 text-success" />
              geomandirigroup@gmail.com
            </p>
          </div>
        </div>

        {/* Baris Bawah: Logo + Maps */}
        <div className="d-flex justify-content-start align-items-center mb-5 flex-wrap gap-5">
          <img
            src="/logo-footer.png"
            alt="K3"
            style={{ height: "80px", width: "auto" }}
          />

          <iframe
            title="Lokasi Geo Mandiri Kreasi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.574862069746!2d106.9056188!3d-6.2474466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f32b83252e77%3A0xd4495dbdb34e3f71!2sGeo%20Mandiri%20Kreasi%20PT!5e0!3m2!1sen!2sid!4v1696234567890!5m2!1sen!2sid"
            width="100%"
            height="180"
            style={{
              border: 0,
              borderRadius: "10px",
              maxWidth: "320px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="d-flex justify-content-center mb-3">
          <hr
            style={{
              width: "100%",
              border: "1px solid rgba(75, 148, 113, 0.62)",
              margin: "0 auto",
            }}
          />
        </div>
      </div>

      {/* Copyright */}
      <div
        className="text-center py-2 mt-3"
        style={{ background: "linear-gradient(to bottom, #ffc107)" }}
      >
        <p>Copyright ©2025 Geo Mandiri Group by Team 6 & Team 5</p>
      </div>
    </footer>
  );
}
