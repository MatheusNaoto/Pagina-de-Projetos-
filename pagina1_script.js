function validar() { //testar o onKeydown
    var bin = window.document.getElementById('bin')
    var dec = window.document.getElementById('dec')
    let str_bin = String(bin.value)
    let result = str_bin.match(/[2-9]/g)
    document.getElementById("botao").disabled = false
        if (result != null){
            document.getElementById("botao").disabled = true
            dec.innerHTML = `Seu número <strong>não é binário</strong>`
        }else{
            document.getElementById("botao").disabled = false
        }
}

// Fazer não converter depois de descobrir que não é binario (2/2 ok - impede a conversão desabilitando o botao)
// Aprimoramento: tempo de disable ainda dá para clicar antes do botão ficar disabilitado
// Aprimoramento 2: não somente disabilitar o botao mas impedir a função converter
// Ler o numero por tempo?

function converter(){
    /*
        Tranformar um número binário em número decimal:
        Primeiro: pega a posição de cada algarismo e transforma em expoente depois pega 
        o algarismo correspondente e multiplica pelo resultado da potencia

        Por exemplo --> 101 = (da direita para esquerda) = 1*(2^0) + 0*(2^1) + 1*(2^2) = 5
    */
    var bin = window.document.getElementById('bin') 
    var dec = window.document.getElementById('dec')
    var str_bin = String(bin.value)//String
    var l_bin = str_bin.length //number
    var i_bin = l_bin - 1 //number 
    let res = 0 
    var x = typeof z
    for (let i = 0; i <= i_bin; i++) {
        res += (2**i)*str_bin[i_bin-i] // nn_ é string / bin é object 

      }
    dec.innerHTML = `Seu número em <strong>decimal</strong> é: ${res}`
}


// Proximo passo: fazer a limpeza dpara colocar outro número (2/2 ok)
// Conferir se o número em binário possui apenas 1 e 0 - (2/2 ok)
