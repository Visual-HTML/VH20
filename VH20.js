

VH20 = {};

VH20.LoadDesignerScript = function() {

	if (VH20.DesignerUrl == null || VH20.DesignerUrl.replace(/\s/g,"") == "" ) return;
	
	var xReq = new XMLHttpRequest();
	xReq.open("GET", VH20.DesignerUrl, false);
	xReq.send(null);
	var  _element = document.createElement("html");
	_element.innerHTML = xReq.response;
	this._TmpElt = _element;
	var _scr = _element.getElementsByTagName("script")[0];
	var _elt2 = document.createElement("script");
	_elt2.setAttribute("data-VH20-dsgk","");
	_elt2.innerHTML =  _scr.childNodes[0].textContent;
	VH20.document.getHead().appendChild(_elt2);
	
};
VH20.AddResource = function(url) {
	
	 var xReq = new XMLHttpRequest();
	 xReq.open("GET", url, false);
	 xReq.send(null);
	 var  _element = document.createElement("html");
	_element.innerHTML = xReq.response;
	var _scr = _element.getElementsByTagName("script")[0];
	var _elt2 = document.createElement("script");
	_elt2.setAttribute("data-VH20-Res", url);
	_elt2.innerHTML =  _scr.childNodes[0].textContent;
	 VH20.document.getHead().appendChild(_elt2);

};
VH20.IncludeDynamicScript = function(url) {
	
	var _elt2 = document.createElement("script");
	_elt2.setAttribute("data-VH20-Res", "");
	_elt2.src =  url;
	 VH20.document.getHead().appendChild(_elt2);
};
VH20.IncludeDynamicScriptAfter = function(url, elt) {
	
	var _elt = document.createElement("script");
	_elt.setAttribute("data-VH20-Res", "");
	_elt.src =  url;
	elt.parentNode.insertBefore(_elt, elt.nextSibling);
};
VH20.RemoveResource = function(url) {
	
	var _elt2 = document.querySelector("script[data-VH20-Res='"+url+"']");
	 VH20.document.getHead().removeChild(_elt2);

};
VH20.RemoveDynamicScript = function(url) {

	var _elt2 = document.querySelector("script[src='"+url+"']");
	 VH20.document.getHead().removeChild(_elt2);
	 
};
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
	else if ((navigator.appName == "Netscape") && (navigator.userAgent.indexOf("Safari") > -1) && (navigator.userAgent.indexOf("OPR") == -1) && (navigator.userAgent.indexOf("Chrome") == -1)) {
		VH20.Browser.Class = "Netscape"; } 
	else if ((navigator.appName == "Netscape") && (navigator.userAgent.indexOf("Firefox") > -1) && (navigator.userAgent.indexOf("OPR") == -1) && (navigator.userAgent.indexOf("Chrome") == -1)) {
		VH20.Browser.Class = "Firefox"; } 
	else if ((navigator.appName == "Netscape") && (navigator.userAgent.indexOf("Safari") > -1) && (navigator.userAgent.indexOf("Chrome") > -1)) {
		VH20.Browser.Class = "Chrome"; }
	
 return VH20.Browser.Class;
	
};
VH20.BrowserClass();

/* when page is loaded, start initialization process: set user-agent specific code */
VH20.InitializeEvent = function() {
	
   try {
	   window.addEventListener('load', function() { VH20.Initialize(); } , false); 
   } catch(xcp) {
	   window.attachEvent('onload', function() { VH20.Initialize(); } );
   };
	
}

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


