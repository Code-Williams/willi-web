/* 
    That's main side of website
    Users have many bots not just one so we have a dashboard and show all bots to user and user can manage it, add new bot, delete bot, edit bot
    In the every bot's side we show bot's name, picture, bills (if bot have), and blocked (if bot have)
*/

const Bot = require("../models/Bots")
const Upload = require("../models/Upload")
const Work = require("../models/Work")

const get = async (req, res) => {
    const works = await Work.findAll({
        where : {
            userId : req.user.id
        }
    })

    const userBots = await Bot.findAll({
        where : {
            owner : req.user.username
        }
    })

    const uploads = await Upload.findAll({
        where : {
            user : req.user.username
        }
    })

    res.render("dashboard", {
        user : req.user,
        userBots,
        uploads,
        works,
        flash : req.flash()
    })
}

module.exports = {
    get
}