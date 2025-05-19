// exercice 1
const firstName = `Jean`;
let age = 25;
// age = parseInt(age) +5; 
age = age + 5;
console.log(`Bonjour Mr ${firstName} vous avez ${age} ans.`);

// exercice 2
const x = 10;
const y = 20;
let somme = x + y;
console.log(`la somme est de ${somme}.`);
let produit = x * y;
console.log(`le produit est de ${produit}.`);

// exercice 3
let nombre = prompt(`Entrez un nombre`)
if (nombre.toLowerCase()>10) {
    console.log(`Plus grand que 10`);

} else {
    console.log(`Plus petit ou égal à 10`);

};

// exercice 4
// let nombre = 3485;
if (nombre % 2 === 0) {
    console.log(`Ce nombre est pair`);

} else {
    console.log(`Ce nombre est  impair`);

}

// exercice 5
let maturite = prompt(`Quel est votre âge?`);
if (maturite < 18) {
    console.log(`Tu es mineur`);

} else if (maturite >= 18 && maturite < 65) {
    console.log(`Tu es adulte`);

} else {
    console.log(`Tu es senior`);
}