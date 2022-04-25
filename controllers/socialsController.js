const get = (req, res) => {
  res.render("socials", {
    flash: req.flash(),
    user: req.user,
  });
};

module.exports = get;
