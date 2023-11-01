//variáveis

let nomePersonagem = "Mulher Maravilha";
let xp = 0;
let nivelHeroi = "";


//Laços de repetição

while (true) {

//operadores e estruturas de decisão

if (xp <1000) {
    console.log ("Nível Ferro")
} 
else if (xp >=1001 && xp <=2000){
	console.log ("Nível Bronze")
}
else if (xp >=2001 && xp<=5000){
  console.log ("Nível Prata")
}
else if (xp >=6001 && xp<=7000){
  console.log ("Nível Ouro")
}
else if (xp >=7001 && xp<=8000){
  console.log ("Nível Platina")
}
else if (xp >=8001 && xp<=9000){
  console.log ("Nível Ascendente")
}
else if (xp >=9001 && xp<=10000){
  console.log ("Nível Imortal")
}
else if (xp >=10001){
  console.log ("Nível Radiante")
}

}

//saída
console.log ("O Herói de nome " + nomePersonagem + "está no nível de " + nivelHeroi)
