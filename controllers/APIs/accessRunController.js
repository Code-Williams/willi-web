const Bot = require("../../models/Bots")
const templates = require("../../utils/jsonCallBackTemplate")

const post = async(req, res) => {
    const client = req.body.client

    if(!client){
        return res.json({
            ok : false,
            message : "No client provided"
        })
    }

    // If bot is not registered in database
    const isBotRegistered = await Bot.findOne({ where : { botId : client.id } })
    if(!isBotRegistered) {
        const callBackData = templates.access_run
        callBackData.ok = false
        callBackData.isBotRegistered = false
        callBackData.message = "Your bot is not registered"
        return res.json(callBackData)
    }

    // If bot is blocked
    if(isBotRegistered.blocked) {
        const callBackData = templates.access_run
        callBackData.message = "Your bot is blocked. Please check your dashboard"
        callBackData.blocked = true
        callBackData.isBotRegistered = true
        return res.json(callBackData)
    }

    // If bot have bills upper than 100K Tomans
    if(isBotRegistered.bills >= 100000) {
        const callBackData = templates.access_run
        callBackData.message = "Your bot have bills. Please check your dashboard"
        callBackData.bills = true
        callBackData.isBotRegistered = true
        return res.json(callBackData)
    }

    // Bot have access to run
    const callBackData = templates.access_run
    callBackData.ok = true
    callBackData.isBotRegistered = true

    isBotRegistered.update({
        name            : client.name,
        picture         : client.picture,
        lastRun         : new Date(),
    })

    return res.json(callBackData)
}

module.exports = {
    post
}