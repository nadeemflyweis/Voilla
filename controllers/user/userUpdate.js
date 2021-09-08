const UserDB = require("../../modules/userModel");

module.exports = (req, res, next) => {
  const id = req.params.id;
  UserDB.findByIdAndUpdate(id, req.body, { upsert: true, new: true })
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "error while finding User" });
      } else {
        res.status(200).json({
          msg: "Data updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "error User update information" });
    });
};
