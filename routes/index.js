const express = require("express");
const Router = new express.Router();
const { isLoggedIn, isNotLoggedIn, isUserAdmin } = require("../helpers/auth");

const upload = require("../helpers/uploader");

const homePageController = require("../controllers/homePageController");
Router.get("/", homePageController.get);

const botRegisterController = require("../controllers/botRegisterController");
Router.get("/bots/register", botRegisterController.get);
Router.post("/bots/register", botRegisterController.post);

const loginPageController = require("../controllers/loginPageController");
Router.get("/login", isNotLoggedIn, loginPageController.get);
Router.post(
  "/login",
  loginPageController.post,
  loginPageController.loginSuccess
);

const dashboardController = require("../controllers/dashboardController");
Router.get("/dashboard", isLoggedIn, dashboardController.get);

const billsController = require("../controllers/bills");
Router.get("/bills/:id", isLoggedIn, billsController.get);

const registerController = require("../controllers/registerController");
Router.get("/register", isLoggedIn,isUserAdmin, registerController.get);

const uploadController = require("../controllers/uploadController");
Router.get("/uploader", isLoggedIn, uploadController.get);
Router.post("/uploader", upload.single("file"), uploadController.post);

const uploadsController = require("../controllers/uploadsController");
Router.get("/uploads", isLoggedIn, isUserAdmin, uploadsController.get);
Router.post("/uploads/del", uploadsController.post)

const socialsController = require("../controllers/socialsController");
Router.get("/socials", socialsController);

Router.get("/discord", (req, res) => {
  res.redirect("https://discord.gg/ZSaNmq5W37");
});

Router.get("/instagram", (req, res) => {
  res.redirect("https://www.instagram.com/shayan._.williams");
});

Router.get("/youtube", (req, res) => {
  res.redirect("https://youtube.com/c/Code_Williams");
});

Router.get("/twitter", (req, res) => {
  res.redirect("https://twitter.com/Williams_Shayan");
});

Router.get("/telegram", (req, res) => {
  res.redirect("https://t.me/wil1i");
});

const usersController = require("../controllers/usersController")
Router.get("/users", usersController.get)

module.exports = Router;
