const express = require("express")
const Router = new express.Router()
const { isLoggedIn, isNotLoggedIn, isUserAdmin } = require("../helpers/auth")

const botRegisterController = require("../controllers/botRegisterController")
Router.get("/bots/register", botRegisterController.get)
Router.post("/bots/register", botRegisterController.post)

const homePageController = require("../controllers/homePageController")
Router.get("/", isNotLoggedIn, homePageController.get)
Router.post("/login", homePageController.post, homePageController.loginSuccess)

// const registerController = require("../controllers/registerController")
// Router.get("/register", registerController.get)

const dashboardController = require("../controllers/dashboardController")
Router.get("/dashboard", isLoggedIn, dashboardController.get)

const billsController = require("../controllers/bills")
Router.get("/bills/:id", isLoggedIn, billsController.get)

module.exports = Router