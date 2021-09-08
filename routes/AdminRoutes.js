var express = require("express");
const router = express.Router();


//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const adminSignup = require("../controllers/admin/adminSignup");
const adminLogin = require("../controllers/admin/adminLogin");

const adminFind = require("../controllers/admin/adminFind");
const adminFindOne = require("../controllers/admin/adminFindOne");
const adminUpdate = require("../controllers/admin/adminUpdate");
const adminDelete = require("../controllers/admin/adminDelete");

//  Routes
router.get("/find",  adminFind);
router.get("/find/:id",  adminFindOne);
router.put("/update/:id",  adminUpdate);
router.delete("/delete/:id", adminDelete);

//  User Logins
router.post("/login", adminLogin);
router.post("/signup", adminSignup);





module.exports = router;
