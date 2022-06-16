const express = require("express")
const Router = new express.Router()
const { isLoggedIn, isNotLoggedIn, isUserAdmin, isUserStudent } = require("../../helpers/auth");

const studentDashboardController = require("../../controllers/student/dashboardController")
Router.get("/dashboard", isLoggedIn, isUserStudent, studentDashboardController.get)

module.exports = Router