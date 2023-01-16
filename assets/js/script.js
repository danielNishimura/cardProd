//$(document).ready(function(){
//    $('#graus-icon').click(function(){
//      $(this).toggleClass('open');
//      console.log("cliquei")
//    });
//  });

var box = document.getElementById("box");
var yes = document.getElementById("yes");
var no = document.getElementById("no");

yes.onclick = function(){
    document.getElementById("graus-icon").src="assets/images/sofaboraCodar.gif";
}

no.onclick = function(){
    document.getElementById("graus-icon").src="assets/images/image2.png";
}

function marcar() {
    document.getElementById("graus-icon").src="assets/images/sofaboraCodar.gif";
}

