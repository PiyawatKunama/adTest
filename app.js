const express = require("express");

const app = express();
const port = process.env.PORT || 3800;

app.get("/", (req, res) => {
	res.sendFile("/test.html", { root: __dirname });
});

app.get("/render_sticky.js", (req, res) => {
	res.sendFile("/render_sticky.js", { root: __dirname });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
