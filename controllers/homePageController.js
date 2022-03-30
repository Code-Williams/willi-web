const get = (req, res) => {
    res.render("index", {
        flash : req.flash(),
        user : req.user
    })
}

module.exports = {
    get,
}