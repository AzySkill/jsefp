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
  if (value < 1) {
    continue;
  }
  console.log(value);
  positiveSum += value;
}
console.log('Somme des positifs :', positiveSum);
 

// -----------------------------------------------------
// 6. forEach, map, filter
// -----------------------------------------------------
console.log('--- 6. forEach, map, filter ---');
// Avec le tableau [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] :
// a) Avec forEach, affiche chaque nombre sous la forme 'indice 0: 1'.


// b) Avec map, crée un tableau contenant le carré de chaque nombre.


// c) Avec filter, crée un tableau contenant uniquement les nombres pairs.


// d) En enchaînant filter et map, crée un tableau contenant le carré des nombres pairs.


// e) Affiche le tableau de départ : a-t-il été modifié ?
// Ma réponse :


// -----------------------------------------------------
// 7. Extraire et assembler
// -----------------------------------------------------
console.log('--- 7. Extraire et assembler ---');
// Avec const week = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
// a) Avec slice, crée un tableau weekend (les deux derniers jours)
//    et un tableau workdays (les cinq premiers).


// b) Avec la déstructuration, récupère le premier et le deuxième jour dans deux variables,
//    et le reste dans une troisième.


// c) Affiche les jours ouvrables sous la forme 'lundi - mardi - mercredi - jeudi - vendredi'.


// d) Avec splice, retire 'mercredi' de workdays (sans écrire son indice à la main)
//    et affiche l'élément retiré.


// -----------------------------------------------------
// 8. Tri et références
// -----------------------------------------------------
console.log('--- 8. Tri et références ---');
// a) AVANT d'exécuter, note ce qu'affiche chaque ligne :
//
//    const scores = [10, 1, 25, 2];
//    const sorted = scores.sort();
//    console.log(sorted);              // ma prédiction :
//    console.log(scores);              // ma prédiction :
//    console.log(sorted === scores);   // ma prédiction :
//
//    const c = [1, 2, 3];
//    const d = c;
//    d.push(4);
//    console.log(c);                   // ma prédiction :
//    console.log([1, 2] === [1, 2]);   // ma prédiction :
//
// Ensuite seulement, recopie ce code en dessous et exécute-le.


// b) Explique le résultat du tri, et pourquoi scores a changé.
// Ma réponse :


// c) Déclare const points = [10, 1, 25, 2];
//    Crée un tableau sortedPoints avec ces valeurs triées numériquement, SANS modifier points.
//    Vérifie que points n'a pas changé.


// d) Crée une fonction addElement(list, element) qui ajoute un élément au tableau reçu avec push.
//    Appelle-la sur un tableau, puis affiche le tableau : que constates-tu ? Pourquoi ?
// Ma réponse :


// e) Écris une fonction withElement(list, element) qui retourne un NOUVEAU tableau
//    avec l'élément ajouté, sans modifier l'original.


// -----------------------------------------------------
// 9. Répertoire
// -----------------------------------------------------
console.log('--- 9. Répertoire ---');
// Crée un tableau contacts contenant au moins trois objets { name, phone }.


// a) Écris une fonction findContact(contacts, name) qui parcourt le tableau avec for...of
//    et retourne le contact trouvé, ou null s'il n'existe pas.


// b) Écris une seconde version, findContactWithFind, en utilisant find.


// c) Affiche le téléphone d'un contact existant, puis tente d'afficher celui d'un contact
//    inexistant : affiche 'Contact introuvable' dans ce cas (voir Opérateurs).


// -----------------------------------------------------
// 10. Notes d'un étudiant
// -----------------------------------------------------
console.log("--- 10. Notes d'un étudiant ---");
// Crée un objet student avec :
//  - une propriété name
//  - une propriété grades : un tableau de notes sur 20
//  - une méthode getAverage() qui retourne la moyenne des notes (0 si le tableau est vide)
//  - une méthode isPassing() qui retourne true si la moyenne est >= 10
// Teste avec les notes [12, 8, 15, 9], puis ajoute une note de 2 et teste à nouveau.


// -----------------------------------------------------
// 11. Panier
// -----------------------------------------------------
console.log('--- 11. Panier ---');
// Crée un objet cart avec :
//  - une propriété items : un tableau vide, qui contiendra des objets { name, price, quantity }
//  - une méthode addItem(name, price, quantity) qui ajoute un article au panier
//  - une méthode removeItem(name) qui retire l'article portant ce nom, s'il existe
//  - une méthode getTotal() qui retourne le prix total (prix x quantité pour chaque article)
// Teste : ajoute trois articles, affiche le total, retires-en un, affiche à nouveau le total.
// Que se passe-t-il si on retire un article absent ?
// Ma réponse :


// -----------------------------------------------------
// 12. Bibliothèque
// -----------------------------------------------------
console.log('--- 12. Bibliothèque ---');
// Crée un objet library avec :
//  - une propriété books : un tableau d'objets { title, author, year }
//  - une méthode addBook(title, author, year)
//  - une méthode findBook(title) qui retourne le livre portant ce titre (avec find)
//  - une méthode getBooksByAuthor(author) qui retourne les livres de cet auteur (avec filter)
//  - une méthode getTitles() qui retourne la liste des titres (avec map)
// Teste avec au moins quatre livres, dont deux du même auteur.
// Affiche ensuite les titres triés par année de publication, SANS modifier books.


// -----------------------------------------------------
// 13. Bonus : reduce, some, every
// -----------------------------------------------------
console.log('--- 13. Bonus : reduce, some, every ---');
// a) Écris une fonction getAverageWithReduce(grades) qui calcule la moyenne avec reduce,
//    et compare son résultat avec student.getAverage() de l'exercice 10.


// b) Avec every, vérifie que toutes les notes de student sont comprises entre 0 et 20.


// c) Avec some, vérifie si le panier de l'exercice 11 contient un article à plus de 50 €.

