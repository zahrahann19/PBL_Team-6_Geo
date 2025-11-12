import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <>
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
      >
        <FaWhatsapp size={32} />
        <span className="wa-bubble">WhatsApp</span>
      </a>

      <style>
        {`
          .wa-float {
            position: fixed;
            bottom: 25px;
            right: 25px;
            background: #25d366;
            color: #fff;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            text-decoration: none;
            transition: 0.3s;
            z-index: 1000;
          }
          .wa-float:hover { transform: scale(1.1); background: #1ebe5d; }
          .wa-bubble {
            position: absolute;
            right: 70px;
            background: #fff;
            color: #333;
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            opacity: 0;
            pointer-events: none;
            transition: 0.3s;
            box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          }
          .wa-float:hover .wa-bubble {
            opacity: 1;
            transform: translateY(-2px);
          }
        `}
      </style>
    </>
  );
}
