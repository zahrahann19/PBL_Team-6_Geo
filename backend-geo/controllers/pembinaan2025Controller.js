const pool = require('../config/db');

exports.getData2025 = (req, res) => {
  const { nama = "", jenisKegiatan = "" } = req.query;

  let sql = "SELECT * FROM pembinaan2025 WHERE 1=1";
  const params = [];

  if (nama) {
    sql += " AND `NAMA` LIKE ?";
    params.push(`%${nama}%`);
  }

  if (jenisKegiatan) {
    sql += " AND `JENIS KEGIATAN` LIKE ?";
    params.push(`%${jenisKegiatan}%`);
  }

  pool.query(sql, params, (err, results) => {
    if (err) return res.status(500).json({ error: "DB error", detail: err });
    res.json({ data: results });
  });
};
