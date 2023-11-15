var numeroSecreto = 380;

while (chute != numeroSecreto) {
var chute = prompt('Digite um numero entre 1 e 1000');
  //se o chute for igual ao numero secreto
  if (chute == numeroSecreto) {
    alert('Acertou!');
  } else if (chute > numeroSecreto) {
    alert('Errou... o número secreto é menor');
  } else if (chute < numeroSecreto) { 
    alert('Errou... o número secreto é maior');
  }
  }