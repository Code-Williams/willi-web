/* 
    In this side, we handle all requests for run a discord bot
    Anything we want is check if is bot registered and have access to run, and send callback to request
    That's better if we can have a system for commands and security, for exmaple if a bot have access to run, send encrypted codes to bot and in bot side we have to decrypt codes and start using it
    codes comes from github raw system cause we need to be update to latest version
    also we can use raw system for main project
*/

const Bot = require("../../models/Bots")
const templates = require("../../utils/jsonCallBackTemplate")
const botChecker = require("../../helpers/botFirstCheck")

const post = async(req, res) => {
    // Client data
    console.log("---- New Request ----")
    console.log("Client IP: " + req.ip)
    console.log("Have client: " + !!req.body.client)
    console.log("Client Id: " + (req.body.client ? req.body.client.id : "-"))
    console.log("---- End Request ----")

    const client = req.body.client

    // Request comes but haven't client
    if(!client){
        return res.json({
            ok : false,
            message : "No client provided"
        })
    }

    // If bot is not registered in database
    const isBotRegistered = await Bot.findOne({ where : { botId : client.id } }) // Finding bot in database
    const botValidationResult = botChecker(isBotRegistered) // Check bot validation rules

    if(!botValidationResult){ // If bot have not any data in database
        const invalidTemplate = templates.access_run
        invalidTemplate.message = "Your bot is not registered"
        return res.json(invalidTemplate)
    }

    if(!botValidationResult.ok) return res.json(botValidationResult) // If bot is blocked or have bills (bot is not ok)

    // Bot have access to run
    const callBackData = templates.access_run
    callBackData.ok = true
    callBackData.isBotRegistered = true

    isBotRegistered.update({
        name            : client.name,
        picture         : client.picture,
        servers         : client.servers,
        users           : client.users,
        lastRun         : new Date(),
    })

    return res.json(callBackData)
}

module.exports = {
    post
}