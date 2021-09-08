var express = require("express");
const router = express.Router();

//---------------- middleware----------------
const auth = require("../middleware/auth");

//  Add Controllers
const userSignup = require("../controllers/user/userSignup");
const userLogin = require("../controllers/user/userLogin");

const userFindAll = require("../controllers/user/userFindAll");
const userFindOne = require("../controllers/user/userFindOne");
const userUpdate = require("../controllers/user/userUpdate");
const userDelete = require("../controllers/user/userDelete");

//  Routes
router.get("/find", userFindAll);
router.get("/find/:id", userFindOne);
router.put("/update/:id", userUpdate);
router.delete("/delete/:id", userDelete);

//  User Logins
router.post("/login", userLogin);
router.post("/signup", userSignup);

module.exports = router;
