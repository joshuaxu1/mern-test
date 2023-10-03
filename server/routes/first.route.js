const FirstController = require("../controllers/first.controller");

module.exports = (app) => {
    app.get("/api", FirstController.index)
}