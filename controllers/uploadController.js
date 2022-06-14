/* 
    That's a personal side, we can upload anything we want and share my-self website's link to access the file
    Anyone uploads the file can manage it, files added to dashboard but not in bot's side, in another side like downer of bot's side
    Admins have a panel for manage all files (they can't see anything but they can manage it) by searching file's name (or file's owner and see all files for owner of website about security reasons)
*/

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
                name : req.body.name,
                description : req.body.description,
                user : req.user.username
            })
            req.flash("success", `Upload successfully done. Link : https://wil1i.ir/uploads/${req.file.filename}`)
            res.redirect("/uploader")
            return
        }
    }

    req.flash("error", "Please select a file to upload")
    res.redirect("/uploader")
}

module.exports = {
    get,
    post
}