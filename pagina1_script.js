document.getElementById('bin').addEventListener('onkeyup', validar)
document.getElementById('botao').addEventListener('click', converter)

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
            dec.innerHTML = ``
        }
}
function validard2b(){
    document.getElementById("botao").disabled = false
}

// Fazer não converter depois de descobrir que não é binario (2/2 ok - impede a conversão desabilitando o botao)
// Aprimoramento: tempo de disable ainda dá para clicar antes do botão ficar disabilitado
// Aprimoramento 2: não somente disabilitar o botao mas impedir a função converter
// Ler o numero de tempo em tempo 1ms

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
function converterd2b(){
    var decim = window.document.getElementById('decim')
    var dec = window.document.getElementById('dec')
    var Num_Decim = Number(decim.value)
    var Num = Num_Decim
    result = ''
    while (Num/2 != 0) {
        var Resto = Num%2
        var Resto_string =  String(Resto)
        Num = Math.floor(Num/2)
        result = Resto_string.concat(result)   
  }
    dec.innerHTML = `Seu número em binario é ${result}`
}


// Proximo passo: fazer a limpeza dpara colocar outro número (2/2 ok)
// Conferir se o número em binário possui apenas 1 e 0 - (2/2 ok)
function d2b(){
    document.getElementById('bin').removeEventListener('onkeyup', validar)
    document.getElementById('botao').removeEventListener('click', converter)
    document.getElementById('bin').id = 'decim'
    document.getElementById('decim').addEventListener('onkeyup', validard2b)
    document.getElementById('botao').addEventListener('click', converterd2b)
    document.getElementById('dec').innerText = ""
    document.getElementById('titulo1').innerText = "Tranformação de Decimal para Binário:"
    document.getElementById('subt1').innerText = "Número em decimal que você deseja converter: "
    document.querySelector('input#decim').value='' //limpar o input
    
    

}
function b2d(){
    document.getElementById('decim').removeEventListener('onkeyup', validard2b)
    document.getElementById('botao').removeEventListener('click', converterd2b)
    document.getElementById('decim').id = 'bin'
    document.getElementById('bin').addEventListener('onkeyup', validar)
    document.getElementById('botao').addEventListener('click', converter)
    document.getElementById('dec').innerText = ""
    var title = window.document.getElementById('titulo1')
    title.innerText = 'Tranformação de Binário para Decimal:'
    var subtitle = window.document.getElementById('subt1')
    subtitle.innerText = 'Número em binário que você deseja converter: '
    document.querySelector('input#bin').value='' //limpar o input
    

}
//resolver bug: clicar em b2d button antes 'sobrecarrega'
// resolver a troca de eventos, para conseguir transformar o contrario
// o id ja esta sendo trocado
