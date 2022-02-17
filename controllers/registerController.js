const User = require("../models/User")

const post = async (req, res) => {
    let isUserRegistered = true
    
    if(isUserRegistered){

        const newUser = await User.create({
            username       :     req.query.username,
            password       :     await User.encryptPassword(req.query.password),
            userRank       :     "user"
        })

        req.flash("success", "You have successfully registered")
        res.redirect("/")
    }else{
        res.send("You cant register")
    }

}

module.exports = {
    post
}