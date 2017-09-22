VH20 = {};

VH20.Script.Import = function(key) {};
VH20.Script.Reference = function(url) {};
VH20.Script.Unload = function(url) {};
VH20.Browser = {};
VH20.Browser.Class = "default";
VH20.BrowserClass = function() {
	if ((navigator.appName == "Microsoft Internet Explorer") && (navigator.userAgent.indexOf("MSIE 8.0") > -1)) {
		VH20.Browser.Class = "MSIE8"; } 	
	else if ((navigator.appName == "Microsoft Internet Explorer") && (navigator.userAgent.indexOf("MSIE 10") > -1)) {
		VH20.Browser.Class = "MSIE10"; } 
	else if ((navigator.appName == "Microsoft Internet Explorer") && (navigator.userAgent.indexOf("MSIE 11") > -1)) {
		VH20.Browser.Class = "MSIE11"; }
	else if (((navigator.appName == "Opera") && (navigator.userAgent.indexOf("Opera") > -1)) 
		|| ((navigator.appName == "Netscape") && (navigator.userAgent.indexOf("OPR") > -1))) {
		VH20.Browser.Class = "Opera"; } 
	else if ((navigator.appName == "Netscape") && (navigator.userAgent.indexOf("Safari") > -1) 
		 && (navigator.userAgent.indexOf("OPR") == -1) && (navigator.userAgent.indexOf("Chrome") == -1)) {
		VH20.Browser.Class = "Netscape"; } 
	else if ((navigator.appName == "Netscape") && (navigator.userAgent.indexOf("Firefox") > -1) 
		 && (navigator.userAgent.indexOf("OPR") == -1) && (navigator.userAgent.indexOf("Chrome") == -1)) {
		VH20.Browser.Class = "Firefox"; } 
	else if ((navigator.appName == "Netscape") && (navigator.userAgent.indexOf("Safari") > -1) 
		 && (navigator.userAgent.indexOf("Chrome") > -1)) {
		VH20.Browser.Class = "Chrome"; }
	
 return VH20.Browser.Class;
	
};
VH20.BrowserClass();

VH20.InitializeEvent = function() {};

// load VH20' browser specific code
if (VH20.Browser.Class === "MSIE8") {
	VH20.IncludeDynamicScriptAfter("https://visual-html.github.io/V-HTML/VH20-MSIE8.js",
		document.getElementsByTagName("head")[0].querySelector('script[src*="VH20.js"]')); } 
else if (VH20.Browser.Class === "MSIE10") {
	VH20.IncludeDynamicScriptAfter("https://visual-html.github.io/V-HTML/VH20-MSIE10.js",
		document.getElementsByTagName("head")[0].querySelector('script[src*="VH20.js"]')); } 
else if (VH20.Browser.Class === "MSIE11") {
 	VH20.IncludeDynamicScriptAfter("https://visual-html.github.io/V-HTML/VH20-MSIE11.js",
	 	document.getElementsByTagName("head")[0].querySelector('script[src*="VH20.js"]')); }
else if (VH20.Browser.Class === "Opera") {
 	VH20.IncludeDynamicScriptAfter("https://visual-html.github.io/V-HTML/VH20-Opera.js",
	 	document.getElementsByTagName("head")[0].querySelector('script[src*="VH20.js"]')); }
else if (VH20.Browser.Class === "Netscape") {
	 VH20.IncludeDynamicScript("https://visual-html.github.io/V-HTML/VH20-Netscape.js",
	 	document.getElementsByTagName("head")[0].querySelector('script[src*="VH20.js"]')); }
else if (VH20.Browser.Class === "Firefox") {
 	VH20.IncludeDynamicScriptAfter("https://visual-html.github.io/V-HTML/VH20-Firefox.js",
		document.getElementsByTagName("head")[0].querySelector('script[src*="VH20.js"]')); }
else if (VH20.Browser.Class === "Chrome") {
	VH20.IncludeDynamicScriptAfter("https://visual-html.github.io/V-HTML/VH20-Chrome.js",
		document.getElementsByTagName("head")[0].querySelector('script[src*="VH20.js"]'));
}


VH20.InitializeEvent();


