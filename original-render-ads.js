var renderAdsUrl = "http://localhost:3001/creatives/render_ads";
var impressAdUrl = "http://localhost:3001/creatives/impression_ad";
var closeImageUrl = "http://localhost:3001/api/serverImage/close.png";

var adsInView = {};
var adsData = {};
var impressionCount = 0;
var adDelayTime = 200;

function getViewPortSize() {
	var viewportwidth;
	var viewportheight;

	if (typeof window.innerWidth != "undefined") {
		(viewportwidth = window.innerWidth),
			(viewportheight = window.innerHeight);
	} else if (
		typeof document.documentElement != "undefined" &&
		typeof document.documentElement.clientWidth != "undefined" &&
		document.documentElement.clientWidth != 0
	) {
		(viewportwidth = document.documentElement.clientWidth),
			(viewportheight = document.documentElement.clientHeight);
	} else {
		(viewportwidth = document.getElementsByTagName("body")[0].clientWidth),
			(viewportheight =
				document.getElementsByTagName("body")[0].clientHeight);
	}

	return { width: viewportwidth, height: viewportheight };
}

generateAds = async () => {
	var placedIds = {};

	var myInterval = setInterval(async function () {
		const newAFelements = document.getElementsByClassName("AFbrother");
		if (window.AFAdsScriptRerender) {
			window.AFAdsScriptRerender++;
		} else {
			window.AFAdsScriptRerender = 1;
		}

		if (newAFelements[0]) {
			if (window.AFDisplayed) {
				const deletedDisplayed = [...newAFelements];

				const newAd = [];
				for (let i = deletedDisplayed.length - 1; i >= 0; i--) {
					const displayAd = deletedDisplayed[i];
					const key = displayAd.getAttribute("data-creative-web-key");
					if (!window.AFDisplayed.includes(key)) {
						newAd.push(deletedDisplayed[i]);
					}
				}

				if (newAd.length) {
					await createAd(newAd);
				}
			} else {
				await createAd(newAFelements);
			}
		}
		if (window.AFAdsScriptRerender >= 2) {
			if (window.AFDisplayed.length === newAFelements.length) {
				clearInterval(myInterval);
			}
			adDelayTime = 1500;
		}

		if (window.AFAdsScriptRerender >= 7) {
			if (window.AFDisplayed.length === newAFelements.length) {
				clearInterval(myInterval);
			}
		}
		if (window.AFAdsScriptRerender >= 12) {
			clearInterval(myInterval);
		}
	}, adDelayTime);

	async function createAd(AFelements) {
		const webKey = AFelements[0].getAttribute("data-web-key");

		const adKeys = [];
		let isFirstDisplayed = false;
		for (let i = 0; i < AFelements.length; i++) {
			const adKey = AFelements[i].getAttribute("data-creative-web-key");

			if (window.AFDisplayed) {
				if (!window.AFDisplayed.includes(adKey)) {
					window.AFDisplayed.push(adKey);
				}
			} else {
				window.AFDisplayed = [adKey];
				isFirstDisplayed = true;
			}
			if (!adKeys.includes(adKey)) {
				adKeys.push(adKey);
			}
		}
		if (isFirstDisplayed) {
			window.AFFirstDisplayLength = window.AFDisplayed.length;
		}

		const headers = new Headers();
		headers.append("Access-Control-Allow-Origin", "*");
		headers.append("Content-Type", "application/json");
		headers.append("Pragma", "no-store, no-cache");
		headers.append("Cache-Control", "no-store, no-cache");

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
		const response = await fetch(renderAdsUrl, requestOptions);
		const resAdsData = await response.json();

		for (let i = 0; i < resAdsData.length; i++) {
			const adData = resAdsData[i];

			let adIndex = adData.adKey;
			let elementInViewport;
			let insElem;
			switch (adData.ad_format) {
				case "NATIVE":
					//ins
					insElem = document.querySelector(
						`ins[data-creative-web-key='${adData.adKey}']`
					);
					insElem.id = `tagIns${adIndex}`;

					if (adData.text_position === "IMAGE_ABOVE") {
						elementInViewport = RenderNativeVertical({
							insElem,
							nativeIndex: adIndex,
							adData,
							placedIds,
						});
					} else {
						elementInViewport = RenderNativeHorizontal({
							insElem,
							nativeIndex: adIndex,
							adData,
							placedIds,
						});
					}

					break;
				case "POP":
					RenderPop(adData.url);
					break;
				case "BANNER":
					insElem = document.querySelector(
						`ins[data-creative-web-key='${adData.adKey}']`
					);

					elementInViewport = insElem;
					insElem.id = `tagIns${adIndex}`;
					let adStyle = insElem.getAttribute("style");
					switch (adData.banner_format) {
						case "SLIDE":
							insElem.style =
								"display: block !important;z-index: 2147483647 !important";
							break;
						case "HEADER":
							insElem.style = `display: inline-block !important;width: ${window.innerWidth}px;z-index: 2147483647 !important`;
							break;
						default:
							insElem.style = `display: inline-block !important;z-index: 2147483647 !important`;
							break;
					}

					const divElem = document.createElement("div");
					divElem.id = `tagDiv${adIndex}`;
					divElem.style = "display: inline-block !important";
					switch (adData.banner_format) {
						case "STICKY":
							document.body.append(insElem);
							RenderSticky(divElem, adStyle, adIndex);
							break;
						case "HEADER":
							document.body.style =
								"margin-top: 0 !important;padding-top: 0 !important";
							document.body.prepend(insElem);
							RenderHeader(divElem, adIndex);
							break;
						case "SLIDE":
							const sticky_ads = resAdsData.filter(
								(ads) => ads.banner_format === "STICKY"
							);
							let sticky_ad = { height: 0 };
							if (sticky_ads.length) {
								sticky_ad = sticky_ads[0];
							}
							RenderSlide(sticky_ad, insElem, divElem, adIndex);
							break;
						case "IN_PAGE":
							document
								.getElementById(`tagIns${adIndex}`)
								.appendChild(divElem);
							adStyle = `display: inline-block !important;${adStyle}`;
							break;
					}
					generateBannerAdsDisplay(adIndex, adData, adStyle);
					placedIds[adData.adKey] = {
						insElem,
						creativeCampaign_Key: adData.key,
						creativeWebsite_Key: adData.adKey,
					};
					break;
			}

			var data = JSON.stringify({
				webKey,
				adKey: adData.key,
				adWebKey: adData.adKey,
			});

			adsData[adData.adKey] = data;

			if (
				adData.ad_format === "NATIVE" ||
				(adData.ad_format === "BANNER" &&
					adData.banner_format === "IN_PAGE")
			) {
				const inView = await isElementInViewport(elementInViewport);

				if (inView) {
					adsInView[insElem.getAttribute("id")] = new Date();
					await checkTimeOnScreen(impressionCreative, insElem);
				}
			} else if (adData.ad_format === "POP") {
				await impressionCreative(data, insElem);
			} else {
				setTimeout(async function () {
					await impressionCreative(data, insElem);
				}, 5000);
			}

			async function impressionCreative(body, insElem) {
				if (body) {
					await fetch(impressAdUrl, {
						...requestOptions,
						body,
					});
					window[`windowImEl${insElem.getAttribute("id")}`] = true;
					impressionCount += 1;
					return { success: true };
				}
			}

			window.addEventListener("scroll", async function () {
				for (var [key, value] of Object.entries(placedIds)) {
					var insElem = value.insElem;
					const windowImEl =
						window[`windowImEl${insElem.getAttribute("id")}`];

					const inViewTime = adsInView[insElem.getAttribute("id")];

					if (!windowImEl) {
						const isOnScreen = await isElementInViewport(insElem);
						if (isOnScreen) {
							if (!inViewTime) {
								adsInView[insElem.getAttribute("id")] =
									new Date();

								await checkTimeOnScreen(
									impressionCreative,
									insElem
								);
							}
						} else {
							if (inViewTime) {
								adsInView[insElem.getAttribute("id")] = null;
							}
						}
					}
				}
			});

			async function isElementInViewport(insElem) {
				// Special bonus for those using jQuery
				if (typeof jQuery === "function" && insElem instanceof jQuery) {
					insElem = insElem[0];
				}

				var rect = await insElem.getBoundingClientRect();
				const adHeight =
					window.innerHeight || document.documentElement.clientHeight;
				/* or $(window).height() */
				const adWidth =
					window.innerWidth || document.documentElement.clientWidth;
				/* or $(window).width() */
				const isInView =
					rect.top >= 0 &&
					rect.left >= 0 &&
					rect.bottom <= adHeight &&
					rect.right <= adWidth;

				return isInView;
			}
		}
		return "adsDisplayed";
	}
};

