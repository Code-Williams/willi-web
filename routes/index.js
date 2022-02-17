const express = require("express")
const { body } = require("express-validator")
const Router = new express.Router()

const { isLoggedIn, isNotLoggedIn, isUserAdmin } = require("../helpers/auth")

const homePageController = require("../controllers/homePageController")
Router.get("/", isNotLoggedIn, homePageController.get)
Router.post("/login", homePageController.post, homePageController.loginSuccess)

const registerController = require("../controllers/registerController")
Router.get("/register", registerController.post)

const dashboardController = require("../controllers/dashboardController")
Router.get("/dashboard", isLoggedIn, dashboardController.get)

module.exports = Router