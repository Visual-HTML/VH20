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



VH20.Initialize = function() {};



VH20.Initialize();


