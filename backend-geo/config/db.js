// src/config/db.js
const mysql = require("mysql2");
require("dotenv").config(); // untuk memastikan env ter-load jika dipanggil sendiri

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "db_geo1",
});

// cek koneksi saat aplikasi mulai
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Gagal konek ke database MySQL:", err.message);
    // jangan throw agar server masih bisa jalan (opsional: Anda bisa proses.exit jika ingin)
    return;
  }
  console.log("Terhubung ke MySQL (pool) — siap menerima query");
  connection.release(); // kembalikan koneksi ke pool
});

module.exports = pool;
