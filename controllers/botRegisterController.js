const Bot = require("../models/Bots")

const get = async (req, res) => {

    console.log("---------------------------")
    res.render("bots/register")

}

const post = async (req, res) => {

    const newBot = await Bot.create({
        name : req.body.botName,
        owner : req.body.botOwner,
        botId : req.body.botId,
    })

    res.redirect("/dashbaord")

}

module.exports = {
    get,
    post
}