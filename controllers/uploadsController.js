const Upload = require("../models/Upload")

const get = async (req, res) => {
    const uploads = await Upload.findAll()

    res.render("uploads", {
        user : req.user,
        flash : req.flash(),
        uploads
    })
}

module.exports = {
    get
}