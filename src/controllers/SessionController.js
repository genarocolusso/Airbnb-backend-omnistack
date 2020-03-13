//index , show, store, update, destroy
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    //achar por variavel
    let user = await User.findOne({ email });

    //se nao existir, create user
    if (!user) user = await User.create({ email });

    return res.json(user);
  }
};
