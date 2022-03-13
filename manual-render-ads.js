generateAds = async () => {
	var placedIds = {};
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

	for (let i = 0; i < adsData.length; i++) {
		const adData = adsData[i];
		const adIndex = i + 1;
		switch (adData.ad_format) {
			case "NATIVE":
				RenderNative({
					nativeIndex: adIndex,
					urlSrc: adData.url,
					urlHref: adData.href,
					nativeAdTitle: adData.title,
					nativeAdDescription: adData.description,
					creativeWebKey: adData.adKey,
				});
				break;
			case "POP":
				RenderPop(adData, screen);
				break;
			case "BANNER":
				// ins
				const insElem = document.querySelector(
					`ins[data-creative-web-key='${adData.adKey}']`
				);
				insElem.id = `tagIns${adIndex}`;
				let adStyle = insElem.getAttribute("style");

				// main div
				const divElem = document.createElement("div");
				divElem.id = `tagDiv${adIndex}`;

				switch (adData.banner_format) {
					case "STICKY":
						RenderSticky({ divElem, adStyle, adIndex });
						break;
					case "HEADER":
						RenderHeader({ divElem });
						break;
					case "SLIDE":
						RenderSlide({ adsData, insElem, divElem, adIndex });
						break;
					case "IN_PAGE":
						document
							.getElementById(`tagIns${adIndex}`)
							.appendChild(divElem);
						adStyle = `display: inline-block;${adStyle}`;
						break;
				}
				generateBannerAdsDisplay({ adIndex, adData, adStyle });

				placedIds[adData.adKey] = {
					div_id: divElem.id,
					creativeCampaign_Key: adData.key,
					creativeWebsite_Key: adData.adKey,
					impressed: 0,
				};

				var data = JSON.stringify({
					webKey,
					adKey: adData.key,
					adWebKey: adData.adKey,
				});

				if (
					isElementInViewport(divElem) ||
					adsData[i].ad_format === "POP"
				) {
					await impressedCreative(data);
				}
				break;
		}
	}

	async function impressedCreative(body) {
		await fetch("http://localhost:3001/creatives/impression_ad", {
			...requestOptions,
			body,
		});
		return { success: true };
	}

	window.addEventListener("scroll", async function () {
		for (var [key, value] of Object.entries(placedIds)) {
			if (!value.impressed) {
				var el = document.getElementById(value.div_id);

				var data = JSON.stringify({
					webKey,
					adKey: value.creativeCampaign_Key,
					adWebKey: value.creativeWebsite_Key,
				});

				if (isElementInViewport(el)) {
					var res = await impressedCreative(data);
					if (res.success) {
						value.impressed = 1;
					}
				}
			}
		}
	});

	function isElementInViewport(el) {
		// Special bonus for those using jQuery
		if (typeof jQuery === "function" && el instanceof jQuery) {
			el = el[0];
		}
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
				(window.innerHeight ||
					document.documentElement
						.clientHeight) /* or $(window).height() */ &&
			rect.right <=
				(window.innerWidth ||
					document.documentElement
						.clientWidth) /* or $(window).width() */
		);
	}
};

generateBannerAdsDisplay = ({ adIndex, adData, adStyle }) => {
	// A
	const AElem = document.createElement("a");
	AElem.id = `tagA${adIndex}`;
	AElem.setAttribute("href", adData.href);
	AElem.target = "_blank";
	document.getElementById(`tagDiv${adIndex}`).appendChild(AElem);

	//image
	const DivAdElem = document.createElement("div");
	DivAdElem.id = `tagDivAd${adIndex}`;
	DivAdElem.style = "display: inline-block; position: relative";
	document.getElementById(`tagA${adIndex}`).appendChild(DivAdElem);
	const ImgElem = document.createElement("img");
	ImgElem.style = adStyle;
	ImgElem.src = adData.url;
	document.getElementById(`tagDivAd${adIndex}`).appendChild(ImgElem);

	//close ad
	const ImgClose = document.createElement("img");
	ImgClose.style =
		"cursor:pointer;position: absolute; top: 0; left: 0; margin-top: 2px; margin-left: 2px;width: 20px; height: 20px;background-color: white;opacity: 0.1;";
	ImgClose.src =
		"https://ad-project.s3.ap-southeast-1.amazonaws.com/app-image/renderAds/close.png";

	ImgClose.onclick = function remove(event) {
		const ins = document.getElementById(`tagIns${adIndex}`);
		const deleteDiv = document.getElementById(`tagDiv${adIndex}`);
		ins.removeChild(deleteDiv);
		event.preventDefault();
	};
	document.getElementById(`tagDivAd${adIndex}`).appendChild(ImgClose);
};

