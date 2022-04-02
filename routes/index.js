const express = require("express")
const Router = new express.Router()
const { isLoggedIn, isNotLoggedIn, isUserAdmin } = require("../helpers/auth")

const upload = require("../helpers/uploader")

const homePageController = require("../controllers/homePageController")
Router.get("/", homePageController.get)

const botRegisterController = require("../controllers/botRegisterController")
Router.get("/bots/register", botRegisterController.get)
Router.post("/bots/register", botRegisterController.post)

const loginPageController = require("../controllers/loginPageController")
Router.get("/login", isNotLoggedIn, loginPageController.get)
Router.post("/login", loginPageController.post, loginPageController.loginSuccess)

// const registerController = require("../controllers/registerController")
// Router.get("/register", registerController.get)

const dashboardController = require("../controllers/dashboardController")
Router.get("/dashboard", isLoggedIn, dashboardController.get)

const billsController = require("../controllers/bills")
Router.get("/bills/:id", isLoggedIn, billsController.get)

const registerController = require("../controllers/registerController")
Router.get("/register", isNotLoggedIn, registerController.get)

const uploadController = require("../controllers/uploadController")
Router.get("/uploader", uploadController.get)
Router.post("/uploader", upload.single('file'), uploadController.post)

module.exports = Router