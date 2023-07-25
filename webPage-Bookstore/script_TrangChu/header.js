/*global document*/
//header_navbar-bell 	header-top_navbar-item-bell
var img=document.getElementById("header-top_navbar-item-bell");
//var link_img=document.getElementsByClassName("header-top_navbar-item");
var normal_bell='picture-TrangChu/bell.png';
var replace_bell='picture-TrangChu/bell_onmouseover.png';
	img.onmouseover=function() {
		img.src=replace_bell;
	}
	img.onmouseout=function(){
		img.src=normal_bell;
	}
	