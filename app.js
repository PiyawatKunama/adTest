const express = require("express");

const app = express();
const port = process.env.PORT || 3800;

app.get("/", (req, res) => {
	res.sendFile("/index.html", { root: __dirname });
});

app.get("/server", (req, res) => {
	res.sendFile("/server.html", { root: __dirname });
});

app.get("/side", (req, res) => {
	res.sendFile("/side.html", { root: __dirname });
});

app.get("/text-only", (req, res) => {
	res.sendFile("/text-only.html", { root: __dirname });
});

app.get("/title-above", (req, res) => {
	res.sendFile("/title-above.html", { root: __dirname });
});

app.get("/autoad.js", (req, res) => {
	res.sendFile("/autoad.js", { root: __dirname });
});

app.get("/manual-render-ads.js", (req, res) => {
	res.sendFile("/manual-render-ads.js", { root: __dirname });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.get("/jimmy", (req, res) => {
	console.log("req.headers", req.headers);
	res.send("jimmy");
});

app.get("/cat/:adType", (req, res) => {
	const adType = req.params.adType;
	console.log("req", req.header);
	res.sendFile(`/image/${adType}.png`, { root: __dirname });
});

app.get("/application/render_ads", (req, res) => {
	try {
		const response = await fetch(
			"http://localhost:3001/application/render_ads",
			// "https://api-afbrother.skuberg.pro/creatives/render_ads",
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: req.body,
			}
		);
	
		const result = await response.json();
		// setTimeout(async () => {
		// 	const adClosed = getAdClosed();
		// 	if (!adClosed.includes(adKey)) {
		// 		await impressionAd(json[0].key, adKey, appKey);
		// 	}
		// }, 5100);
	
		return result;
	} catch (error) {
		console.log("errror",error);
		throw error;
	}
});


