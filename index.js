const express = require("express");

const app = express();

const cors = require("cors");
app.use(cors());

const port = process.env.port || 5000;

const courses = require("./data/corses.json");

app.get("/courses", (req, res) => {
	res.send(courses);
});

app.get("/", (req, res) => {
	res.send("news api running");
});

app.listen(port, () => {
	console.log("news serve rn", port);
});
