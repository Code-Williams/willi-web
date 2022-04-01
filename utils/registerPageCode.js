/* 
    This part will generate a code for a target page
    Some pages was locked and need to enter the correct code for enter to the page
    Admin of website can generate this codes but it's haven't options and it's not customizable for now
    Admins jsut can enter a URL and the code will be generate automatically for the target page
    
    Options we need for base build :
        * Admins can enter a number for each code and when user use the code for this number, code will expire automaticlly
        * Admins can select between private and public for each code
        * When user enter to a page using code, if code was private then show to user how much user can enter again with this code
        * Have a log page for this codes (save ip address, user data [if user is logged in], date, code)
        * Have limitation for entering wrong code in the hole time
        * If code was private, user wants to logged in for using code
        
    DataBase build :
        * for logging system : | ID | CODE | DATE | IP | URL | 
        * for codes : | ID | CODE | DATE | ADMIN | MODE [private/public] | USED | USABLE_TIMES |
        
*/

const PageCodes = require("../models/page_codes")

const generatePageCode = async (req, url) => {

    try {

        await PageCodes.create({
            code : req.body.code,
            date : new Date(),
            admin : req.user.id,
            mode : req.body.mode || "public",
            used : false,
            usable_times : req.body.usable_times || 1
        })
        
        return {
            ok : true
        }

    } catch (error) {

        return {
            ok : false,
            error
        }
        
    }

}

module.exports = generatePageCode;