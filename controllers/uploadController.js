const Upload = require("../models/Upload")

const get = async (req, res) => {

    res.render("uploader", {
        user : req.user,
        flash : req.flash()
    })
}

const post = async (req, res) => {
    if(req.file){
        if(req.file.filename){

            await Upload.create({
                file : req.file.filename,
                username : req.body.name,
                number : req.body.number,
                email : req.body.email
            })
            req.flash("success", `Upload successfully done. Link : https://wil1i.ir/uploads/${req.file.filename}`)
            res.redirect("/uploader")
            return
        }
    }

    req.flash("error", "لطفا فایل مورد نظر را انتخاب کنید")
    res.redirect("/uploader")
}

module.exports = {
    get,
    post
}