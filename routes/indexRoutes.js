const express = require("express");
const router = express.Router();

// ------------------- List of all Route paths --------------------
router.use("/user", require("./userRoute"));

router.use("/admin", require("./AdminRoutes"));

// ------------------- Exporting --------------------
module.exports = router;