generateBannerAdsDisplay = (adIndex, adData, adStyle) => {
	// A
	const AElem = document.createElement("a");
	if (adData.banner_format === "STICKY") {
		AElem.style = `display: inline-block !important; ${adStyle};width: ${window.innerWidth}px`;
	} else {
		AElem.style = `display: inline-block !important; ${adStyle}`;
	}
	AElem.id = `tagA${adIndex}`;
	AElem.setAttribute("href", adData.href);
	AElem.target = "_blank";
	document.getElementById(`tagDiv${adIndex}`).appendChild(AElem);

	//image
	const DivAdElem = document.createElement("div");
	DivAdElem.id = `tagDivAd${adIndex}`;
	DivAdElem.style = `display: inline-block !important;position: relative !important;${adStyle};`;
	document.getElementById(`tagA${adIndex}`).appendChild(DivAdElem);
	const ImgElem = document.createElement("img");
	ImgElem.style = adStyle;
	ImgElem.src = adData.url;
	document.getElementById(`tagDivAd${adIndex}`).appendChild(ImgElem);

	//close ad
	const ImgClose = document.createElement("img");
	ImgClose.style =
		"cursor: pointer;position: absolute !important;top: 0 !important;left: 0 !important;margin-top: 2px !important;margin-left: 2px !important;width: 20px !important;height: 20px !important;background-color: white !important;opacity: 0.1 !important";
	ImgClose.src = closeImageUrl;

	ImgClose.onclick = function remove(event) {
		document.getElementById(`tagIns${adIndex}`).remove();
		event.preventDefault();
	};

	document.getElementById(`tagDivAd${adIndex}`).appendChild(ImgClose);
};

