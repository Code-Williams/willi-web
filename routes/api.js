const express = require("express")
const Router = new express.Router()
const { isLoggedIn, isNotLoggedIn, isUserAdmin } = require("../helpers/auth")

const accessRunController = require("../controllers/APIs/accessRunController")
Router.post("/v1/access_run", accessRunController.post)

module.exports = Router