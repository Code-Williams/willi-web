const Upload = require("../models/Upload")

const get = async (req, res) => {
    const uploads = await Upload.findAll()

    res.render("uploads", {
        user : req.user,
        flash : req.flash(),
        uploads
    })
}

const post = async (req, res) => {
    const fileID = req.query.id
    const isFileAvailable = await Upload.findByPk(fileID)

    if(isFileAvailable){
        isFileAvailable.destroy()
        req.flash("success", `Successfully deleted file with id ${fileID}`)
        res.redirect("/dashboard")
    }else{
        req.flash("error", `File with id ${fileID} not found`)
        req.redirect("/dashboard")
    }
}

module.exports = {
    get,
    post
}