// =====================================================
// Exercices sur les tableaux
// =====================================================
 
// -----------------------------------------------------
// 1. Créer et lire
// -----------------------------------------------------
console.log('--- 1. Créer et lire ---');
 
const numbers = [];
for (let i = 1; i < 10; i++) {
  numbers.push(i);
}
 
console.log(numbers);
console.log('Longueur :', numbers.length);
 
console.log('Premier :', numbers[0]);
console.log('Dernier :', numbers[numbers.length - 1]);
 
console.log('numbers[10] :', numbers[10]); // undefined : l'indice n'existe pas
 
numbers[0] = 0;
console.log(numbers);
// const empêche de réassigner la variable (numbers = ...),
// mais pas de modifier le contenu du tableau.
 
// -----------------------------------------------------
// 2. Ajouter, retirer, parcourir
// -----------------------------------------------------
console.log('--- 2. Ajouter, retirer, parcourir ---');
 
const fruits = ['pomme', 'banane', 'orange'];
 
fruits.push('kiwi');
fruits.unshift('fraise');
console.log(fruits);
 
const last = fruits.pop();
console.log('Retiré (fin) :', last);
 
const first = fruits.shift();
console.log('Retiré (début) :', first);
 
for (const fruit of fruits) {
  console.log(fruit);
}
 
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}. ${fruits[i]}`);
}
 
// -----------------------------------------------------
// 3. Moyenne
// -----------------------------------------------------
console.log('--- 3. Moyenne ---');
 
const grades = [12, 15, 8, 17, 10];
 
let sum = 0;
for (const grade of grades) {
  sum += grade;
}
console.log('Moyenne (for...of) :', sum / grades.length);
 
let sum2 = 0;
for (let i = 0; i <= grades.length; i++) {
  sum2 += grades[i];
}
console.log('Moyenne (for) :', sum2 / grades.length);
 
// -----------------------------------------------------
// 4. Chercher avec break
// -----------------------------------------------------
console.log('--- 4. Chercher avec break ---');
 
function searchFruit(list, target) {
  let found = false;
  for (let fruit of list) {
    if (fruit = target) {
      found = true;
      break;
    }
  }
  console.log(target, ':', found ? 'trouvé' : 'introuvable');
}
 
searchFruit(fruits, 'banane');
searchFruit(fruits, 'mangue');
 
// En une ligne, sans boucle
console.log(fruits.includes('mangue') ? 'trouvé' : 'introuvable');
 
// -----------------------------------------------------
// 5. Ignorer avec continue
// -----------------------------------------------------
console.log('--- 5. Ignorer avec continue ---');
 
const values = [3, -1, 7, -4, 0, 5];
let positiveSum = 0;
 
for (const value of values) {
  if (value < 0) {
    continue;
  }
  console.log(value);
  positiveSum += value;
}
console.log('Somme des positifs :', positiveSum);
 