RenderSticky = ({ divElem, adStyle, adIndex }) => {
	divElem.style = `
					display: block !important;
					width: 100% !important;
					bottom: 0px !important;
					margin: 0 !important;
					clear: none !important;
					float: none !important;
					padding: 0px !important;
					position: fixed !important;
					visibility: visible !important;
					z-index: 999999999 !important;
					text-align: center !important;
					${adStyle}`;

	document.getElementById(`tagIns${adIndex}`).appendChild(divElem);
};

RenderHeader = ({ divElem }) => {
	divElem.style = `
	display: block;
	padding: 0;
	width: 100% !important;
	float: none !important;
	left: 0px;
	margin: 0px !important;
	opacity: 1;
	overflow: visible !important;
	text-align: center  !important;`;
	document.body.prepend(divElem);
	// document.body.insertBefore(divElem, document.body.firstChild);
	// document.body.appendChild(divElem);
};

RenderSlide = ({ adsData, insElem, divElem, adIndex }) => {
	const sticky_ads = adsData.filter((ads) => ads.banner_format === "STICKY");
	const sticky_height = sticky_ads.map((sticky_ads) => sticky_ads.height);
	const parentNode = insElem.parentNode;
	parentNode.style.position = "relative";
	divElem.style = `display:inline-block;margin: 0 !important;clear: none !important;position: fixed;bottom: ${
		sticky_height.length ? Math.max(...sticky_height) : 1
	}px !important;right:1px;padding: 0px !important;z-index: 999999999 !important;`;
	document.getElementById(`tagIns${adIndex}`).appendChild(divElem);
};

RenderPop = ({ adData, screen }) => {
	var element = document.createElement("a");
	element.id = "popup_ads";
	element.setAttribute("href", adsData[i].url);
	window.open(element, "", `width=${screen.width} height=${screen.height}`);
};

