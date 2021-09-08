const express = require("express");
const router = express.Router();

// ------------------- List of all Route paths --------------------
router.use("/user", require("./userRoute"));

router.use("/admin", require("./AdminRoutes"));

router.use("/partner", require("./partner"));

// ------------------- Exporting --------------------
module.exports = router;
