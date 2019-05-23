
(function(){
"use strict";    
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;


window.onload = function() {
	
	document.getElementById("time").innerHTML = dateTime;
    };

function clickFunction() {
    alert("You clicked a tile!");
}
})();
