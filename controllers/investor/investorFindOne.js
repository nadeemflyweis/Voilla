const Investor = require("../../modules/investorModel");
module.exports = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    Investor.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Investor  may not present`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    Investor.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
