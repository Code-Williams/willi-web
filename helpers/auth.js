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








module.exports = {
    isLoggedIn,
    isNotLoggedIn,
    isUserAdmin
}