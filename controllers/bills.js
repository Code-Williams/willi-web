const Bot = require("../models/Bots")

const get = async (req, res) => {
    bot = await Bot.findByPk(req.params.id)

    res.render("bills", {
        bill : bot.bills
    })
}

module.exports = {
    get
}