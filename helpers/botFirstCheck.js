const templates = require("../utils/jsonCallBackTemplate")

const check = (botData) => {
    if(!botData) {
        const callBackData = templates.access_run
        callBackData.ok = false
        callBackData.botData = false
        callBackData.message = "Your bot is not registered"
        return callBackData
    }

    // If bot is blocked
    if(botData.blocked) {
        const callBackData = templates.access_run
        callBackData.message = "Your bot is blocked. Please check your dashboard"
        callBackData.blocked = true
        callBackData.botData = true
        callBackData.ok = false
        return callBackData
    }

    // If bot have bills upper than 100K Tomans
    if(botData.bills >= 100000) {
        const callBackData = templates.access_run
        callBackData.message = "Your bot have bills. Please check your dashboard"
        callBackData.bills = true
        callBackData.botData = true
        callBackData.ok = false
        return callBackData
    }
    const callBackData = templates.access_run
    callBackData.ok = true

    return callBackData
}

module.exports = check