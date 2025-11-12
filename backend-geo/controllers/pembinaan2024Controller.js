// src/controllers/pembinaan2024Controller.js
const pool = require("../config/db");

// ✅ GET data berdasarkan nama & jenis kegiatan (pakai query params)
exports.getData2024 = (req, res) => {
  const { nama = "", jenisKegiatan = "" } = req.query;

  // base query
  let sql = "SELECT * FROM pembinaan2024 WHERE 1=1";
  const params = [];

  // filter nama
  if (nama) {
    sql += " AND 'NAMA' LIKE ?";
    params.push(`%${nama}%`);
  }

  // filter jenis kegiatan (ingat: kolomnya ada spasi!)
  if (jenisKegiatan) {
    sql += " AND `JENIS KEGIATAN` LIKE ?";
    params.push(`%${jenisKegiatan}%`);
  }

  pool.query(sql, params, (err, results) => {
    if (err)
      return res.status(500).json({ error: "DB error", detail: err });
    res.json(results);
  });
};

// ✅ GET berdasarkan nama via parameter (untuk kompatibilitas lama)
exports.getData2024ByNama = (req, res) => {
  const nama = req.params.nama;

  pool.getConnection((err, conn) => {
    if (err)
      return res
        .status(500)
        .json({ error: "DB connection error", detail: err.message });

    const sql = "SELECT * FROM pembinaan2024 WHERE 'NAMA' LIKE ?";
    conn.query(sql, [`%${nama}%`], (errQuery, rows) => {
      conn.release();

      if (errQuery)
        return res
          .status(500)
          .json({ error: "DB query error", detail: errQuery.message });

      if (rows.length === 0)
        return res.status(404).json({ error: "Data peserta tidak ditemukan" });

      res.json(rows);
    });
  });
};
