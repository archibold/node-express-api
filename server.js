const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
    console.log("Here");
    res.download("server.js");
    res.render("index", { text: "World" });
});

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(3000);