RenderNative = ({
	nativeIndex,
	urlSrc,
	urlHref,
	nativeAdDescription,
	nativeAdTitle,
	creativeWebKey,
}) => {
	//ins
	const insElem = document.querySelector(
		`ins[data-creative-web-key=${creativeWebKey}]`
	);
	insElem.id = `tagIns${nativeIndex}`;
	adStyle = insElem.getAttribute("style");
	const sizesTypeText = adStyle.split(";");
	const NativeAdWidth = sizesTypeText[0].replace(/[^0-9]/g, "");
	const NativeAdHeight = sizesTypeText[1].replace(/[^0-9]/g, "");
	insElem.style = `${adStyle};text-decoration: none;display: inline-block;`;

	//ins div
	const insDiv = document.createElement("div");
	insDiv.id = `insDiv${nativeIndex}`;
	insDiv.style = "position: relative;";
	document.getElementById(`tagIns${nativeIndex}`).appendChild(insDiv);

	// native main div
	const MainNativeStyle = `position: absolute;border: 0.7px solid #d5d4eb;padding: calc(${NativeAdHeight}px / 20) calc(${NativeAdWidth}px / 20);width: calc(${NativeAdWidth}px - (${NativeAdWidth}px / 9.5));height: calc(${NativeAdHeight}px - (${NativeAdHeight}px / 9.5));`;
	const AFNativeMainDiv = document.createElement("div");
	AFNativeMainDiv.id = `AFNativeMainDiv${nativeIndex}`;
	AFNativeMainDiv.style = MainNativeStyle;
	AFNativeMainDiv.setAttribute("onmouseover", "onMouseOver()");
	AFNativeMainDiv.setAttribute("onmouseout", "onMouseOut()");
	AFNativeMainDiv.setAttribute("onclick", "onClick()");
	document
		.getElementById(`insDiv${nativeIndex}`)
		.appendChild(AFNativeMainDiv);

	//image form
	const AFNativeImageForm = document.createElement("div");
	AFNativeImageForm.style = `background-color: #f1f0f559;height: calc(${NativeAdHeight}px - (${NativeAdHeight}px / 2.6));width: 100%;position: relative;`;
	AFNativeImageForm.id = `AFNativeImageForm${nativeIndex}`;
	document
		.getElementById(`AFNativeMainDiv${nativeIndex}`)
		.appendChild(AFNativeImageForm);

	//image
	const AFNativeImage = document.createElement("img");
	AFNativeImage.src = urlSrc;
	AFNativeImage.alt = urlSrc;
	AFNativeImage.style =
		"height: auto;width: auto;max-height: 100%;max-width: 100%;margin: auto;position: absolute;left: 0;right: 0;top: 0;bottom: 0;";
	document
		.getElementById(`AFNativeImageForm${nativeIndex}`)
		.appendChild(AFNativeImage);

	//text
	const AFNativeText = document.createElement("div");
	AFNativeText.style = `font-family: Sans-serif;margin-top: calc(${NativeAdHeight}px / 30);padding: 0 calc(${NativeAdHeight}px / 28);`;
	AFNativeText.id = `AFNativeText${nativeIndex}`;
	document
		.getElementById(`AFNativeMainDiv${nativeIndex}`)
		.appendChild(AFNativeText);

	//text title
	const AFNativeTitle = document.createElement("div");
	AFNativeTitle.style = `font-size: calc(((${NativeAdHeight}px / 19) + (${NativeAdWidth}px / 19)) / 2);font-weight: bold;`;
	AFNativeTitle.id = `AFNativeTitle${nativeIndex}`;
	document
		.getElementById(`AFNativeText${nativeIndex}`)
		.appendChild(AFNativeTitle);
	if (nativeAdTitle.length > 31) {
		document.getElementById(
			`AFNativeTitle${nativeIndex}`
		).innerHTML = `${nativeAdTitle.substring(0, 31)}..`;
	} else {
		document.getElementById(`AFNativeTitle${nativeIndex}`).innerHTML =
			nativeAdTitle;
	}

	//text description
	const AFNativeDescription = document.createElement("div");
	AFNativeDescription.style = `font-size: calc(((${NativeAdHeight}px / 27.1428) + (${NativeAdWidth}px / 28.1428)) / 2)`;
	AFNativeDescription.id = `AFNativeDescription${nativeIndex}`;
	document
		.getElementById(`AFNativeText${nativeIndex}`)
		.appendChild(AFNativeDescription);

	if (nativeAdDescription.length > 130) {
		document.getElementById(
			`AFNativeDescription${nativeIndex}`
		).innerHTML = `${nativeAdDescription.substring(
			0,
			130
		)} <span style='color: blue;text-decoration: underline;'> More info....</span>`;
	} else {
		document.getElementById(
			`AFNativeDescription${nativeIndex}`
		).innerHTML = `${nativeAdDescription} <span style='color: blue;text-decoration: underline;'> More info....</span>`;
	}

	//close ad
	const ImgClose = document.createElement("img");
	ImgClose.style =
		"cursor:pointer;position: absolute; top: 0; left: 0; margin-top: 2px; margin-left: 2px;width: 20px; height: 20px;background-color: white;opacity: 0.1;";
	ImgClose.src =
		"https://ad-project.s3.ap-southeast-1.amazonaws.com/app-image/renderAds/close.png";

	ImgClose.onclick = function remove(event) {
		const ins = document.getElementById(`tagIns${nativeIndex}`);
		const deleteDiv = document.getElementById(`insDiv${nativeIndex}`);
		ins.removeChild(deleteDiv);
		event.preventDefault();
	};

	document.getElementById(`insDiv${nativeIndex}`).appendChild(ImgClose);

	onMouseOver = () => {
		document.getElementById(
			`AFNativeMainDiv${nativeIndex}`
		).style = `${MainNativeStyle}cursor:pointer;border: 1px solid #d5d4eb;box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,rgba(0, 0, 0, 0.09) 0px -3px 5px;`;
	};
	onMouseOut = () => {
		document.getElementById(`AFNativeMainDiv${nativeIndex}`).style =
			MainNativeStyle;
	};
	onClick = () => {
		window.open(urlHref);
	};
};

if (typeof window.AFAdsScript === "undefined") {
	window.AFAdsScript = true;
	// window.addEventListener("DOMContentLoaded", function () {
	//   generateAds();
	// });
	generateAds();
}
