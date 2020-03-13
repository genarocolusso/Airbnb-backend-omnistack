const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    let { filename } = req.file; //pega nome do img
    const { company, techs, price } = req.body; // pega isso do body
    const { user_id } = req.headers; // pega do header

    let user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: "User do not exist" });
    }

    filename = filename.replace(/\s+/g, "_");

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(",").map(tech => tech.trim()),
      price
    });

    return res.json(spot);
  },
  async index(req, res) {
    const { tech } = req.query;

    const spots = await Spot.find({ techs: tech }); // achar techs com Tech incluso

    if (spots.length < 1) {
      return res.json({ message: "Nenhum spot encontrado" });
    }
    return res.json(spots);
  }
};
