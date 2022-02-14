const express = require("express");

const app = express();
const PORT = process.env.PORT || 3800;

app.get("/", (req, res) => {
	res.sendFile("/test.html", { root: __dirname });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
