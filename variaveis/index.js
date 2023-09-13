// Objetivo: aprender a declarar variáveis em JavaScript
// diferença entre var, let e const
//var é global e também local
//let é local
//const é constante


var nome = 'João';
var idade = 20;
var idade2 = '20';
var verdade = true;
var falso = false;
var nulo = null;
var indefinido = undefined;
var objeto = {
    nome: 'João',
    idade: 20
}
var array = [1, 2, 3, 4, 5];
var array2 = [{ name: 'João', age: 20 }, 18, true, '20'];

window.console.log(nome);
window.console.warn(idade);
window.console.log(typeof nome);

console.log(idade, nome);
console.log(`${idade2}, ${nome}`);
