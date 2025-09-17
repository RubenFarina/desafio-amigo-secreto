// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos=[];
let inputAmigo=document.getElementById("amigo");
let ulListaAmigos=document.getElementById("listaAmigos");
let ulResultado =document.getElementById("resultado");




function agregarAmigo(){
    if (inputAmigo.value==""){
        alert("INGRESAR UN NOMBRE");
    }
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML+= `<li>${inputAmigo.value}</li>`;
}
function sortearAmigo(){
   const random = Math.floor((Math.random()* listaAmigos.length));
   const amigoSecreto = listaAmigos[random];
   ulResultado.innerHTML =`<li> El amigo secreto es :${amigoSecreto} </li> ` ;
}