const express = require("express")
const { body } = require("express-validator")
const Router = new express.Router()

const { isLoggedIn, isNotLoggedIn, isUserAdmin } = require("../helpers/auth")

const botRegisterController = require("../controllers/botRegisterController")
Router.get("/bots/register", botRegisterController.get)
Router.post("/bots/register", botRegisterController.post)

const homePageController = require("../controllers/homePageController")
Router.get("/", isNotLoggedIn, homePageController.get)
Router.post("/login", homePageController.post, homePageController.loginSuccess)

const registerController = require("../controllers/registerController")
Router.get("/register", registerController.post)

const dashboardController = require("../controllers/dashboardController")
Router.get("/dashboard", isLoggedIn, dashboardController.get)

const accessRunController = require("../controllers/APIs/accessRunController")
Router.post("/api/v1/access_run", accessRunController.post)

module.exports = Router