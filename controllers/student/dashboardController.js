const Student = require("../../models/Student")

const get = async (req, res) => {
    const findStudent = await Student.findOne({
        where : {
            userId : req.user.id
        }
    })

    res.render("student/dashboard", {
        user : req.user,
        student : findStudent,
        flash : req.flash()
    })
}

module.exports = {
    get
}