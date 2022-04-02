/* 
    We need a system for admins to register new bots
    For registering new bots we need this informations:
        * Name for owner of bot (That's for admins, admins wants to know who is owner of bot for better supporting)
        * Support discord server (That's just for showing to users)
        * Phone number (That's for security and sending support messages)
        * Email (That's for security and sending support messages)
        * Bot id (That's for filtering when a bot wants to run)
        * VPS IP (That's for secure sources of bot cause other users in other computers can't run the bot)
        * Have acceptable terms and conditions physically (That's for security of our sources and our services)
    When a bot wants to register, user want's to accept terms and conditions in paper and take photo of him-self and paper if dont do this, bot is not running or package is not available
*/

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