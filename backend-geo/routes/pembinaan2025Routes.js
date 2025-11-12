// src/routes/pembinaan2025Routes.js
const express = require("express");
const router = express.Router();
const pembinaan2025Controller = require("../controllers/pembinaan2025Controller");

// ✅ Route pencarian (pakai query params)
router.get("/", pembinaan2025Controller.getData2025);

// ✅ Route lama (cari berdasarkan nama via param)
// router.get("/:nama", pembinaan2025Controller.getData2025ByNama);

module.exports = router;
