//botões usuario
let valor = Math.floor(Math.random() * 3 + 1);

//////////////////////////////
document.getElementById("jogar").addEventListener("click", () => {
    let jogada = document.getElementById("jogador").value
    let play = parseInt(jogada)
    if (valor == play) {
        document.getElementById("result").innerText = "Empate!!!"
    }else if(valor == 1 && play == 2){
        document.getElementById("result").innerText = "Parebéns, você venceu!!!"
    }else if(valor == 1 && play == 3){
        document.getElementById("result").innerText = "Você perdeu!!!"
    }else if(valor == 2 && play == 1){
        document.getElementById("result").innerText = "Você perdeu!!!"
    }else if(valor == 2 && play == 3){
        document.getElementById("result").innerText = "Parebéns, você venceu!!!"
    }else if(valor == 3 && play == 1){
        document.getElementById("result").innerText = "Parebéns, você venceu!!!"
    }else if(valor == 3 && play == 2){
        document.getElementById("result").innerText = "Você perdeu!!!"
    }
    
    
})