const express = require("express");

const app = express();
const port = process.env.PORT || 3800;

app.get("/", (req, res) => {
	res.sendFile("/test.html", { root: __dirname });
});

app.get("/manual-render-ads.js", (req, res) => {
	res.sendFile("/manual-render-ads.js", { root: __dirname });
});

app.get("/testServer", (req, res) => {
	res.sendFile("/testServer.html", { root: __dirname });
});

app.get("/image1.jpg", (req, res) => {
	res.sendFile("/image1.jpg", { root: __dirname });
});

app.get("/image2.jpg", (req, res) => {
	res.sendFile("/image2.jpg", { root: __dirname });
});

app.get("/image3.jpg", (req, res) => {
	res.sendFile("/image3.jpg", { root: __dirname });
});

app.get("/image4.jpg", (req, res) => {
	res.sendFile("/image4.jpg", { root: __dirname });
});

app.get("/server", (req, res) => {
	res.sendFile("/server.html", { root: __dirname });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