checkTimeOnScreen = (impressionCreative, insElem) => {
	setTimeout(async function () {
		const inTime = adsInView[insElem.getAttribute("id")];

		if (inTime) {
			const outTime = new Date();
			if (outTime - inTime > 5000) {
				await impressionCreative(
					adsData[insElem.getAttribute("data-creative-web-key")],
					insElem
				);
			}
		}
	}, 5100);
};

RenderSticky = (divElem, adStyle, adIndex) => {
	divElem.style = `display: block !important;bottom: 0px !important;margin: 0 !important;clear: none !important;float: none !important;padding: 0px !important;position: fixed !important;visibility: visible !important;z-index: 2147483647 !important;text-align: center !important;${adStyle}`;
	document.getElementById(`tagIns${adIndex}`).appendChild(divElem);
};

RenderHeader = (divElem, adIndex) => {
	divElem.style = `
	display: block !important;
	padding: 0 !important;
	width: 100% !important;
	float: none !important;
	left: 0px !important;
	margin: 0px !important;
	opacity: 1 !important;
	overflow: visible !important;
	text-align: center  !important`;
	document.getElementById(`tagIns${adIndex}`).appendChild(divElem);

	// document.body.insertBefore(divElem, document.body.firstChild);
	// document.body.appendChild(divElem);
};

RenderSlide = (sticky_ad, insElem, divElem, adIndex) => {
	const parentNode = insElem.parentNode;
	parentNode.style.position = "relative";
	divElem.style = `display: inline-block !important;margin: 0 !important;clear: none !important;position: fixed !important;bottom: ${sticky_ad.height}px !important;right:1px !important;padding: 0px !important;z-index: 2147483647 !important`;
	document.getElementById(`tagIns${adIndex}`).appendChild(divElem);
};

