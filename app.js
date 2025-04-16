alert('Boas vindas ao game do secret number!');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let tentativa;
let quantidadeTentativas = 1;

//while é enquanto nao for igual !=
while(tentativa != numeroSecreto){
        tentativa = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
        // se o numero secreto for 
    if (tentativa == numeroSecreto) {
        break;

    } else {
        if (tentativa > numeroSecreto){
            alert(`O número secreto é menor que ${tentativa}`);
        } else {
            alert(`O número secreto é maior que ${tentativa}`)
        }
        // soma +1
        quantidadeTentativas++;
    }
    }

    let palavraTentativa = quantidadeTentativas > 1 ? 'tentativas' : 'tentativa'
    alert(`Parabéns, você conseguiu descobrir o número secreto ${numeroSecreto} com ${quantidadeTentativas} ${palavraTentativa}.`);
    
    //if(quantidadeTentativas >1){
       // alert(`Parabéns, você conseguiu descobrir o número secreto ${numeroSecreto} com ${quantidadeTentativas} tentativas.`);
    //} else {
       // alert(`Parabéns, você conseguiu descobrir o número secreto ${numeroSecreto} com ${quantidadeTentativas} tentativa.`);
   // }
