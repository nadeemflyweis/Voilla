var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const partnerCreate = require("../controllers/partner/partnerCreate");
const partnerFindAll = require("../controllers/partner/partnerFindAll");
const partnerFindOne = require("../controllers/partner/partnerFindOne");
const partnerUpdate = require("../controllers/partner/partnerUpdate");
const partnerDelete = require("../controllers/partner/partnerDelete");

//  Routes
router.post("/create", partnerCreate);
router.get("/find", partnerFindAll);
router.get("/find/:id", partnerFindOne);
router.put("/update/:id", partnerUpdate);
router.delete("/delete/:id", partnerDelete);

module.exports = router;
