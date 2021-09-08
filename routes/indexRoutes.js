const express = require("express");
const router = express.Router();

// ------------------- List of all Route paths --------------------
router.use("/user", require("./userRoute"));

router.use("/admin", require("./adminRoutes"));

router.use("/partner", require("./partner"));

router.use("/investor", require("./investorRoute"));

// ------------------- Exporting --------------------
module.exports = router;
