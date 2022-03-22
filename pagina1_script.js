/*function validar() {
    var bin = document.getElementById('bin')
    Number.parseInt("bin")
    if (bin == 1){
        window.alert(" Boa ")
    }else if(bin == 0 ){
        window.alert(" Boa ")
    }else{
        window.alert("só 1 e 0")
        bin.innerText(" ")
    }
}*/


function converter(){
    /*
        Tranformar um número binário em número decimal:
        Primeiro: pega a posição de cada algarismo e transforma em expoente depois pega 
        o algarismo correspondente e multiplica pelo resultado da potencia

        Por exemplo --> 101 = (da direita para esquerda) = 1*(2^0) + 0*(2^1) + 1*(2^2) = 5
    */
    var bin = window.document.getElementById('bin') //aqui ta o problema, não estamos conseguindo pegar o bin
    var dec = window.document.getElementById('dec')
    var str_bin = String(bin.value)
    var l_bin = str_bin.length //number
    var i_bin = l_bin - 1 //number 
    let res = 0 
    var x = typeof z
    for (let i = 0; i <= i_bin; i++) {
        res += (2**i)*str_bin[i_bin-i] // nn_ é string / bin é object 

      }
    dec.innerHTML = `Seu número em <strong>decimal</strong> é: ${res}`
}


// Proximo passo: fazer a limpeza dpara colocar outro número
// Conferir se o número em binário possui apenas 1 e 0


