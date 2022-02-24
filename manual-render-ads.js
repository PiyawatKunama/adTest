generateAds = async () => {
	const AFelements = document.getElementsByClassName("AFbrother");
	const webKey = AFelements[0].getAttribute("data-web-key");

	const adKeys = [];
	for (let i = 0; i < AFelements.length; i++) {
		const adKey = AFelements[i].getAttribute("data-creative-web-key");
		if (!adKeys.includes(adKey)) {
			adKeys.push(adKey);
		}
	}

	const headers = new Headers();

	headers.append("Access-Control-Allow-Origin", "*");
	headers.append("Content-Type", "application/json");

	const body = JSON.stringify({
		webKey,
		adKeys,
	});
	const requestOptions = {
		method: "POST",
		headers,
		body,
		redirect: "follow",
	};
	const response = await fetch(
		"http://localhost:3001/creatives/render_ads",
		requestOptions
	);
	const adsData = await response.json();
	console.log(adsData);

	const renderAdKeys = [];
	for (let i = 0; i < adsData.length; i++) {
		renderAdKeys.push(adsData[i].key);
		let adStyle;

		renderAdKeys.push(adsData[i].key);
		// Ins
		const insElem = document.querySelector(
			`ins[data-creative-web-key='${adsData[i].adKey}']`
		);

		insElem.id = `tagIns${i}`;

		adStyle = insElem.getAttribute("style");

		// div
		const divElem = document.createElement("div");
		divElem.id = `tagDiv${i}`;
		if (adsData[i].ad_format === "BANNER") {
			if (adsData[i].banner_format === "STICKY") {
				divElem.style =
					"display: block !important;width: 100% !important;bottom: 0px !important;margin: 0 !important;clear: none !important;float: none !important;padding: 0px !important;position: fixed !important;visibility: visible !important;z-index: 999999999 !important;text-align: center !important;";
				document.getElementById(`tagIns${i}`).appendChild(divElem);
			} else if (adsData[i].banner_format === "HEADER") {
				divElem.style = `display: block;margin: 0px;width: 100% !important;bottom: 0px;float: none !important;left: 0px;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1;overflow: visible !important;text-align: center  !important;`;
				document.body.insertBefore(divElem, document.body.firstChild);
			} else if (adsData[i].banner_format === "SLIDE") {
				const parentNode = insElem.parentNode;
				parentNode.style.position = "relative";
				document.getElementById(`tagIns${i}`).appendChild(divElem);
			} else {
				document.getElementById(`tagIns${i}`).appendChild(divElem);
				adStyle = `display: inline-block;${adStyle}`;
			}
		} else {
			document.getElementById(`tagIns${i}`).appendChild(divElem);
			adStyle = `display: inline-block;${adStyle}`;
		}

		if (adsData[i].ad_format === "POP") {
			// Get session
			let pop_up_session = sessionStorage.getItem("afbrother_pop");
			if (!pop_up_session) {
				var element = document.createElement("a");
				element.id = "popup_ads";
				element.setAttribute("href", adsData[i].url);

				window.open(element, "", "width=800 height=500");

				// Set session after show pop up
				sessionStorage.setItem("afbrother_pop", "pop_up_ads_session");
			}
			// Romove session after 30 minute
			setTimeout(() => {
				sessionStorage.removeItem("afbrother_pop");
			}, 18000000);
		}

		// A
		const AElem = document.createElement("a");
		AElem.id = `tagA${i}`;
		AElem.setAttribute("href", adsData[i].href);
		AElem.target = "_blank";
		document.getElementById(`tagDiv${i}`).appendChild(AElem);

		// div ads
		const DivAdElem = document.createElement("div");
		DivAdElem.id = `tagDivAd${i}`;
		DivAdElem.style = "display: inline-block; position: relative";
		document.getElementById(`tagA${i}`).appendChild(DivAdElem);

		//Img
		const ImgElem = document.createElement("img");
		ImgElem.style = adStyle;
		ImgElem.src = adsData[i].url;
		document.getElementById(`tagDivAd${i}`).appendChild(ImgElem);

		//ImgClose
		const ImgClose = document.createElement("img");
		ImgClose.style =
			"position: absolute; top: 0; right: 0; margin-top: 2px; margin-right: 2px;width: 20px; height: 20px;background-color: white;";
		ImgClose.src =
			"https://ad-project.s3.ap-southeast-1.amazonaws.com/app-image/renderAds/close.png";

		ImgClose.onclick = function remove(event) {
			const ins = document.getElementById(`tagIns${i}`);
			const deleteDiv = document.getElementById(`tagDiv${i}`);
			ins.removeChild(deleteDiv);
			event.preventDefault();
		};

		document.getElementById(`tagDivAd${i}`).appendChild(ImgClose);
	}
	renderAdKeys.forEach(async (renderAdKey) => {
		const renderAdBody = JSON.stringify({
			webKey,
			adKey: renderAdKey,
		});
		const requestRenderAdOptions = {
			method: "POST",
			headers,
			body: renderAdBody,
			redirect: "follow",
		};

		await fetch(
			"http://localhost:3001/creatives/impression_ads",
			requestRenderAdOptions
		);
	});
};

if (typeof window.AFAdsScript === "undefined") {
	window.AFAdsScript = true;
	generateAds();
}
