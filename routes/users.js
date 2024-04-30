const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
    res.send("User list");
});

router.get("/new", (req, res) => {
    res.send("create new user");
});

router.post("/", (req, res) => {
    res.send("user created");
});

router.get("/:id", (req, res) => {
    id = req.user.name;

    res.send(`Get user ${id}`);
});

// router
//     .route("/:id")
//     .get((req, res) => {})
//     .put((req, res) => {})
//     .delete((req, res) => {});
const users = [{ name: "Kyle" }, { name: "Sally" }];
router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
});

module.exports = router;
