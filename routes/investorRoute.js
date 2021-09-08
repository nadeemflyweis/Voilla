var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const investorCreate = require("../controllers/investor/investorCreate");
const investorFindAll = require("../controllers/investor/investorFindAll");
const investorFindOne = require("../controllers/investor/investorFindOne");
const investorUpdate = require("../controllers/investor/investorUpdate");
const investorDelete = require("../controllers/investor/investorDelete");

//  Routes
router.post("/create", investorCreate);
router.get("/find", investorFindAll);
router.get("/find/:id", investorFindOne);
router.put("/update/:id", investorUpdate);
router.delete("/delete/:id", investorDelete);

module.exports = router;
