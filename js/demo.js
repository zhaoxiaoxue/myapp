
var cur=plus.webview.currentWebview();
var url=cur.url;
var header=plus.webview.create("_www/local/_con_header.html","",{height:'44px'})
header.onloaded=function(){
	cur.append(header);
	cur.show("slide-in-left");
	
}

var body=plus.webview.create(url,"con_con",{top:"44px"});
	body.onloading=function(){
}
	body.onloaded=function(){
		cur.append(body);
}