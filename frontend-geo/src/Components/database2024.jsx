import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Database2024() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [jenisKegiatan, setJenisKegiatan] = useState("");
  const [peserta, setPeserta] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  // 🔍 Ambil data dari backend
  const getData = async (e) => {
    e.preventDefault();
    if (!nama.trim() && !jenisKegiatan.trim()) {
      setError("Masukkan nama atau jenis kegiatan untuk mencari data.");
      return;
    }

    setLoading(true);
    setError("");
    setPeserta([]);
    setPage(1);

    try {
      const res = await axios.get("http://pblweb01b01.cloud:3066/api/peserta2024/filter", {
        params: { nama, jenisKegiatan },
      });

      // ✅ Pastikan ambil data array dari res.data.data
      const data = res.data?.data ?? [];

      // 🧹 Hapus baris yang semua kolomnya null atau kosong
      const filteredData = data.filter((row) =>
        Object.values(row).some((val) => val !== null && val !== "")
      );

      if (filteredData.length > 0) {
        setPeserta(filteredData);
      } else {
        setError("Data peserta tidak ditemukan.");
      }
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan saat memuat data.");
    } finally {
      setLoading(false);
    }
  };

  const clearData = () => {
    setNama("");
    setJenisKegiatan("");
    setPeserta([]);
    setError("");
    setPage(1);
  };

  const totalPages = Math.ceil(peserta.length / itemsPerPage);
  const currentData = peserta.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="container d-flex py-5 flex-column justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card border my-5 mt-5 border-3 border-success rounded shadow-lg"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <div className="card-header text-center bg-success text-white fw-bold py-3">
          {peserta.length === 0 ? "Cari Peserta 2024" : "Hasil Peserta 2024"}
        </div>

        <div className="card-body">
          {/* 🔍 Form Pencarian */}
          {peserta.length === 0 && (
            <form onSubmit={getData}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Nama Peserta</label>
                <input
                  type="text"
                  className="form-control"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Masukkan nama peserta"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Jenis Kegiatan</label>
                <input
                  type="text"
                  className="form-control"
                  value={jenisKegiatan}
                  onChange={(e) => setJenisKegiatan(e.target.value)}
                  placeholder="Masukkan jenis kegiatan"
                />
              </div>

              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-success px-4"
                  disabled={loading}
                >
                  {loading ? "Mencari..." : "Cari"}
                </button>
              </div>

              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </form>
          )}

          {/* 📋 Tabel Data */}
          {peserta.length > 0 && (
            <div className="mt-4">
              <div className="table-responsive shadow-sm">
                <table className="table table-bordered table-striped align-middle">
                  <thead className="table-success text-center">
                    <tr>
                      {Object.keys(peserta[0]).map((key) => (
                        <th key={key}>{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((row, idx) => (
                      <tr key={idx}>
                        {Object.values(row).map((val, i) => (
                          <td key={i}>{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 📄 Pagination */}
              <div className="d-flex justify-content-between align-items-center mt-3">
                <button
                  className="btn btn-outline-success"
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                >
                  <BsChevronLeft color="green" size={24} />
                </button>

                <span>
                  Halaman {page} dari {totalPages}
                </span>

                <button
                  className="btn btn-outline-success"
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                >
                  <BsChevronRight color="green" size={24} />
                </button>
              </div>

              {/* 🔄 Tombol Clear */}
              <div className="text-center mt-3">
                <button onClick={clearData} className="btn btn-outline-danger px-4">
                  Clear
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 🔙 Tombol Back */}
      <div className="text-center my-4">
        <button
          onClick={() => navigate("/home-database")}
          className="btn btn-success"
          style={{
            borderRadius: "30px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            padding: "10px 25px",
            fontSize: "1rem",
            transition: "all 0.3s ease",
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
