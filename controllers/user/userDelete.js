const UserDB = require("../../modules/userModel");

module.exports = (req, res) => {
  const id = req.params.id;

  UserDB
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete. Maybe already deleted` });
      } else {
        res.send({
          message: "User deleted successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User",
      });
    });
};
