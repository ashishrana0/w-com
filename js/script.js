//js for side navogation
function openNav() {
  document.getElementById("mySidenav").style.width = "40%";
  document.getElementById("mySidenav").style.textAlign = "left";
  document.getElementById("mySidenav").style.color = "#fff";
  document.getElementById("mySidenav").style.display = "block";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//login js
function lab(){
var label = document.getElementById("m-label");
	label.style.top = "-20";
	label.style.fontSize = "12px";
	label.style.transition = "all .3s ease-in-out";
};
function lan(){
var pass = document.getElementById("p-label");
var mob = document.getElementById("mobile");
var pad = document.getElementById("pad");
 	pass.style.top = "25";
 	mobile.style.top = "-5";
 	pass.style.fontSize = "12px";
	pass.style.transition = "all .3s ease-in-out";
 	pad.style.paddingtop = "50px";
};
function login(){
 var mail = document.getElementById("mobile").value;
 var pass = document.getElementById("pass").value;
 if((mail == 'admin') && (pass == 'admin')){
	
		alert("login successfull");
	}else{
		alert("Login details are incorrect !!!! Please enter correct details");
 }
};
function show(){
	var s = document.getElementById('pass');
	if(s.type == "password"){
		s.type = "text";
	}else{
		s.type = "password";
	}
};

////contact 

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("c-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


// flight

function fro(){
	document.getElementById("form-label").style.top = "-5px";
	document.getElementById("form-label").style.paddingLeft = "15px";
	document.getElementById("form-label").style.fontSize = "12px";
	document.getElementById("form-i").style.color = "black";
	document.getElementById("form-label").style.transition = "all .3s ease-in-out";
};
function fortop(){
	document.getElementById("to-label").style.top = "-5px";
	document.getElementById("to-label").style.paddingLeft = "15px";
	document.getElementById("to-label").style.fontSize = "12px";
	document.getElementById("to-i").style.color = "black";
	document.getElementById("to-label").style.transition = "all .3s ease-in-out";
};
