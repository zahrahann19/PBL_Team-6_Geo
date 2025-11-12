import { FaEnvelope } from "react-icons/fa";

export default function HubungiKami() {
  return (
    <>
      <div className="container my-5 mb-4 pt-5">
        <h2 className="text-center mb-4 text-success">
          Hubungi Kami / Layanan Pembinaan dan Konsultan Jasa
        </h2>

        <div className="row">
          {/* Card Informasi */}
          <div className="col-md-6 mb-4 pt-2">
            <div className="card shadow border-0 h-50">
              <div className="card-body">
                <h3 className="mb-3 text-success">
                  Punya pertanyaan lebih lanjut?
                </h3>
                <p>
                  Hubungi kami dengan mengisi form di samping ini atau untuk
                  layanan <strong>PTSA Daring (online) bidang K3</strong>{" "}
                  silakan mengirimkan surat elektronik (email) lengkap dengan
                  lampiran (attachment) dokumen kelengkapan ke:
                </p>
                <p className="mt-3">
                  <FaEnvelope className="me-2 text-success" />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=geomandirigroup@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-success fw-bold text-decoration-none"
                  >
                    geomandiri@email.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="col-md-6 mb-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <form
                  action="https://formspree.io/f/mnngoeol" // <-- Ganti dengan Form ID kamu
                  method="POST"
                >
                  <div className="mb-3">
                    <label className="form-label">Nama Lengkap</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nama"
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="_replyto"
                      placeholder="Masukkan email Anda"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Masukkan subjek pesan"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Pesan</label>
                    <textarea
                      className="form-control"
                      name="pesan"
                      rows="4"
                      placeholder="Tulis pesan Anda"
                      required
                    ></textarea>
                  </div>

                  {/* Input tambahan agar Formspree mengirim ke email */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="Pesan Baru dari Website"
                  />
                  <input type="hidden" name="_captcha" value="false" />

                  <button type="submit" className="btn btn-success w-100">
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
