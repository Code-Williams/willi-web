const User = require("../models/User")

const get = async (req, res) => {
    const users = await User.findAll()

    res.render("users", {
        flash : req.flash(),
        user : req.user,
        users
    })
}

module.exports = {
    get
}