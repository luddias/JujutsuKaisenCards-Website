lista=['cartaoyuji','cartaonobara','cartaomegumi','cartaopanda','cartaoinumaki','cartaomaki'];
let i=0;
function mudarpersonagem(){  
 
  let atual = document.getElementById(lista[i]);
  if (i==5){
    i=-1;
  }
  let prox = document.getElementById(lista[i+1]);
  atual.classList.remove('selecionado');
  prox.classList.add('selecionado');
  i++;
}

function voltarpersonagem(){  
 
  let atual = document.getElementById(lista[i]);
  if (i==0){
    i=6;
  }
  let prox = document.getElementById(lista[i-1]);
  atual.classList.remove('selecionado');
  prox.classList.add('selecionado');
  i--;
}