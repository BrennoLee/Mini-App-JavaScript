let cronometro = document.getElementById("cronometro");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let iniciar = document.getElementById("iniciar");

let minutoAtual;
let segundoAtual;
let intervalo;

for (var i = 0; i <= 60; i++) {
    minutos.innerHTML += '<option value ="' + i + '">' + i + '</option>';
}

for (var i = 1; i <= 60; i++) {
    segundos.innerHTML += '<option value ="' + i + '">' + i + '</option>';
}

iniciar.addEventListener('click',function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    cronometro.childNodes[1].innerHTML = minutoAtual+ ":" +segundoAtual;

    intervalo = setInterval(function(){

        segundoAtual--;

        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual--;
                segundoAtual = 59;
            }else{
                alert("O Tempo acabou!!!");
                clearInterval(intervalo);
            }
        }

        cronometro.childNodes[1].innerHTML = minutoAtual+ ":" +segundoAtual;

    },1000);
})