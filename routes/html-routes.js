const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = (app)=>{

  app.get("/", (req, res) => {
    if(req.user) {
      res.redirect("/profile");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    if(req.user){
      res.redirect("/profile");
    }
    res.render("login");
  });

  app.get("/profile-setup", (req, res)=>{
    if(req.user){
      res.redirect("/profile");
    }
    res.render("profile-setup");
  });

  app.get("/profile", isAuthenticated, (req, res) => {
    res.render("profile");
  });

  app.get("/dashboard", isAuthenticated, (req, res)=>{
    res.render("dashboard");
  })

};
