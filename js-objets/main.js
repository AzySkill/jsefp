// ============================================================
//  Exercices sur les objets
//  Écris ton code SOUS chaque consigne.
//  Après chaque modification : Ctrl + S, puis regarde la console (F12 → Console).
// ============================================================


// ----- 1. Créer et lire -----
// a) Crée un objet book avec les propriétés title, author, year et available (booléen).
const book = {
  title: 'Le Petit Prince',
  author: 'Antoine de Saint-Exupéry',
  year: 1943,
  available: true,
};

// b) Affiche le titre avec la notation point, puis l'auteur avec la notation crochets.
console.log(book.title);
console.log(book['author']);

// c) Déclare const key = 'year'; et affiche l'année en utilisant key.
const key = 'year';
console.log(book[key]); 

// d) Affiche book.pages : que vaut une propriété qui n'existe pas ?
// Ma réponse :en gros, ça vaut undefined. C'est comme si on demandait à quelqu'un de nous donner quelque chose qu'il n'a pas : il ne peut pas nous le donner, donc on obtient "rien" (undefined).
console.log(book.pages);


// ----- 2. Modifier, ajouter, supprimer -----
// a) Modifie l'année de book.
book.year = 1946;



// b) Ajoute une propriété pages.
book.pages = 96;


// c) Supprime la propriété available.
delete book.available;

// d) Affiche book. Il est déclaré avec const : pourquoi peut-on quand même le modifier ?
console.log(book);
// Ma réponse : Parce que const empêche de réassigner la variable, mais pas de modifier le contenu de l'objet.



// ----- 3. Fonctions et objets -----
// a) Crée une fonction createUser(name, age, email) qui retourne un objet utilisateur.
//    Utilise l'écriture raccourcie.
function createUser(name, age, email) {
  return { name, age, email };
}
// b) Crée une fonction getUserInfo(user) qui retourne une phrase du type
//    'Alice, 30 ans, alice@mail.com'.
function getUserInfo(user) {
  return `${user.name}, ${user.age} ans, ${user.email}`;
}
const alice = createUser('Alice', 30, 'Alice@gmail.com');
console.log(getUserInfo(alice));

// ----- 4. Objets imbriqués -----
// a) Crée un objet user avec un nom et une propriété address
//    contenant street, city et zip.
const user = {
  name: 'Alice',
  address: {
    street: 'Rue de la Loi 16',
    city: 'Bruxelles',
    zip: '1000',
  },
};


// b) Affiche la ville.
console.log(user.address.city);


// c) Affiche user.contact.email : que se passe-t-il ?
// Ce qui se passe : undefined


// d) Corrige pour afficher 'Pas d'email' quand le contact est absent (voir Opérateurs).
console.log(user.contact?.email || 'Pas d\'email');


// ----- 5. Parcourir un objet -----
// Avec for...in, affiche chaque propriété de book sous la forme 'title: Le Petit Prince'.



// ----- 6. Référence et copie -----
// a) AVANT d'exécuter, note ce qu'affiche chaque ligne :
//
//    const a = { x: 1 };
//    const b = { x: 1 };
//    const c = a;
//    c.x = 5;
//    console.log(a === b);   // ma prédiction :
//    console.log(a === c);   // ma prédiction :
//    console.log(a.x);       // ma prédiction :
//
// Ensuite seulement, recopie ce code en dessous et exécute-le.


// b) Crée une fonction updateUser(user, changes) qui retourne un NOUVEL utilisateur
//    mis à jour, sans modifier l'original. Vérifie que l'original n'a pas changé.


// c) Appelle updateUser(user, { address: { city: 'Liège' } }) avec le user de l'exercice 4.
//    Qu'est devenue la rue ? Pourquoi ?
// Ma réponse :


// d) Crée une copie profonde de user, modifie la ville de la copie,
//    et vérifie que l'original n'a pas changé.



// ----- 7. Méthodes -----
// Crée un objet bankAccount avec :
//  - une propriété balance initialisée à 0
//  - une méthode deposit(amount) qui ajoute le montant au solde
//  - une méthode withdraw(amount) qui retire le montant seulement si le solde est suffisant,
//    et retourne true ou false selon que le retrait a eu lieu
//  - une méthode getBalance() qui retourne le solde
// Teste : dépose 100, retire 30, puis tente de retirer 200.



// ----- 8. Méthodes de Object -----
// Avec l'objet book, affiche :
//  a) la liste de ses clés
//  b) la liste de ses valeurs
//  c) la liste de ses paires clé / valeur
//  d) true ou false selon que book possède une propriété isbn



// ----- 9. Classes -----
// a) Crée une classe Car avec :
//    - un constructeur qui prend la marque, le modèle et l'année
//    - une méthode start() qui retourne 'Vroum vroum!'
//    - une méthode getAge(currentYear) qui retourne l'âge de la voiture


// b) Crée deux voitures et affiche leur âge.


// c) Crée une classe ElectricCar qui hérite de Car, avec en plus battery (0 à 100)
//    et une méthode charge() qui la remet à 100.



// ----- 10. Bonus : un compte vraiment privé -----
// Réécris le compte de l'exercice 7 sous forme de classe BankAccount,
// avec un solde privé (#balance) : on doit pouvoir le lire,
// mais pas le modifier directement depuis l'extérieur.

