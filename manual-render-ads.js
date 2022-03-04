window.addEventListener("DOMContentLoaded", function () {
	alert(12);
});

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
		"https://api.skuberg.xyz/creatives/render_ads",
		requestOptions
	);
	const adsData = await response.json();
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

				document.getElementById(`tagIns${i}`).appendChild(divElem);
			} else if (adsData[i].banner_format === "HEADER") {
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
			} else if (adsData[i].banner_format === "SLIDE") {
				const sticky_ads = adsData.filter(
					(ads) => ads.banner_format === "STICKY"
				);
				const sticky_height = sticky_ads.map(
					(sticky_ads) => sticky_ads.height
				);
				const parentNode = insElem.parentNode;
				parentNode.style.position = "relative";
				divElem.style = `display:inline-block;margin: 0 !important;clear: none !important;position: fixed;bottom: ${
					sticky_height.length ? Math.max(...sticky_height) : 1
				}px !important;right:1px;padding: 0px !important;z-index: 999999999 !important;`;
				document.getElementById(`tagIns${i}`).appendChild(divElem);
			} else {
				document.getElementById(`tagIns${i}`).appendChild(divElem);
				adStyle = `display: inline-block;${adStyle}`;
			}
		} else {
			document.getElementById(`tagIns${i}`).appendChild(divElem);
			adStyle = `display: inline-block;${adStyle}`;
		}
		if (adsData[i].ad_format === "NATIVE") {
			// const box = document.createElement('div');
			// box.style = `
			//     background-color: rgba(0,0,0, 0.8);
			//     width: ${adsData[i].width}px;
			//     height: ${adsData[i].height / 3}px;
			//     color: white;
			//     transform: translate(0%, -100%);
			//     z-index: 999999;
			// `;
			// divElem.style = `
			//     display:flex;
			//     flex-direction: column-reverse;
			//     // height: 100%;
			//     background-size: cover;
			// `;
			// const header = document.createElement('h1');
			// header.style = 'margin: 0;padding: 15px 20px;font-size: 20px';
			// header.innerHTML = adsData[i].type;
			// const message = document.createElement('p');
			// message.style = 'margin: 0;padding: 0 15px;font-size: 18px';
			// message.innerHTML =
			//     adsData[i].url.length >= 80
			//         ? adsData[i].url.slice(0, 30) + '...'
			//         : adsData[i].url;
			// box.appendChild(header);
			// box.appendChild(message);
			// divElem.appendChild(box);
			document.getElementById(`tagIns${i}`).appendChild(divElem);
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
		DivAdElem.style = `display: inline-block; position: relative; ${adStyle}`;
		// console.log(`display: inline-block; position: relative; ${adStyle}`);

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
		placedIds[adsData[i].adKey] = {
			div_id: divElem.id,
			creativeCampaign_Key: adsData[i].key,
			creativeWebsite_Key: adsData[i].adKey,
			impressed: 0,
		};

		var data = JSON.stringify({
			webKey: webKey,
			adKey: adsData[i].key,
			adWebKey: adsData[i].adKey,
		});
		if (isElementInViewport(divElem)) {
			await impressedCreative(data);
		}
	}

	async function impressedCreative(data) {
		await fetch("https://api.skuberg.xyz/creatives/impression_ad", {
			...requestOptions,
			body: data,
		});
		return { success: true };
	}

	window.addEventListener("scroll", async function () {
		for (var [key, value] of Object.entries(placedIds)) {
			if (!value.impressed) {
				var el = document.getElementById(value.div_id);
				var webKey = el.getAttribute("data-web-key");

				var data = JSON.stringify({
					webKey: webKey,
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

if (typeof window.AFAdsScript === "undefined") {
	window.AFAdsScript = true;
	window.addEventListener("DOMContentLoaded", function () {
		generateAds();
	});
	// generateAds();
}
