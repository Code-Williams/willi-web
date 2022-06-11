const express = require("express")
const Router = new express.Router()

const accessRunController = require("../controllers/APIs/accessRunController")
Router.post("/v1/access_run", accessRunController.post)

const accessRunProjectController = require("../controllers/APIs/accessRunProjectController")
Router.post("/v1/access_run_server", accessRunProjectController.post)

module.exports = Router