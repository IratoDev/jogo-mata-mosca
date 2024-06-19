

var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

var criaMosquitoTempo = 1500;

var nivel = window.location.search

nivel = nivel.replace("?" , ""); 

if(nivel === 'facil'){

criaMosquitoTempo = 1500;

}else if(nivel === "normal"){

criaMosquitoTempo = 1000;

}else if(nivel === "dificil"){

criaMosquitoTempo = 750;

}


function ajustaTamanhoPalcoJogo(){
 altura = window.innerHeight;//altura passa a recerber o valor de altura de tela 
 largura = window.innerWidth;//altura passa a recerber o valor de largura de tela 

console.log(altura,largura);

}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function(){

tempo-=1;

if(tempo <0){

clearInterval(cronometro);
clearInterval(criaMosquito);
window.location.href = "vitoria.html";

}else{
document.querySelector('#cronometro').innerHTML = tempo;
}

},1000);

function PosicaoRandomica(){

    if(document.querySelector("#mosquito")){
    document.querySelector("#mosquito").remove();

    if(vidas > 3){
    
    window.location.href = "fim_de_jogo.html";

    }else{

    console.log(`valor de vidas: ${vidas}`);

    document.querySelector(`#v${vidas}`).src ="/img/coracao_vazio.png";
    
    vidas++

    }

    }
    var PosicaoX = Math.floor(Math.random() * largura) - 90;//cria um valor randomico para o eixo X
    var PosicaoY = Math.floor(Math.random() * altura) - 90;//cria um valor randomico para o eixo Y
        
    PosicaoX = PosicaoX < 0 ? 0 : PosicaoX;
    PosicaoY = PosicaoY < 0 ? 0 : PosicaoY;
        
    console.log(`posiçãoX:${PosicaoX}, posiçãoY:${PosicaoY}`);
    
    /* criando elemento meosquito*/
    var mosquito = document.createElement('img');
    mosquito.className= `${TamanhoAleatorio()} + ${ladoAleatorio()}`;
    mosquito.src ="./img/mosca.png";
    mosquito.style.position = "absolute";
    mosquito.style.left = PosicaoX + "px";
    mosquito.style.top = PosicaoY + "px";
    mosquito.id = "mosquito";

    mosquito.onclick = function(){

    try {
        this.remove();   
    } catch (error) {
        
    console.log("erro ao tentar remover mosca ")

    }
    
    };

    document.body.appendChild(mosquito);
    
    console.log(TamanhoAleatorio());

}

function TamanhoAleatorio(){

var classe = Math.floor(Math.random() * 3);

if (classe == 0) {

    return "mosquito1"

}else if(classe == 1) {
    
return "mosquito2"

}else if(classe == 2){

    return "mosquito3"

}

}

function ladoAleatorio(){

    var classe = Math.floor(Math.random() * 2);

if (classe == 0) {
    
return "ladoA"
    
}else if(classe == 1) {
        
return "ladoB"    

}
}

var criaMosquito = setInterval(()=>{
 
PosicaoRandomica();
    
},criaMosquitoTempo);