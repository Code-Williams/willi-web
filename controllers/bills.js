/* 
    We have subscription plans for each bot
    Users have to pay for each bot to have access to run it any month
    User can see bills and can pay for bills, if user not pay bills for 10 days , bot will be disabled automaticlly from client side
        * for this we need to have a system for payment and api system from client side (we have to send a request to client side for destroying client)
        * we store the client id and users can gift subscription to bots by client id (any user can see bot's bills and subscriptions)
*/

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