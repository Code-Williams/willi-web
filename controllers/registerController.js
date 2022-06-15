const User = require("../models/User")

const post = async (req, res) => {
    let isUserRegistered = true
    
    if(isUserRegistered){

        const newUser = await User.create({
            username       :     req.body.username,
            password       :     await User.encryptPassword(req.body.password),
            number         :     req.body.number,
            userRank       :     "user"
        })

        req.flash("success", "You have successfully registered")
        res.redirect("/")
    }else{
        res.send("You cant register")
    }

}

const get = (req, res) => {
    res.render("register", {
        flash : req.flash(),
        user : req.user
    })
}

module.exports = {
    post,
    get
}