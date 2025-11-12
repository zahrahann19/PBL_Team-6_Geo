const express = require("express");
const router = express.Router();
const pembinaan2024Controller = require("../controllers/pembinaan2024Controller");

// 🔹 pencarian pakai query params
// contoh: GET /db2024?nama=agus&jenisKegiatan=petugas
router.get("/", pembinaan2024Controller.getData2024);

// 🔹 pencarian lama berdasarkan nama
router.get("/:nama", pembinaan2024Controller.getData2024ByNama);

module.exports = router;
