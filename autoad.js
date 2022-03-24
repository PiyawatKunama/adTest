window.mobileCheck = function () {
	let check = false;
	(function (a) {
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				a
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				a.substr(0, 4)
			)
		)
			check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	return check;
};

(async function () {
	// all container elements
	var containerElements = [];
	// containers pass verification
	var passedContainerElements = [];
	// allowable depth number to search elements
	var allowDepth = 5;
	// prevent tags to be a container
	var invalidContainerTags = [
		"P",
		"A",
		"UL",
		"LI",
		"INPUT",
		"H1",
		"H2",
		"H3",
		"H4",
		"H5",
		"H6",
		"IFRAME",
		"SCRIPT",
	];
	// store container element width and height ratio
	var containerRatio = [];
	// store highest ration item of current container
	var highestRatioItem = null;
	// categorize container by ad format
	var containerByAdFormat = {};
	// store total passed ad format on each format
	var adTotals = {
		total: 0,
	};
	// store selected ad format from containerRatio
	var selectedAdFormat = [];
	// allowable of maximum ad format on single page
	var maxAdFormatOnSinglePage = 5;

	var selectedAdFormatCount = 0;
	var currentScript = document.currentScript;
	var placedIds = {};
	var adsInView = {};
	var containerId = 0;
	var renderAdsUrl = "http://localhost:3001/creatives/render_ads";
	var impressAdUrl = "http://localhost:3001/creatives/impression_ad";
	var closeImageUrl = "https://api.afbrother.com/api/serverImage/close.png";

	// ad formats to check available container
	let adFormats;
	if (window.mobileCheck()) {
		adFormats = [
			{
				width: 300,
				height: 250,
			},
			{
				width: 300,
				height: 100,
			},
		];
	} else {
		adFormats = [
			{
				width: 300,
				height: 250,
			},
			{
				width: 728,
				height: 90,
			},
			{
				width: 160,
				height: 600,
			},
			{
				width: 468,
				height: 60,
			},
			{
				width: 300,
				height: 600,
			},
		];
	}

	/*
        Get All Element Inside Body Tag And Scan Element
     */
	function getContainerElements() {
		var nodes = document.querySelectorAll("body > *");

		nodes.forEach((node) => {
			scanElementByDepth(node, 0);
		});
	}

	/*
        Scan Element By Depth
     */
	function scanElementByDepth(node, depth = 0) {
		var yPosition = {};
		var nodeRect = node.getBoundingClientRect();
		containerElements.push({
			node,
			depth,
		});

		depth += 1;

		if (depth > allowDepth) return;

		if (node.children.length) {
			for (var i = 0; i < node.children.length; i++) {
				var childNode = node.children[i];
				var clientRect = childNode.getBoundingClientRect();
				var computedStyle = window.getComputedStyle(childNode);
				// remove margin-top to prevent incorrect y position on the same level
				var yPositionMinusMarginTop =
					clientRect.y - parseInt(computedStyle.marginTop);

				if (!yPosition.hasOwnProperty(yPositionMinusMarginTop)) {
					yPosition[yPositionMinusMarginTop] = [];
				}

				yPosition[yPositionMinusMarginTop].push(childNode);
			}

			// Check element inside parent on the same y position
			for (const [key, value] of Object.entries(yPosition)) {
				var totalWidth = 0;

				if (value.length <= 2) {
					value.forEach((item) => {
						var clientRect = item.getBoundingClientRect();

						totalWidth += clientRect.width;
					});

					if (value.length > 1 && totalWidth / nodeRect.width < 0.9)
						return;
					if (value.length === 2 && depth > allowDepth / 2) return;

					value.forEach((item) => {
						scanElementByDepth(item, depth);
					});
				}
			}
		}
	}

	/*
        Check if element is suit to be a container
     */
	function checkContainer() {
		var container = null;

		for (const [key, value] of Object.entries(containerElements)) {
			container = value.node;

			var style = window.getComputedStyle(container);

			if (invalidContainerTags.includes(container.tagName)) continue;

			if (style.display !== "block" && style.display !== "inline-block")
				continue;
			if (style.position !== "relative" && style.position !== "static")
				continue;

			passedContainerElements.push(container);
		}
	}

	function getContainerByAdFormat() {
		passedContainerElements.forEach((container) => {
			var clientRect = container.getBoundingClientRect();

			adFormats.map((adFormat) => {
				var heightRatio = adFormat.height / clientRect.height;
				var widthRatio = adFormat.width / clientRect.width;

				if (
					clientRect.width > adFormat.width &&
					clientRect.height > adFormat.height
				) {
					if (adFormat.width > adFormat.height) {
						containerRatio.push({
							el: container,
							w: adFormat.width,
							h: adFormat.height,
							ratio: widthRatio,
						});
					} else {
						containerRatio.push({
							el: container,
							w: adFormat.width,
							h: adFormat.height,
							ratio: heightRatio + widthRatio,
						});
					}
				}
			});

			highestRatioItem = containerRatio[0];

			containerRatio.map((item) => {
				if (item.h >= item.w) {
					var clientRect = item.el.getBoundingClientRect();

					// Width of item is more than 75% of container
					if (!(item.w / clientRect.width < 0.75)) {
						if (item.ratio > highestRatioItem.ratio) {
							highestRatioItem = item;
						}
					}
				} else {
					if (item.ratio > highestRatioItem.ratio) {
						highestRatioItem = item;
					}
				}
			});

			if (highestRatioItem) {
				var formatKey = highestRatioItem.w + "x" + highestRatioItem.h;

				if (!containerByAdFormat.hasOwnProperty(formatKey)) {
					containerByAdFormat[formatKey] = [];
				}

				containerByAdFormat[formatKey].push(highestRatioItem);

				highestRatioItem = null;
			}

			containerRatio = [];
		});
	}

	function countPassedAdFormat() {
		for (const [key, value] of Object.entries(containerByAdFormat)) {
			adTotals.total += value.length;

			if (!adTotals.hasOwnProperty(key)) {
				adTotals[key] = value.length;
			}
		}
	}

	function selectContainerByAdFormat() {
		for (const [key, value] of Object.entries(containerByAdFormat)) {
			selectBestPositionForAdFormat(value, key);
		}
	}

	function selectBestPositionForAdFormat(adFormats, key) {
		var pickedCount = Math.floor(
			(adTotals[key] / adTotals.total) * maxAdFormatOnSinglePage
		);
		pickedCount = pickedCount === 0 ? 1 : pickedCount;

		adFormats.forEach((adFormat) => {
			if (pickedCount === 0) return;

			// Loop through previous selected Ad Format
			for (var i = 0; i < selectedAdFormatCount; i++) {
				if (selectedAdFormat[i]) {
					var previousSelected = selectedAdFormat[i];
					var previousRect =
						previousSelected.el.getBoundingClientRect();
					var currentRect = adFormat.el.getBoundingClientRect();

					if (previousRect.top === 0) {
						if (currentRect.top === 0) return;

						if (previousSelected.h / currentRect.top > 0.8) {
							return;
						}
					}

					if (adFormat.w > adFormat.h) {
						if (
							Math.abs(currentRect.top - previousRect.top) < 150
						) {
							return;
						}
					}
				}
			}

			if (pickedCount !== 0) {
				selectedAdFormat.push(adFormat);
			}

			pickedCount--;
			selectedAdFormatCount++;
		});
	}

	async function placeAd(slot, creative) {
		var slotRect = slot.el.getBoundingClientRect();
		var absEls = getAbsoluteElements();

		// Check if position absolute elements show over ad container
		for (var i = 0; i < absEls.length; i++) {
			var clientRect = absEls[i].getBoundingClientRect();
			var styled = window.getComputedStyle(absEls[i]);

			var slotXStart = slotRect.x;
			var slotXEnd = slotXStart + slot.w;
			var slotYStart = slotRect.y;
			var slotYEnd = slotYStart + slot.h;
			var absXStart = clientRect.x;
			var absXEnd = absXStart + clientRect.width;
			var absYStart = clientRect.y;
			var absYEnd = absYStart + clientRect.height;

			// 1.absolute element อยู่ใน slot element ทั้งหมด ทั้งแกน x, y
			var cond1 =
				absXStart >= slotXStart &&
				absXEnd <= slotXEnd &&
				absYStart >= slotYStart &&
				absYEnd <= slotYEnd;

			// 2.absolute element อยู่ใน slot element แกน x แต่แกน y เกินออกไป
			var cond2 =
				absXStart >= slotXStart &&
				absXEnd <= slotXEnd &&
				slotYStart >= absYStart &&
				slotYEnd <= absYEnd;

			// 3.absolute element อยู่ใน slot element แกน y แต่แกน x เกินออกไป
			var cond3 =
				absYStart >= slotYStart &&
				absYEnd <= slotYEnd &&
				slotXStart >= absXStart &&
				slotXEnd <= absXEnd;

			// 4.slot element อยู่ใน absolute element
			var cond4 =
				slotXStart >= absXStart &&
				slotXEnd <= absXEnd &&
				slotYStart >= absYStart &&
				slotYEnd <= absYEnd;

			if (cond1 || cond2 || cond3 || cond4) {
				return;
			}
		}

		var adId =
			"af_brother_ads_iframe_/" + Math.floor(Math.random() * 1000000);
		var adContainer = document.createElement("div");
		adContainer.style.height = "auto";
		adContainer.setAttribute("data-ad-impressed", "0");

		var iFrmContainer = document.createElement("div");
		iFrmContainer.id = adId + "/container";
		iFrmContainer.style.margin = "0 auto";
		iFrmContainer.style.height = "auto";
		iFrmContainer.style.width = slot.w + "px";
		iFrmContainer.setAttribute("data-af-brother-ad-key", creative.key);

		var advertiseText = document.createElement("p");
		advertiseText.innerText = "ADVERTISEMENT";
		advertiseText.style.textAlign = "center";
		advertiseText.style.marginBottom = "0";

		var iFrm = document.createElement("iframe");
		iFrm.id = adId;
		iFrm.width = slot.w;
		iFrm.height = slot.h;
		iFrm.style.marginTop = "0";
		iFrm.style.marginBottom = "0";
		iFrm.style.marginRight = "auto";
		iFrm.style.marginLeft = "auto";
		iFrm.style.overflow = "hidden";
		iFrm.style.display = "block";
		iFrm.setAttribute("scrolling", "no");
		iFrm.setAttribute("data-af-brother-ad-key", creative.key);
		iFrm.setAttribute(
			"data-af-brother-container-id",
			containerId.toString()
		);
		iFrm.style.border = "none";

		containerId += 1;

		var adImage = new Image();
		adImage.src = creative.url;
		adImage.height = creative.height;
		adImage.width = creative.width;

		iFrmContainer.append(advertiseText);
		iFrmContainer.append(iFrm);
		adContainer.append(iFrmContainer);

		slot.el.prepend(adContainer);

		var aTag = document.createElement("a");
		aTag.href = creative.href;
		aTag.id = `aTag${adId}`;
		aTag.target = "_blank";
		aTag.append(adImage);

		var iFrmDoc = document.getElementById(adId);
		iFrmDoc.contentDocument.body.append(aTag);
		iFrmDoc.contentDocument.body.style.margin = "0";

		//close ad
		var imgClose = document.createElement("img");
		imgClose.style =
			"cursor: pointer;position: absolute !important;top: 0 !important;left: 0 !important;margin-top: 2px !important;margin-left: 2px !important;width: 20px !important;height: 20px !important;background-color: white !important;opacity: 0.1 !important";
		imgClose.src = closeImageUrl;

		imgClose.onclick = function remove(event) {
			var iFrmDoc = document.getElementById(`${adId}/container`);
			iFrmDoc.remove();
		};

		iFrmDoc.contentDocument.body.append(imgClose);

		placedIds[adId] = {
			el: iFrm,
		};

		if (await isElementInViewport(iFrm)) {
			var data = JSON.stringify({
				webKey: getClientKey("webKey"),
				adKey: creative.key,
				containerId: containerId,
				adWebKey: getClientKey("websiteCreativeKey"),
			});

			adsInView[
				`${creative.key}${iFrm.getAttribute(
					"data-af-brother-container-id"
				)}`
			] = new Date();

			await checkTimeOnScreen(data, iFrm);
		}
	}

	function getAbsoluteElements() {
		return [...document.querySelectorAll("*")]
			.filter(
				(n) =>
					["static", "relative"].indexOf(
						n.computedStyleMap().get("position").value
					) === -1
			)
			.map((n) => n);
	}

	async function init() {
		containerElements = [];
		passedContainerElements = [];
		containerByAdFormat = {};

		getContainerElements();
		checkContainer();
		getContainerByAdFormat();
		countPassedAdFormat();
		selectContainerByAdFormat();

		var countSelectedAd = selectedAdFormat.filter((item) => {
			return item;
		}).length;

		if (countSelectedAd <= 1 && allowDepth <= 10) {
			allowDepth += 1;
			await init();
		} else {
			var adQueryData = [];
			var adResults;

			selectedAdFormat.forEach((format) => {
				adQueryData.push({
					width: format.w,
					height: format.h,
				});
			});

			if (selectedAdFormat.length > 0) {
				adResults = await fetchCreatives(
					JSON.stringify({
						webKey: getClientKey("webKey"),
						adSizes: adQueryData,
					})
				);

				renderAds(adResults, selectedAdFormat, 0);
			} else {
				console.log("dont have selected Ad");
			}
		}
	}

	function getClientKey(param) {
		var src = currentScript.src;
		if (param === "webKey") {
			return getParameterByName("client", src);
		} else if (param === "websiteCreativeKey") {
			return getParameterByName("websiteCreative", src);
		}
	}

	function getParameterByName(name, url = "") {
		name = name.replace(/[\[\]]/g, "\\$&");

		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return "";
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	function renderAds(adResults, slots, placeCount = 0) {
		if (placeCount === adResults.length) return;

		adResults.forEach((result) => {
			slots.forEach((slot, index) => {
				if (result.height === slot.h && result.width === slot.w) {
					placeAd(slot, result);
					placeCount += 1;
					selectedAdFormat.splice(index, 1);
				}
			});
		});

		renderAds(adResults, slots, placeCount);
	}

	async function isElementInViewport(el) {
		// Special bonus for those using jQuery
		if (typeof jQuery === "function" && el instanceof jQuery) {
			el = el[0];
		}
		var rect = await el.getBoundingClientRect();

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

	async function fetchCreatives(data) {
		const rawResponse = await fetch(renderAdsUrl, {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Pragma: "no-store, no-cache",
			},
			body: data,
		});

		return await rawResponse.json();
	}

	async function impressedCreative(data) {
		const rawResponse = await fetch(impressAdUrl, {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Pragma: "no-store, no-cache",
			},
			body: data,
		});

		return await rawResponse.json();
	}

	document.addEventListener("readystatechange", function (event) {
		if (event.target.readyState === "complete") {
			init();

			document.addEventListener("scroll", async function () {
				for (var [key] of Object.entries(placedIds)) {
					var el = document.getElementById(key);

					var adKey = el.getAttribute("data-af-brother-ad-key");
					var containerId = el.getAttribute(
						"data-af-brother-container-id"
					);

					const windowImEl =
						window[
							`windowImEl${adKey}${el.getAttribute(
								"data-af-brother-container-id"
							)}`
						];

					const inViewTime =
						adsInView[
							`${adKey}${el.getAttribute(
								"data-af-brother-container-id"
							)}`
						];

					if (!windowImEl) {
						const isOnScreen = await isElementInViewport(el);
						if (isOnScreen) {
							if (!inViewTime) {
								adsInView[
									`${adKey}${el.getAttribute(
										"data-af-brother-container-id"
									)}`
								] = new Date();

								var data = JSON.stringify({
									webKey: getClientKey("webKey"),
									adKey: adKey,
									containerId: containerId,
									adWebKey:
										getClientKey("websiteCreativeKey"),
								});

								await checkTimeOnScreen(data, el);
							}
						} else {
							if (inViewTime) {
								adsInView[
									`${adKey}${el.getAttribute(
										"data-af-brother-container-id"
									)}`
								] = null;
							}
						}
					}
				}
			});
		}
	});

	checkTimeOnScreen = async (data, el) => {
		var adKey = el.getAttribute("data-af-brother-ad-key");
		setTimeout(async function () {
			const inTime =
				adsInView[
					`${adKey}${el.getAttribute("data-af-brother-container-id")}`
				];
			const windowIm =
				window[
					`windowImEl${adKey}${el.getAttribute(
						"data-af-brother-container-id"
					)}`
				];

			if (inTime && !windowIm) {
				const outTime = new Date();
				if (outTime - inTime > 5000) {
					window[
						`windowImEl${adKey}${el.getAttribute(
							"data-af-brother-container-id"
						)}`
					] = true;
					await impressedCreative(data);
				}
			}
		}, 5100);
	};
})();
