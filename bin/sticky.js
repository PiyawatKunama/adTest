function randomString(length, chars) {
	var result = "";
	for (var i = length; i > 0; --i)
		result += chars[Math.round(Math.random() * (chars.length - 1))];
	return result;
}
var coinzilla_id_session =
	randomString(1, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") +
	randomString(
		32,
		"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	);
var coinzilla_sticky = (function () {
	var coinzilla_sticky = {
		push: function (_coinzilla_sticky_id_) {
			var args = {};
			if (_coinzilla_sticky_id_[0] === undefined) {
				_coinzilla_sticky_id_[0] = null;
				return;
			}
			args["z"] = _coinzilla_sticky_id_[0];
			args["height"] = 50;

			if (!util.isCookieEnabled()) return;
			if (util.getCookie("_coinzilla_sticky_id_disabled_")) return;
			var size = "STICKY";
			if (mobile.true) {
				size = "STICKYMOBILE";
			}
			var nounce = Math.floor(Math.random() * 1000000000000);
			var urlCheck =
				"https://request-global.czilladx.com/serve/sticky.php?withoutAdCode=1&size=" +
				size +
				"&z=" +
				args["z"] +
				"&n=" +
				nounce;
			var xhr = new XMLHttpRequest();
			xhr.open("GET", urlCheck);
			xhr.withCredentials = true;
			xhr.onload = function () {
				if (xhr.status === 200) {
					var response = xhr.responseText;
					var css =
							"@-webkit-keyframes show { from { transform:translateY(100%); } to { transform:translateY(0%); } }@-moz-keyframes show { from { transform:translateY(100%); } to { transform:translateY(0%); } }@keyframes show { from { transform:translateY(100%); } to { transform:translateY(0%); } }" +
							" #InfoCoinzillaSticky:hover > #coinzilla-abc { display:inline-block !important; } #CloseCoinzillaSticky:hover > #coinzilla-close-text { display:inline-block !important; }",
						head =
							document.head ||
							document.getElementsByTagName("head")[0],
						style = document.createElement("style");
					style.type = "text/css";
					if (style.styleSheet) {
						style.styleSheet.cssText = css;
					} else {
						style.appendChild(document.createTextNode(css));
					}
					head.appendChild(style);

					var elem = document.createElement("div");
					elem.id = coinzilla_id_session;
					elem.className = "coinzilla-sticky";
					if (mobile.true) {
						elem.style =
							"left:0;bottom:-2px;width: 100%;height: 75px; position: fixed; z-index: 999999998!important;transform: translateY(100%);";
					} else {
						elem.style =
							"left:0;bottom:-2px;width: 100%;height: 50px; position: fixed; z-index: 999999998!important;transform: translateY(100%);";
					}
					document.body.appendChild(elem);

					elem = document.createElement("a");
					elem.id = "CloseCoinzillaSticky";
					elem.setAttribute("href", "#");
					if (mobile.true) {
						elem.innerHTML =
							'<img src="https://coinzillatag.com/lib/img/close.png" style="width: 24px">';
						elem.style =
							"top:-29px;left: 0;padding: 2px;line-height:0;text-decoration: none;background-color: rgba(255, 255, 255, 1);position: absolute;z-index: 999999 !important;";
					} else {
						elem.innerHTML =
							'<img src="https://coinzillatag.com/lib/img/close.png" style="width: 14px">';
						elem.style =
							"left: 0;padding: 2px;line-height:0;text-decoration: none;background-color: rgba(255, 255, 255, 1);position: absolute;z-index: 999999 !important;";
					}
					document
						.getElementById(coinzilla_id_session)
						.appendChild(elem);

					args["url"] = response;
					if (util.isEmptyString(response)) return;
					load[args["z"]] = function (args) {
						return new this(args);
					};
					load[args["z"]](args);
				}
			};
			xhr.send();
		},
	};
	var fullAgent = navigator.userAgent,
		userAgent = navigator.userAgent.toLowerCase(),
		mobile = {
			true: /iphone|ipad|android|ucbrowser|iemobile|ipod|blackberry|bada/.test(
				userAgent
			),
		},
		util = {
			bind: function (fn, action, target) {
				if (target.addEventListener) {
					target.addEventListener(action, fn);
				} else if (target.attachEvent) {
					target.attachEvent("on" + action, fn);
				}
			},
			getCookie: function (name) {
				var cookieMatch = document.cookie.match(
					new RegExp(name + "=([^;]+)")
				);
				if (cookieMatch) {
					return decodeURIComponent(cookieMatch[1]);
				} else return null;
			},
			setCookie: function (name, value, minutes, path) {
				if (minutes === null || typeof minutes == "undefined") {
					minutes = null;
				} else {
					var date;
					if (typeof minutes == "number") {
						date = new Date();
						date.setTime(date.getTime() + minutes * 60 * 1e3);
					} else {
						date = minutes;
					}
					minutes = "; expires=" + date.toUTCString();
				}
				document.cookie =
					name +
					"=" +
					encodeURIComponent(value) +
					minutes +
					"; path=" +
					(path || "/");
			},
			isCookieEnabled: function () {
				return navigator.cookieEnabled;
			},
			isEmptyString: function (string) {
				return (
					typeof string == "undefined" ||
					string == null ||
					string == false || //same as: !x
					string.length == 0 ||
					string == "" ||
					string.replace(/\s/g, "") == "" ||
					!/[^\s]/.test(string) ||
					/^\s*$/.test(string)
				);
			},
		},
		load = function (needle) {
			this.construct(needle);
		};
	load.prototype = {
		construct: function (needle) {
			this.data = needle;
			var zoneId = this.data["z"];
			var height = this.data["height"];

			var src = this.data["url"];
			var ifrm = document.createElement("iframe");
			ifrm.setAttribute("src", src);
			ifrm.setAttribute("scrolling", "no");
			if (mobile.true) {
				ifrm.style.cssText =
					"margin:0 auto; min-height: 50px;width: 100%;max-width: 100%;max-height: 75px;height: 75px;";
			} else {
				ifrm.style.cssText =
					"margin:0 auto; min-height: 50px;width: 100%;max-width: 100%;max-height: " +
					height +
					"px;height: " +
					height +
					"px;";
			}
			ifrm.frameBorder = 0;
			ifrm.setAttribute("allowtransparency", "true");
			ifrm.setAttribute(
				"sandbox",
				"allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
			);
			ifrm.id = "zone-" + zoneId;
			document.getElementById(coinzilla_id_session).appendChild(ifrm);

			setTimeout(function () {
				document.getElementById(coinzilla_id_session).style.animation =
					"show 0.5s linear";
				document.getElementById(
					coinzilla_id_session
				).style.animationFillMode = "forwards";
			}, 2000);

			util.bind(
				function (e) {
					e.preventDefault();
					var div = document.getElementById(coinzilla_id_session);
					div.remove(div.selectedIndex);
					util.setCookie(
						"_coinzilla_sticky_id_disabled_",
						"true",
						5,
						"/"
					);
				},
				"click",
				document.getElementById("CloseCoinzillaSticky")
			);
		},
	};
	if (typeof window.coinzilla_sticky !== "undefined") {
		for (var i = 0; i < window.coinzilla_sticky.length; i++) {
			coinzilla_sticky.push(window.coinzilla_sticky[i]);
		}
	}
	return coinzilla_sticky;
})();
