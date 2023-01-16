var imgAtual = "assets/images/image2.png";
var imgAnterior = "assets/images/sofaboraCodar.gif";

function trocar() {
    document.getElementById("graus-icon").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;
}



//troca imagem
function marcar() {
    document.getElementById("graus-icon").src="assets/images/sofaboraCodar.gif";
}

