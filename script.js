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
if (nombre.toLowerCase() > 10) {
    console.log(`Plus grand que 10`);

} else {
    console.log(`Plus petit ou égal à 10`);

};

// exercice 4
let nombres = 3485;
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
// exercice 6
for (let i = 1; i <= 10; i++) {
    console.log(`ligne ` + i);
}
// exercice 7

let chiffre = prompt(`Entrez un chiffre`);
for (let i = 0; i < 10; i++) {
    let resultat = chiffre * i;
    console.log(`${chiffre} * ${i} = ${resultat}`);

}
// exercice 8

let nbre = 0;
let sum = 0;
for (let nbre = 0; nbre <= 100; nbre++) {
    sum = sum + nbre;
}
console.log(`le somme est de ${sum}`);

// exercice 9
let nbr = prompt(`Devinez un nombre entre 1 et 10 ?`);
let result = Math.floor(Math.random() * 10) + 1;
nbr = parseInt(nbr)
while (nbr !== 3) {
    if (nbr > result) {
        nbr = prompt(`Essaye encore`);
    } else {
        nbr = prompt(`Essaye encore`);
    }

    nbr = parseInt(nbr);
}
console.log(`Bravo, c'est correct`);




// exercice 10

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// exercice 11
for (let i = 10; i > 0; i--) {
    console.log(i);


}
console.log(` C'est terminé !`);

// exercice 12
let a = prompt(`Donnez moi un nombre svp.`);
let b = prompt(`Donnez moi un autre nombre`);
let operation = prompt(`Quelle operation voulez vous faire? (+, -, *, /)`);
a = parseInt(a)
b = parseInt(b)
let resultat;
switch (operation) {
    case `+`:
        resultat = a + b;
        break;
    case `-`:
        resultat = a - b;
        break;
    case `*`:
        resultat = a * b;
        break;
    case `/`:
        resultat = a / b;
        break;
}
console.log(`le resultat de ${a} ${operation} ${b} est ${resultat}`);

// exercice 13

let tableauNombres = [12, 45, 3, 22, 34];
let lePlusGrandNombre = 0

for (let i = 1; i < tableauNombres.length; i++) {
    if (tableauNombres[i] > lePlusGrandNombre) {
        lePlusGrandNombre = tableauNombres[i];
    }
    
}

console.log(`Le plus grand nombre est ${lePlusGrandNombre}`);



