const express = require("express");

const app = express();

const port = process.env.port || 5000;

app.get("/", (req, res) => {
	res.send("news api running");
});

app.listen(port, () => {
	console.log("news serve rn", port);
});