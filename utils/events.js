const events = require("events")
const emitter = new events.EventEmitter()
const Bot = require("../models/Bots")


// ? For send bot status (is it alive) to website
emitter.on("ok", async(id, status, client) => {
    if(!id || !status || typeof id !== "number" || typeof status !== "boolean") return false; // check if id and status are valid

    const targetBot = await Bot.findByPk(id) // find bot by id
    if(!targetBot) return undefined; // if bot not found return undefined

    targetBot.update({ running : status, lastRun : new Date(), name : client.user.tag, picture : client.user.displayAvatarURL({size : 1024}) }) // update bot status

    return true;
})



// ? For send running status to website
emitter.on("run", async(id) => {
    if(!id || typeof id !== "number") return false; // check if id is valid

    const targetBot = await Bot.findByPk(id) // find bot by id
    if(!targetBot) return undefined; // if bot not found return undefined

    targetBot.update({ running : true, upTime : new Date(), lastRun : new Date() }) // update bot informations in database

    return true;
})



// ? change status for bot
emitter.on("changeStatus", async(id, status, statusType) => {
    if(!id || typeof id !== "number") return false;
    if(!status || typeof status !== "string") return false;
    if(!statusType || typeof statusType !== "string") return false;

    const targetBot = await Bot.findByPk(id)
    if(!targetBot) return undefined;

    targetBot.update({ status : status, statusType : statusType })

    return true;
})

module.exports = emitter