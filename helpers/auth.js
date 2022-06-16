const User = require("../models/User")

// ?----------- Check if user is logged in
const isLoggedIn = (req, res, next) => {

    if(!req.user){

        req.flash("warning", "You must be logged in to view this page")
        req.session.redirectTo = req.url;
        return res.redirect("/login");

    }

    next();
}

// ?----------- Check if user is not logged in
const isNotLoggedIn = (req, res, next) => { 

    if(req.user) return res.redirect("/dashboard")
    next()
}

// ?----------- Chcek if user have admin rank
const isUserAdmin = (req, res, next) => { 

    if(req.user.userRank !== "admin") return res.redirect("/dashboard")
    next()

}

const isUserStudent = async (req, res, next) => {

    const findUser = await User.findOne({
        where : {
            username : req.user.username
        }
    })

    if(!findUser || findUser.userRank !== "student") res.redirect("/dashboard")
    next()

}

module.exports = {
    isLoggedIn,
    isNotLoggedIn,
    isUserAdmin,
    isUserStudent
}