RenderPop = (url) => {
	var element = document.createElement("a");
	element.id = "popup_ads";
	element.setAttribute("href", url);
	window.open(element, "", `width=${screen.width} height=${screen.height}`);
};
RenderNativeVertical = ({ insElem, nativeIndex, adData, placedIds }) => {
	placedIds[adData.adKey] = {
		insElem,
		creativeCampaign_Key: adData.key,
		creativeWebsite_Key: adData.adKey,
	};

	adStyle = insElem.getAttribute("style");
	const sizesTypeText = adStyle.split(";");
	const NativeAdWidth = sizesTypeText[0].replace(/[^0-9]/g, "");
	const NativeAdHeight = sizesTypeText[1].replace(/[^0-9]/g, "");

	insElem.style = `${adStyle};text-decoration: none !important;display: inline-block !important;background-color: rgba(255, 255, 255, 0.5) !important;position: relative !important;`;

	//ins div
	const insDiv = document.createElement("div");
	insDiv.id = `insDiv${nativeIndex}`;
	insDiv.style = "position: relative !important";
	document.getElementById(`tagIns${nativeIndex}`).appendChild(insDiv);

	// native main div
	const MainNativeStyle = `-webkit-box-sizing: unset !important;box-sizing: unset !important;line-height: normal !important;padding: ${
		NativeAdHeight / 20
	}px ${NativeAdWidth / 20}px !important;width: ${
		NativeAdWidth - NativeAdWidth / 9.5
	}px !important;height: ${
		NativeAdHeight - NativeAdHeight / 9.5
	}px !important`;
	const AFNativeMainDiv = document.createElement("div");
	AFNativeMainDiv.id = `AFNativeMainDiv${nativeIndex}`;
	AFNativeMainDiv.style = MainNativeStyle;
	AFNativeMainDiv.setAttribute(
		"onmouseover",
		`onMouseOver("${nativeIndex}","${insElem.getAttribute("style")}")`
	);

	AFNativeMainDiv.setAttribute(
		"onmouseout",
		`onMouseOut("${nativeIndex}","${insElem.getAttribute("style")}")`
	);
	AFNativeMainDiv.setAttribute("onclick", `onClickAFAd("${adData.href}")`);
	document
		.getElementById(`insDiv${nativeIndex}`)
		.appendChild(AFNativeMainDiv);

	//image form
	const AFNativeImageForm = document.createElement("div");
	AFNativeImageForm.style = `background-color: #f1f0f559 !important;height: ${
		NativeAdHeight - NativeAdHeight / 2.6
	}px !important;width: 100% !important;position: relative !important`;
	AFNativeImageForm.id = `AFNativeImageForm${nativeIndex}`;
	document
		.getElementById(`AFNativeMainDiv${nativeIndex}`)
		.appendChild(AFNativeImageForm);

	//image
	const AFNativeImage = document.createElement("img");
	AFNativeImage.src = adData.url;
	AFNativeImage.alt = adData.url;
	AFNativeImage.style =
		"height: auto !important;width: auto !important;max-height: 100% !important;max-width: 100% !important;margin: auto !important;position: absolute !important;left: 0 !important;right: 0 !important;top: 0 !important;bottom: 0 !important";
	document
		.getElementById(`AFNativeImageForm${nativeIndex}`)
		.appendChild(AFNativeImage);

	//text
	const AFNativeText = document.createElement("div");
	AFNativeText.style = `font-family: serif !important;margin-top: ${
		NativeAdHeight / 30
	}px !important;padding: 0 ${NativeAdHeight / 28}px !important`;
	AFNativeText.id = `AFNativeText${nativeIndex}`;
	document
		.getElementById(`AFNativeMainDiv${nativeIndex}`)
		.appendChild(AFNativeText);

	//text title
	const AFNativeTitle = document.createElement("div");
	AFNativeTitle.style = `font-size: ${
		(NativeAdHeight / 19 + NativeAdWidth / 19) / 2
	}px  !important;font-weight: bold  !important;text-transform: capitalize !important; word-wrap: break-word !important;`;
	AFNativeTitle.id = `AFNativeTitle${nativeIndex}`;
	document
		.getElementById(`AFNativeText${nativeIndex}`)
		.appendChild(AFNativeTitle);
	if (adData.title.length > 25) {
		document.getElementById(
			`AFNativeTitle${nativeIndex}`
		).innerHTML = `${adData.title.substring(0, 25)}..`;
	} else {
		document.getElementById(`AFNativeTitle${nativeIndex}`).innerHTML =
			adData.title;
	}

	//text description
	const AFNativeDescription = document.createElement("div");
	AFNativeDescription.style = `font-size: ${
		(NativeAdHeight / 27.1428 + NativeAdWidth / 28.1428) / 2
	}px !important;text-transform: capitalize !important; word-wrap: break-word !important;`;
	AFNativeDescription.id = `AFNativeDescription${nativeIndex}`;
	document
		.getElementById(`AFNativeText${nativeIndex}`)
		.appendChild(AFNativeDescription);

	if (adData.description.length > 122) {
		document.getElementById(
			`AFNativeDescription${nativeIndex}`
		).innerHTML = `${adData.description.substring(0, 122)}..`;
	} else {
		document.getElementById(
			`AFNativeDescription${nativeIndex}`
		).innerHTML = `${adData.description}`;
	}

	const adButton = document.createElement("button");
	adButton.style = `	padding: ${2}% !important;
				font-size: ${(NativeAdHeight / 27.1428 + NativeAdWidth / 28.1428) / 2};
				position: absolute !important;
				bottom: 0 !important;
				right: 0 !important;
				margin-right: 0.5% !important;
				margin-bottom: 0.5% !important;
				align-items: center !important;
				font-family: serif !important;
				background-color: rgba(255, 255, 255, 0.4) !important;
				border: 1px solid rgb(175, 171, 171) !important;
				border-radius: 0.25rem !important;
				cursor: pointer !important`;
	adButton.setAttribute("onclick", `onClickAFAd("${adData.href}")`);

	adButton.innerHTML = "Visit Site";
	insElem.appendChild(adButton);

	//close ad
	const ImgClose = document.createElement("img");
	ImgClose.style =
		"cursor: pointer !important;position: absolute !important;top: 0 !important;left: 0 !important;margin-top: 2px !important;margin-left: 2px !important;width: 20px !important;height: 20px !important;background-color: white !important;opacity: 0.1 !important";
	ImgClose.src = closeImageUrl;

	ImgClose.onclick = function remove(event) {
		document.getElementById(`tagIns${nativeIndex}`).remove();
		event.preventDefault();
	};

	insElem.appendChild(ImgClose);

	onMouseOver = (index, style) => {
		document.getElementById(
			`tagIns${index}`
		).style = `${style};cursor: pointer !important;border: 1px solid #d5d4eb !important;box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,rgba(0, 0, 0, 0.09) 0px -3px 5px !important`;
	};

	onMouseOut = (index, style) => {
		document.getElementById(`tagIns${index}`).style = style;
	};
	onClickAFAd = (href) => {
		window.open(href);
	};

	return insElem;
};

