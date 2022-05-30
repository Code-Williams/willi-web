const projectPasswords = require("../../models/ProjectPasswords")

const post = (req, res) => {
    const { project_name, password } = req.body
    projectPasswords.findOne({
        where : {
            project_name
        }
    }).then(project => {
        if (project) {
            if(project.isDeactive == "n"){
                if (project.password === password) {
                    res.status(200).json({
                        success : true,
                        token : project.dataBasePassword,
                        isDeActive : false
                    })
                } else {
                    res.status(200).json({
                        success : false,
                        token : NaN,
                        isDeActive : false
                    })
                }
            }else{
                res.status(200).json({
                    success : false,
                    token : NaN,
                    isDeActive : true
                })
            }
        } else {
            res.status(200).json({
                success : false,
                token : NaN,
                isDeActive : false
            })
        }
    })
}

module.exports = {post}