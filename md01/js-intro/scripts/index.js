console.log("Salve!");

// Fazendo coisas aparecerem na tela

const guardandoMinhaDivAqui = document.getElementById("show-screen");

// const name = [1, "Nome", false];

// guardandoMinhaDivAqui.innerText = name;

// Tipos de variaveis

// const ex = "Alexandre";

// ex = "Anna"; // Não pode, não rola e tbm n vai dar erro de syntaxe (só no navegador), vai continuar valendo "Alexandre"

// let ex2 = "Alexandre";
// ex2 = "Anna"; // com let pode!

// guardandoMinhaDivAqui.innerText = ex2;

// Tipos de dados primitivos/basicos

// const str = "Australoptekus";
// const num = 100;
// const boo = true;

// "Tudo no JS é um objeto"

// O que RAIOS é um objeto?

// const objEx = {
//   name: "Alexandre",
//   age: 26,
//   isCute: true,
// };

// console.log(objEx);
// console.log(objEx.age);

// Ok, beleza. Mas porque tudo é um objeto???

// Porque todos os tipos de dados possuem METODOS pré definidos pelo JS, e a gente acessa esses metodos como se fossem objetos

// guardandoMinhaDivAqui.innerText = str.toLowerCase();

// console.log(str.length);

// Num

// const num1 = 500;
// const num2 = 14;

// const strExZuado = "dhushiuduihas";
// const booExZuado = true;

// console.log(num1 + num2);

// console.log(num1 + strExZuado + num2);

// console.log(num1 + booExZuado);

// console.log(num1 % 2 !== 0 || num2 % 2 === 0);

// Operadores matematicos
// +
// -
// *
// /
// **
// %

// Operadores condicionais

// ==
// ===
// !=
// !==

//Juntando operadores condicionais

// &&
// ||

// If

// Basicamente funciona assim, se o que estiver dentro do parenteses der true, ele vai executar o codigo "interno"

const num = 251;

if (num % 2 === 0) {
  console.log("É par.");
} else {
  console.log("É impar");
}

// const age = 26;

// if (age < 30) {
//   console.log("Precisa de acompanhante");
// } else {
//   console.log("Pode entrar!");
// }

// Função > maquina de pão

const age = 12;

// Criando a minha maquina, não estou ligando ela
// function canGetIn(parametro) {
//   if (parametro === undefined) {
//     console.log("Favor informar idade.");
//     return depois;
//   }

//   if (parametro < 30) {
//     console.log("Precisa de acompanhante");
//     return;
//   }

//   console.log("Pode entrar!");
// }

function canGetIn(parametro) {
  if (parametro === undefined) {
    return "Favor informar idade.";
  }

  if (parametro < 30) {
    return "Precisa de acompanhante";
  }

  return "Pode entrar!";
}

// Liguei a maquina
console.log(canGetIn);
console.log(canGetIn()); // undefined
console.log(canGetIn(age)); // undefined

// Guardando o valor de retorno de uma função numa variavel

const returnFunc = canGetIn(age);

console.log(returnFunc);

// Recomendação
// if () {

// } else if() {

// } else {

// }

// Loop
// Dados de mesma natureza, normalmente precisam está agrupados

// Usuarios > Array de usuários

const users = ["Alexandre", "Adriano", "Jino", "Felipe", "Daniel", "angelo"];

// Vamos criar um loop que vai percorrer essa array e dar console.log nos usuarios que tem a letra A no inicio

// Como a gente consegue saber qual é a primeira letra de uma string?

const exStr = "Alexandre";

console.log(exStr[0]);

// Como a gente olha o primeiro elemento de um array?

console.log(users[0]);

// length e includes funcionam em String e Arrays

// Vamos escrever o nosso Loop

// for (let i = 0; i < users.length; i++) {
//   if (users[i][0].toLowerCase() === "a") {
//     console.log(users[i]);
//   }
// }

for (let i = 0; i < users.length; i++) {
  if (users[i].toLowerCase().includes("a")) {
    console.log(users[i]);
  }
}

const includesEx = "Taty";

console.log(users.includes(includesEx));