RenderNativeHorizontal = ({ insElem, nativeIndex, adData, placedIds }) => {
	placedIds[adData.adKey] = {
		insElem,
		creativeCampaign_Key: adData.key,
		creativeWebsite_Key: adData.adKey,
	};

	adStyle = insElem.getAttribute("style");
	const sizesTypeText = adStyle.split(";");
	const NativeAdWidth = sizesTypeText[0].replace(/[^0-9]/g, "");
	const NativeAdHeight = sizesTypeText[1].replace(/[^0-9]/g, "");

	let width = +NativeAdWidth;
	let height = +NativeAdHeight;

	const adScale = width / height;

	insElem.style = `text-decoration: none !important;
			display: inline-block !important;
			position: relative !important;
			background-color: rgba(255, 255, 255, 0.5) !important;
			width: ${width}px !important;
			height: ${height}px !important;`;

	let dividerTitle = 6;
	let dividerDescription = 8;

	if (adData.text_position === "TEXT_ONLY") {
		dividerTitle = 6;
		dividerDescription = 7;
	}

	let MainNativeStyle = `width: ${width}px;height: ${height}px;text-align: center;`;
	let imageHeightScale = 0.95;
	if (adData.text_position === "TITLE_ABOVE") {
		MainNativeStyle = `width: ${width}px;height: ${
			height * 0.8
		}px;text-align: center;`;
		imageHeightScale = 0.75;
	}
	const mainAd = document.createElement("div");
	mainAd.id = `mainAd${nativeIndex}`;
	mainAd.style = MainNativeStyle;
	mainAd.setAttribute(
		"onmouseover",
		`onMouseOver("${nativeIndex}","${insElem.getAttribute("style")}")`
	);

	mainAd.setAttribute(
		"onmouseout",
		`onMouseOut("${nativeIndex}","${insElem.getAttribute("style")}")`
	);
	mainAd.setAttribute("onclick", `onClickAFAd("${adData.href}")`);
	insElem.appendChild(mainAd);

	let maxWidthImage = width - (width - height) + width * 0.1;
	let maxWidthText = width - height - width * 0.15;
	if (adScale < 3) {
		maxWidthImage = width / 2.25;
		maxWidthText = width / 2;
	}

	// ad image
	if (adData.text_position !== "TEXT_ONLY") {
		const imageParent = document.createElement("div");
		imageParent.style = `height: ${
			height * imageHeightScale
		}px !important;width: ${maxWidthImage}px !important;background-color: rgba(255, 255, 255, 0.3) !important;float: left;margin-left: 2%;margin-top: ${
			height * 0.02
		}px;`;
		mainAd.appendChild(imageParent);
		const image = document.createElement("img");
		image.style = `
		max-width: 100% !important;
		max-height: 100% !important;
		position: relative !important;
		top: 50% !important;
		transform: translateY(-50%) !important;`;
		// image.style = `
		// max-width: ${maxWidthImage}px !important;
		// max-height: ${height * imageHeightScale}px !important;`;
		image.src = adData.url;
		image.alt = "AFNativeAd";
		imageParent.appendChild(image);
	}

	if (adData.text_position === "TEXT_ONLY") {
		maxWidthText = width;
	}
	// ad data
	const adDataDiv = document.createElement("div");
	adDataDiv.style = `	width: ${maxWidthText}px !important;
	height: 100% !important;
	float: right !important;
	text-align: center !important;
	position: relative !important;`;
	mainAd.appendChild(adDataDiv);

	// ad text
	const adText = document.createElement("div");
	adText.style = `max-width: 95% !important;
	max-height: 100% !important;
	position: relative !important;
	top: 50% !important;
	transform: translateY(-50%) !important;
	text-align: left !important;`;
	adDataDiv.appendChild(adText);

	// ad text variable
	const textDivWidth = maxWidthText;
	const textDivHeight = height;
	const weight = textDivWidth + textDivHeight * adScale;
	const weightAvg = weight / (4 + adScale);

	// title
	const title = document.createElement("div");
	title.style = `font-weight: bold !important;
				text-transform: capitalize !important;
				font-family: serif !important;
				overflow-wrap: break-word !important;
				font-size: ${weightAvg / dividerTitle}px !important`;
	if (adData.title.length > 40) {
		title.innerHTML = `${adData.title.substring(0, 40)}..`;
	} else {
		title.innerHTML = adData.title;
	}
	if (adData.text_position === "TITLE_ABOVE") {
		title.style.marginLeft = "2%";
		insElem.prepend(title);
	} else {
		adText.appendChild(title);
	}

	// description
	const description = document.createElement("div");
	description.style = `font-size:${
		weightAvg / dividerDescription
	}px !important;
	text-transform: capitalize !important;
	font-family: serif !important;
	overflow-wrap: break-word !important;
	margin-top: ${height * 0.02}px !important;`;
	description.innerHTML = adData.description;

	adText.appendChild(description);

	// ad button
	const adButton = document.createElement("button");
	adButton.style = `padding: ${weightAvg / 40}px !important;
				font-size:${weightAvg / 15}px !important;
				position: absolute !important;
				bottom: 0 !important;
				right: 0 !important;
				margin-right: 0.5% !important;
				margin-bottom: 0.5% !important;
				align-items: center !important;
				font-family: serif !important;
				background-color: rgba(255, 255, 255, 0.4) !important;
				border: 1px solid rgb(175, 171, 171) !important;
				border-radius: 0.25rem !important;
				cursor: pointer !important`;
	adButton.setAttribute("onclick", `onClickAFAd("${adData.href}")`);

	adButton.innerHTML = "Visit Site";
	insElem.appendChild(adButton);

	//close ad
	const ImgClose = document.createElement("img");

	ImgClose.style = `cursor: pointer !important;position: absolute !important;top: 0 !important;right: 0 !important;margin-top: 2px !important;margin-left: 2px !important;width: 20px !important;height: 20px !important;background-color: white !important;opacity: 0.1 !important`;
	ImgClose.src = closeImageUrl;

	ImgClose.onclick = function remove(event) {
		document.getElementById(`tagIns${nativeIndex}`).remove();
		event.preventDefault();
	};

	insElem.appendChild(ImgClose);

	onMouseOver = (index, style) => {
		document.getElementById(
			`tagIns${index}`
		).style = `${style};cursor: pointer !important;border: 1px solid #d5d4eb !important;box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,rgba(0, 0, 0, 0.09) 0px -3px 5px !important`;
	};

	onMouseOut = (index, style) => {
		document.getElementById(`tagIns${index}`).style = style;
	};
	onClickAFAd = (href) => {
		window.open(href);
	};

	return insElem;
};

if (typeof window.AFAdsScript === "undefined") {
	window.AFAdsScript = true;

	// window.addEventListener("DOMContentLoaded", async function () {
	generateAds();
	// });
}
