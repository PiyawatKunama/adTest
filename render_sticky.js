generateAds = async () => {
	const currentScript = document.currentScript;
	const webKey = currentScript.getAttribute("data-web-key");
	const creativeWebKey = currentScript.getAttribute("data-creative-web-key");
	console.log(webKey);
	console.log(creativeWebKey);

	const myHeaders = new Headers();

	myHeaders.append("Access-Control-Allow-Origin", "*");
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify({
		webKey,
		adKeys: [creativeWebKey],
	});

	const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	const { response, result } = await fetch(
		"https://api.advertise.skuberg.pro/creatives/render_ads",
		requestOptions
	);

	console.log({ response, result });

	const divElem = document.createElement("div");
	divElem.id = "tagDiv";
	divElem.style =
		"display: block !important;width: 100% !important;bottom: 0px !important;margin: 0 !important;clear: none !important;float: none !important;padding: 0px !important;position: fixed !important;visibility: visible !important;z-index: 999999999 !important;text-align: center !important;";
	document.body.appendChild(divElem);

	const AElem = document.createElement("a");
	AElem.id = "tagA";
	AElem.setAttribute("href", "#");
	document.getElementById("tagDiv").appendChild(AElem);

	const ImgElem = document.createElement("img");
	ImgElem.id = "tagImg";
	ImgElem.style = "width: 1000px; height: 80px";
	ImgElem.src = result.url;
	// "https://ad-project.s3.ap-southeast-1.amazonaws.com/banners/testAd1.png";
	document.getElementById("tagA").appendChild(ImgElem);
};

generateAds();
