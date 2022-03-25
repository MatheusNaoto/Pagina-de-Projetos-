document.getElementById("bin").addEventListener('keyup', validar, true)
document.getElementById('botao').addEventListener('click', converter)

function validar() {
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
    dec.innerHTML = `Seu número em <strong>binário</strong> é ${result}`
}



function d2b(){
    document.getElementById('bin').removeEventListener('keyup', validar)
    document.getElementById('botao').removeEventListener('click', converter)
    document.getElementById('bin').id = 'decim'
    document.getElementById('decim').addEventListener('keyup', validard2b)
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
    document.getElementById('bin').addEventListener('keyup', validar)
    document.getElementById('botao').addEventListener('click', converter)
    document.getElementById('dec').innerText = ""
    var title = window.document.getElementById('titulo1')
    title.innerText = 'Tranformação de Binário para Decimal:'
    var subtitle = window.document.getElementById('subt1')
    subtitle.innerText = 'Número em binário que você deseja converter: '
    document.querySelector('input#bin').value='' //limpar o input
    

}
//resolver bug: clicar em b2d button antes 'sobrecarrega'
// Calculadora:

class Calculadora {
  constructor(visor_anteriorTextElement, visor_atualTextElement){
  this.visor_anteriorTextElement = visor_anteriorTextElement
  this.visor_atualTextElement =  visor_atualTextElement
  this.limpar()
  }

  //definir as funções que serão chamadas

  limpar(){
    this.visor_anterior = ''
    this.visor_atual = ''
    this.operacao = undefined
  }

  adicionar_numero(numero){
    if (numero === '.' && this.visor_atual.includes('.'))return
    //if (numero === '+/-' && ('-').includes(this.visor_atual)) //adicionado para tentar mudar o sinal
    //if (operacao === '()' && ('(').includes(this.visor_atual).includes(')'))
    this.visor_atual = this.visor_atual.toString() + numero.toString()
  }
  adicionar_operador(operacao){
    if (this.visor_atual === '') return
    if (this.visor_anterior !== ''){
      this.computar()
    }
    this.operacao = operacao
    this.visor_anterior =  this.visor_atual
    this.visor_atual = ''
  }
  computar(){
    let fazer_computacao 
    const anterior = parseFloat(this.visor_anterior)
    const atual = parseFloat(this.visor_atual)
    if (isNaN(anterior) || isNaN(atual)) return
    switch (this.operacao){
      case '+':
        fazer_computacao = anterior + atual 
        break
      case '-':
        fazer_computacao = anterior - atual
        break
      case '*':
        fazer_computacao = anterior * atual
        break        
      case '/':
        fazer_computacao = anterior / atual
        break
      case '%':
        fazer_computacao = anterior/100 //problema
        break
      default:
        return 
    }
    this.visor_atual = fazer_computacao
    this.operacao = undefined
    this.visor_anterior = ''
  } 

  pegar_numero_visor(numero){
    const string_numero = numero.toString()
    const digito_inteiro = parseFloat(string_numero.split('.')[0])
    const digito_decimal = string_numero.split('.')[1]
    let display_inteiro
    if (isNaN(digito_inteiro)) {
      display_inteiro = ''
    } else {
      display_inteiro = digito_inteiro.toLocaleString('en', {maximumFractionDigits: 0})//entender esse 'en'
    }
    if (digito_decimal != null){
      return `${display_inteiro}.${digito_decimal}`
    } else {
      return display_inteiro
    }
  }
  atualizar_display(){
    this.visor_atualTextElement.innerText = 
      this.pegar_numero_visor(this.visor_atual)
    if (this.operacao != null){
      this.visor_anteriorTextElement.innerText =
       `${this.pegar_numero_visor(this.visor_anterior)} ${this.operacao}`
    }else{
      this.visor_anteriorTextElement.innerText = ''
    }
  }
}

const botao_numero = document.querySelectorAll ('[data-numero]')
const botao_operacao = document.querySelectorAll ('[data-operacao]')
const botao_igual = document.querySelector ('[data-igual]')
const botao_limpar = document.querySelector ('[data-limpar]')
const visor_anteriorTextElement = document.querySelector ('[data-visor_anterior]')
const visor_atualTextElement = document.querySelector ('[data-visor_atual]')

const calculadora = new Calculadora (visor_anteriorTextElement, visor_atualTextElement)

botao_numero.forEach(button =>{
  button.addEventListener('click', () => {
    calculadora.adicionar_numero(button.innerText)
    calculadora.atualizar_display()
  })
})

botao_operacao.forEach(button =>{ //for each é usado porque tem mais de um botao de operação e numero
  button.addEventListener('click', () =>{
    calculadora.adicionar_operador(button.innerText)
    calculadora.atualizar_display()
  })
})

botao_igual.addEventListener ('click', ()=>{
  calculadora.computar()
  calculadora.atualizar_display()
})

botao_limpar.addEventListener('click', () =>{
  calculadora.limpar()
  calculadora.atualizar_display()
})

// Limitar o número de dígitos 
// Colocar , em vez de .
// +/- , () e  %
