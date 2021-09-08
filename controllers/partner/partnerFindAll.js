const Partner = require("../../modules/partnerModel");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Partner.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Partner may not present`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    Partner.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
