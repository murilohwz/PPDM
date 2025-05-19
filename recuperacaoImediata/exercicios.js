// Recuperação Imediata Murilo H 

//ex1
let idade = parseInt(prompt("Digite sua idade:"));

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}


//ex2
let numero = parseInt(prompt("Digite um número:"));

if (numero % 3 === 0) {
  console.log("É múltiplo de 3");
} else {
  console.log("Não é múltiplo de 3");
}

//ex3
let num1 = 10;
let num2 = 20;

if (num1 > num2) {
  console.log(`O maior número é: ${num1}`);
} else if (num2 > num1) {
  console.log(`O maior número é: ${num2}`);
} else {
  console.log("Os dois números são iguais");
}

//ex4
let numero = -5;

if (numero > 0) {
  console.log("Número positivo");
} else if (numero < 0) {
  console.log("Número negativo");
} else {
  console.log("Número é zero");
}

//ex5
let nota = 7;

let resultado = nota >= 6 ? "Aprovado" : "Reprovado";
console.log(resultado);

//ex6
let opcao = "Ajuda";

switch (opcao) {
  case "Início":
    console.log("Você escolheu Início");
    break;
  case "Ajuda":
    console.log("Você escolheu Ajuda");
    break;
  case "Sair":
    console.log("Você escolheu Sair");
    break;
  default:
    console.log("Opção inválida");
}

//ex7
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

//ex8
let i = 10;

do {
  console.log(i);
  i--;
} while (i >= 1);

//ex9
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//ex10
let soma = 0;

for (let i = 1; i <= 100; i++) {
  soma += i;
}

console.log("Soma total de 1 a 100:", soma);

//ex11
let frutas = ["Maçã", "Banana", "Uva", "Laranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

//ex12
let nomes = ["Ana", "Bruno", "Carlos", "Daniela"];

for (let nome of nomes) {
  console.log(nome);
}

//ex13
let pessoa = {
  nome: "Lucas",
  idade: 25,
  cidade: "São Paulo"
};

for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

//ex14
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

//ex15
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

//ex16
let idade = parseInt(prompt("Digite a idade:"));

if (idade <= 12) {
  console.log("Criança");
} else if (idade <= 17) {
  console.log("Adolescente");
} else if (idade <= 59) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

//ex17
let nomes = ["PZ King", "Snatos", "Agarra", "Trigueiro"]

for (let i = 0; i <= nomes.length; i++) { 
  let atual = nomes[i]
  
  if (atual != undefined) { 
    console.log(atual + " tem " + atual.length + " letras")
  }
}


//ex18
let pessoa = {
  nome: "Murilo Rlq",
  idade: 30,
  ativa: true,
  altura: "1.65" 
};

let quantidade = 0;
let tipos = [];

for (let chave in pessoa) {
  quantidade += 1;

  if (!tipos.includes(typeof chave)) { 
    tipos.push(typeof chave);
  }

  console.log(`${chave} => ${typeof pessoa[chave]}`);
}

console.log("Total de propriedades:", quantidade);
console.log("Tipos únicos encontrados:", tipos);


