# À l'attention du professeur

**Cours :** LPW — JavaScript, étape 1
**Étudiant·e :** Aleksander Saliaj
**Exercice :** Exercices sur les variables (`exo.txt`)

## Utilisation d'une IA

J'utilise un assistant IA (Claude) **uniquement comme tuteur** :

- pour m'expliquer la théorie avec des mots simples (variables, `let` / `const` / `var`, types, `typeof`, lire une erreur dans la console) ;
- les exemples qu'il m'a donnés portent volontairement sur **d'autres valeurs** que celles de l'exercice.

Il ne m'a **pas** donné les solutions. Le code et les réponses de l'exercice sont écrits par moi.

## Contenu du dossier

| Fichier / dossier | Contenu |
|---|---|
| `exo.txt` | L'énoncé de l'exercice |
| `js-01/` | Exercices du chapitre JS-01 (console.log) |
| `js-02-variables/` | Exercice sur les variables : la page `index.html` et mon code dans `main.js` |
| `js-objets/` | Exercices sur les objets : la page `index.html` et mon code dans `main.js` |
| `POUR-LE-PROF.md` | Cette note |

## Ordre de travail

1. L'IA m'explique la théorie et vérifie ma compréhension (section ci-dessous).
2. Je fais l'exercice **seul·e** dans `js-02-variables/main.js`.
3. L'IA relit chaque tentative. Elle **explique** pourquoi c'est faux, mais ne me montre pas comment l'écrire. Je corrige moi-même.
4. Chaque tentative est recopiée ici telle quelle, avec ses erreurs. Ce fichier montre donc **mon évolution**, de la première version à la version finale.

## Vérification de compréhension (avant l'exercice)

Questions posées par l'IA après l'explication de la théorie. Mes réponses sont recopiées telles quelles.

| Question | Ma réponse | Résultat |
|---|---|---|
| `let` ou `const` : lequel est modifiable ? | « let c'est modifiable » | ✅ |
| `"12"` et `12`, même type ? | « pas le même type car il y a un avec des guillemets » | ✅ |
| Les 3 choses à lire dans une erreur ? | « je sais pas trop… not undefined » | ❌ Je ne connaissais pas les 3 parties (type, message, ligne) |
| Que veut dire le point dans `menu.nom` ? | « je sais pas » | ❌ |
| Type / message / ligne de `Uncaught TypeError: x is not a function  main.js:12` | « x n'est pas une function, ligne 12, c'est un uncaught » | ⚠️ Message et ligne justes. Pour le type, j'ai répondu `Uncaught` au lieu de `TypeError` |
| Que donne `camion.couleur` ? | « une fiche contenant couleur 'rouge' place '2' » | ❌ J'ai décrit l'objet entier au lieu de la seule valeur `"rouge"` |
| Type dans `Uncaught SyntaxError: missing ) …` ? | « syntaxError » | ✅ |
| Que donne `pizza.prix` ? | « Prix : 15 » | ✅ Bonne valeur. Précision : la console affiche seulement `15` |

## Corrections de l'exercice

### Première tentative — exercice 1 (20/10/2026)

Mon code d'origine, écrit dans `js-01/index.html` (lignes 7-8), recopié tel quel :

```html
<script src="js/script.js" defer> let name = 'Aleksander'; let age = 22; let Pi = 3.14; let isAdult = true;
var console.log(age);
</script>
```

Ce qui était juste : `name` est un texte entre guillemets, `age` un nombre sans guillemets, `isAdult` un booléen (`true`), et chaque instruction finit par `;`.

| Exercice | Mon erreur | Explication | Corrigé par moi ? |
|---|---|---|---|
| 1 | J'ai écrit dans `js-01/index.html` | Ce n'est pas le dossier de l'exercice, et le code JS se range dans un fichier `.js`, pas dans le HTML | ⬜ |
| 1 | J'ai mis du code **entre** `<script src="...">` et `</script>` | Quand la balise a un `src`, le navigateur charge le fichier indiqué et **ignore** ce qui est écrit à l'intérieur : mon code ne s'exécutait pas du tout | ⬜ |
| 1 | `var console.log(age);` | `var` sert à **créer** une variable, pas à afficher. Mettre `var` devant `console.log` provoque une erreur de syntaxe | ⬜ |
| 1 | `let Pi = 3.14;` | Trois écarts avec l'énoncé : le mot-clé (on demande une constante), le nom (JS distingue majuscules et minuscules) et la valeur (incomplète) | ⬜ |
| 1 | Je n'ai affiché que `age` | L'énoncé demande d'afficher **chaque** variable | ⬜ |

### Tentative 2 — exercice 1 (20/10/2026)

Avant cette tentative, l'IA m'a réexpliqué les 5 erreurs avec des images (le post-it, la boîte qu'on crée et la boîte qu'on ouvre), sans me donner le code.

Mon code, écrit dans `js-02-variables/main.js` (lignes 12-13), recopié tel quel :

```js
<script let name = 'Aleksander'; let age = 22; let Pi = 3.14159; let isAdult = true;
  var console.log(22); </script>
```

Ce qui a progressé : ✅ j'écris maintenant dans le bon fichier, et ✅ la valeur de PI est complète.

| Exercice | Mon erreur | Explication | Corrigé par moi ? |
|---|---|---|---|
| 1 | J'ai mis `<script` et `</script>` dans le fichier `.js` | Ce sont des balises **HTML**. Un fichier `.js` ne contient que du JavaScript, et JS ne comprend pas ces balises (erreur de syntaxe) | ⬜ |
| 1 | `let Pi` (erreur de la tentative 1, pas encore corrigée) | Le mot-clé et le nom ne correspondent toujours pas à l'énoncé | ⬜ |
| 1 | `var console.log(...)` (erreur de la tentative 1, pas encore corrigée) | `var` crée une boîte, `console.log` affiche : les deux ne vont pas ensemble | ⬜ |
| 1 | `console.log(22)` | **Nouvelle erreur** : j'affiche le nombre 22 écrit à la main, au lieu d'afficher ce que contient la boîte | ⬜ |
| 1 | Une seule valeur affichée (erreur de la tentative 1, pas encore corrigée) | Il faut afficher chaque variable | ⬜ |

---

# Exercices sur les objets

## Vérification de compréhension (avant l'exercice)

Questions posées par l'IA après l'explication de la théorie. Mes réponses sont recopiées telles quelles.

### Théorie vue : c'est quoi un objet ? (10/11/2026)

L'IA m'a expliqué qu'un objet est comme une **fiche d'identité** : une seule boîte qui range plusieurs informations sur une même chose. Chaque information est une paire `clé: valeur`. Les accolades `{ }` ouvrent et ferment l'objet, le `:` sépare la clé de la valeur, et une virgule sépare les paires. Exemple utilisé :

```js
const book = {
  title: 'Le Petit Prince',
  author: 'Saint-Exupéry',
  year: 1943
};
```

| Question | Ma réponse | Résultat |
|---|---|---|
| Dans la ligne `year: 1943`, quelle est la clé et quelle est la valeur ? Combien de propriétés l'objet `book` contient-il ? | « le petit prince » | ❌ `'Le Petit Prince'` est bien une valeur, mais celle de la ligne `title`, pas de la ligne `year`. Je n'ai pas répondu au nombre de propriétés |

**Vérification faite par l'IA :** elle ne m'a pas donné la réponse. Elle m'a rappelé que le `:` sépare toujours la clé (à gauche) de la valeur (à droite), et m'a montré la ligne `title: 'Le Petit Prince'` découpée en clé / valeur dans un tableau. Pour la ligne `year`, elle a laissé les cases vides avec des `?`, à remplir moi-même. Elle m'a ensuite reposé les deux questions :

1. Dans `year: 1943`, quelle est la clé ? Quelle est la valeur ?
2. Combien y a-t-il de lignes `clé: valeur` dans `book`, donc combien de propriétés ?

### Deuxième essai

| Question | Ma réponse | Résultat |
|---|---|---|
| Dans `year: 1943`, quelle est la clé ? Quelle est la valeur ? | « l'année qui = a 1943 » | ⚠️ Valeur juste (`1943`) ✅. Pour la clé, j'ai compris l'idée (« l'année »), mais la clé est le mot exact écrit dans le code : `year` |
| Combien de propriétés l'objet `book` contient-il ? | « propiaité » | ❌ J'ai répété le mot « propriété » sans donner de nombre |

**Vérification faite par l'IA :** elle m'a expliqué que la clé n'est pas sa traduction en français, mais le mot exact à gauche du `:`, car c'est ce mot qu'on écrira plus tard pour lire la valeur. Pour le nombre de propriétés, elle m'a demandé de compter une par une les lignes `clé: valeur` dans les `{ }`.

### Troisième essai

| Question | Ma réponse | Résultat |
|---|---|---|
| Quel mot exact se trouve à gauche du `:` dans `year: 1943` ? | « year » | ✅ |
| Combien de propriétés contient `book` ? | « il y a 3 lignes » | ✅ 3 lignes `clé: valeur`, donc 3 propriétés |

→ Notion « clé / valeur / propriété » comprise.

### Théorie vue : lire une propriété avec le point (10/11/2026)

L'IA m'a expliqué qu'on lit une valeur avec `nomDeLObjet.clé` (le point veut dire « dans cet objet, prends la propriété… »). L'exemple utilisait un autre objet que celui de l'exercice (`phone`).

→ Je n'ai pas répondu à cette question : j'ai demandé à passer directement aux exercices dans `js-objets/main.js`. L'IA relit chaque tentative, me dit ce qui est juste ou faux (sans me donner la solution), et je recommence.

## Corrections de l'exercice sur les objets

### Tentative 1 — exercice 1 (10/11/2026)

Code que j'ai écrit (il n'était pas encore enregistré dans `js-objets/main.js`, je l'ai collé dans le chat) :

```js
const book = {
  title: 'Le Petit Prince',
  author: 'Antoine de Saint-Exupéry',
  year: 1943,
  available: true,
};
```

| Exercice | Résultat | Explication | Corrigé par moi ? |
|---|---|---|---|
| 1 a | ✅ Juste | Les 4 propriétés demandées, `available` est bien un booléen, syntaxe correcte (`{ }`, `:`, virgules) | — |
| 1 a | ⚠️ Pas enregistré | Le code n'est pas dans le fichier : le navigateur ne peut pas l'exécuter. J'appuyais sur Ctrl + S alors que le curseur était dans le chat, pas dans le fichier | ✅ Enregistré à 10 h 41 |
| 1 a | ⚠️ Mal placé | Code collé en haut du fichier, au-dessus du titre « 1. Créer et lire », au lieu d'être sous la consigne a) | ✅ Déplacé sous la consigne a) à 10 h 43 |
| 1 b, c, d | ⬜ Pas encore faits | — | ⬜ |

### Tentative 2 — exercice 1 (10/11/2026, 10 h 43)

Mon code, enregistré dans `js-objets/main.js`, sous la consigne a) :

```js
// a) Crée un objet book avec les propriétés title, author, year et available (booléen).
const book = {
  title: 'Le Petit Prince',
  author: 'Antoine de Saint-Exupéry',
  year: 1943,
  available: true,
};
```

| Exercice | Résultat | Explication | Corrigé par moi ? |
|---|---|---|---|
| 1 a | ✅ Validé | Objet juste, enregistré et à la bonne place | ✅ |
| 1 b, c, d | ⬜ Pas encore faits | — | ⬜ |

Ce qui a progressé : ✅ je sais maintenant enregistrer le fichier (cliquer dans le code, puis Ctrl + S), et ✅ je place mon code sous la bonne consigne.

### Tentative 3 — exercice 1 b, c, d (10/11/2026, 10 h 47)

Mon code, tel quel :

```js
// b) Affiche le titre avec la notation point, puis l'auteur avec la notation crochets.
console.log(book.title);
console.log(book['author']);

// c) Déclare const key = 'year'; et affiche l'année en utilisant key.
const key = 'year';
console.log(book.key);

// d) Affiche book.pages : que vaut une propriété qui n'existe pas ?
// Ma réponse :
console.log(book.pages);
```

| Exercice | Résultat | Explication | Corrigé par moi ? |
|---|---|---|---|
| 1 b | ✅ Juste | Le titre est lu avec le point, l'auteur avec les crochets et des guillemets | — |
| 1 c | ✅ `const key = 'year';` juste | — | — |
| 1 c | ❌ `book.key` affiche `undefined` au lieu de `1943` | Avec le point, JavaScript prend le mot écrit **tel quel** : il cherche une propriété qui s'appelle littéralement `key`. Elle n'existe pas dans `book`. Il ne regarde pas ce qu'il y a **dans** la variable `key` | ⬜ |
| 1 d | ✅ Le `console.log` est juste | — | — |
| 1 d | ⬜ Réponse pas écrite | Il faut écrire après `// Ma réponse :` ce que la console affiche | ⬜ |

**Après la tentative 3 :** j'ai dit « honnêtement je sais pas » pour le c). L'IA m'a réexpliqué les crochets avec une variable, sur un **autre objet** que celui de l'exercice (`phone`), sans écrire la ligne de l'exercice.

### Tentative 4 — exercice 1 c, d (10/11/2026, 10 h 59)

Mon code, tel quel :

```js
// c) Déclare const key = 'year'; et affiche l'année en utilisant key.
const key = 'year';
console.log(book.key); 1943

// d) Affiche book.pages : que vaut une propriété qui n'existe pas ?
// Ma réponse :en gros, ça vaut undefined. C'est comme si on demandait à quelqu'un de nous donner quelque chose qu'il n'a pas : il ne peut pas nous le donner, donc on obtient "rien" (undefined).
console.log(book.pages);
```

| Exercice | Résultat | Explication | Corrigé par moi ? |
|---|---|---|---|
| 1 c | ❌ Toujours `book.key` | La ligne n'a pas changé : elle utilise encore le point, donc la console affiche toujours `undefined` | ⬜ |
| 1 c | ❌ `1943` écrit à la main après la ligne | Écrire `1943` dans le code n'affiche rien et ne lit pas l'objet : c'est juste un nombre posé là. C'est `console.log(...)` qui doit **trouver** 1943 dans `book` grâce à `key`. (Même erreur que dans l'exercice sur les variables : écrire la valeur à la main au lieu de la lire) | ⬜ |
| 1 d | ✅ Juste | Une propriété qui n'existe pas vaut `undefined`. Bonne comparaison avec la vie réelle | ✅ |

**Explication donnée dans le chat (11 h 00), recopiée telle quelle :** « Avec la notation point, JavaScript cherche une propriété qui s'appelle littéralement "key", et elle n'existe pas. Pour utiliser la valeur d'une variable comme nom de propriété, il faut les crochets. »

→ ✅ Explication juste. Mais le code du 1 c n'est pas encore corrigé : le `1943` a été retiré, mais la ligne est toujours `console.log(book.key);`.

### Tentative 5 — exercice 1 c (10/11/2026, 11 h 01)

```js
const key = 'year';
console.log(key);
```

| Exercice | Résultat | Explication | Corrigé par moi ? |
|---|---|---|---|
| 1 c | ❌ `console.log(key)` affiche `year`, pas `1943` | J'ai bien enlevé le point, mais j'ai aussi enlevé `book` et je n'ai pas mis de crochets. J'affiche donc seulement le contenu de la boîte `key` (le mot `year`) sans aller chercher dans l'objet `book` | ⬜ |

### Tentative 6 — exercice 1 c (10/11/2026, 11 h 02)

```js
const key = 'year';
console.log(key); 1943
```

| Exercice | Résultat | Explication | Corrigé par moi ? |
|---|---|---|---|
| 1 c | ❌ Toujours `console.log(key)` | Pas de `book`, pas de crochets : la console affiche toujours `year` | ⬜ |
| 1 c | ❌ `1943` réécrit à la main | Même erreur qu'à la tentative 4 : écrire le résultat à la main ne fait pas lire l'objet | ⬜ |

L'IA m'a donné un modèle à trous (la forme de la ligne avec des cases vides), sans remplir les cases.

### Tentative 7 — exercice 1 c (10/11/2026, 11 h 03)

```js
const key = 'year';
console.log(book[key]);
```

| Exercice | Résultat | Explication | Corrigé par moi ? |
|---|---|---|---|
| 1 c | ✅ Juste | L'objet `book`, des crochets, et la variable `key` sans guillemets : JavaScript lit `'year'` dans `key`, puis va chercher `book.year`, et affiche `1943`. Le `1943` écrit à la main a été supprimé | ✅ |

### Bilan de l'exercice 1

| Exercice | Résultat final |
|---|---|
| 1 a | ✅ |
| 1 b | ✅ (du premier coup) |
| 1 c | ✅ après 5 essais : le plus difficile pour moi a été de comprendre la différence entre `book.key` (le mot « key » pris à la lettre) et `book[key]` (le contenu de la variable). J'ai su l'expliquer avec des mots avant de savoir l'écrire en code |
| 1 d | ✅ |

### Tentative 1 — exercice 2 (10/11/2026, 11 h 15)

Avant l'exercice, l'IA m'a expliqué (avec un objet `phone`, pas `book`) : `objet.clé = valeur;` pour modifier ou ajouter, et `delete objet.clé;` pour supprimer.

Mon code, tel quel :

```js
// a) Modifie l'année de book.
book.year = 1946;
book.pages = 96;
delete book.available

// b) Ajoute une propriété pages.
console.log(book);
// const empêche de réassigner la variable (book = {...}),
// mais pas de modifier le contenu de l'objet : book garde la même référence.

// c) Supprime la propriété available.


// d) Affiche book. Il est déclaré avec const : pourquoi peut-on quand même le modifier ?
// Ma réponse : Parce que const empêche de réassigner la variable, mais pas de modifier le contenu de l'objet.
```

| Exercice | Résultat | Explication | Corrigé par moi ? |
|---|---|---|---|
| 2 a | ✅ `book.year = 1946;` juste | — | — |
| 2 b | ✅ `book.pages = 96;` juste | — | — |
| 2 c | ✅ `delete book.available` juste | Petit détail : il manque le `;` à la fin (ça marche quand même, mais toutes mes autres lignes en ont un) | ⬜ |
| 2 d | ✅ `console.log(book);` juste | — | — |
| 2 (tout) | ⚠️ Mal rangé | Les lignes b, c et d sont toutes écrites sous la consigne a) ou b) au lieu d'être chacune sous sa propre consigne. Le commentaire sur `const` est en double (sous b et sous d) | ⬜ |
| 2 d | ⚠️ Réponse juste, mais vocabulaire pas encore vu en cours | « réassigner » et « référence » n'ont pas été expliqués par l'IA. L'IA me demande de réexpliquer avec mes propres mots pour vérifier que je comprends vraiment | ⬜ |

### Tentative 2 — exercice 2 (10/11/2026, 11 h 18)

Rangement : ✅ chaque ligne est maintenant sous sa consigne (a, b, c, d). Restent : le `;` manquant après `delete book.available`, et le commentaire sur `const` toujours en double sous b).

Vérification de compréhension sur `const` :

| Question | Ma réponse | Résultat |
|---|---|---|
| Qu'est-ce que tu as le droit de faire dans l'exercice 2 ? | « j'ai modif l'année et je suis parti a une page présice » | ✅ J'ai bien changé ce qu'il y a **dans** l'objet (l'année, ajout des pages) |
| C'est quoi « réassigner » `book` ? Exemple de ce que `const` interdit ? | Pas de réponse | ⬜ L'IA me l'a expliqué avec une image (la boîte et son contenu), puis m'a reposé la question |

| Question | Ma réponse | Résultat |
|---|---|---|
| Ligne A `book.title = 'Vol de nuit';` ou ligne B `book = { title: 'Vol de nuit', year: 1931 };` : laquelle provoque une erreur à cause de `const`, et pourquoi ? | « la 2 je dirai car title est mis en parathese » | ⚠️ Bonne ligne (B) ✅, mais mauvaise raison ❌ : ce ne sont pas des parenthèses mais des accolades `{ }`, et le problème n'est pas `title`. L'erreur vient de `book =` : on essaie de donner à `book` un **nouvel objet** (réassigner), ce que `const` interdit |
| À quoi reconnaît-on une ligne qui réassigne `book` ? | « c mis book = title et pas book.tittle » | ✅ Idée juste : quand il y a `book =` directement, sans `.propriété` entre `book` et le `=`. (Précision : à droite du `=` dans la ligne B, il y a un nouvel objet `{ … }`, pas `title`) |

→ Notion « `const` interdit de réassigner, mais autorise de modifier le contenu de l'objet » comprise.

### Tentative 3 — exercice 2 (10/11/2026, 11 h 47)

```js
// a) Modifie l'année de book.
book.year = 1946;

// b) Ajoute une propriété pages.
book.pages = 96;

// c) Supprime la propriété available.
delete book.available;

// d) Affiche book. Il est déclaré avec const : pourquoi peut-on quand même le modifier ?
console.log(book);
// Ma réponse : Parce que const empêche de réassigner la variable, mais pas de modifier le contenu de l'objet.
```

| Exercice | Résultat | Corrigé par moi ? |
|---|---|---|
| 2 c | ✅ `;` ajouté | ✅ |
| 2 | ✅ Commentaire en double supprimé, chaque ligne sous sa consigne | ✅ |

### Bilan de l'exercice 2

| Exercice | Résultat final |
|---|---|
| 2 a, b, c | ✅ Code juste du premier coup ; il a fallu ranger chaque ligne sous sa consigne |
| 2 d | ✅ Réponse juste. J'avais d'abord utilisé des mots pas encore vus (« réassigner », « référence ») ; après les questions de l'IA, j'ai su expliquer avec mes mots que `book = …` est interdit avec `const`, mais que `book.year = …` est autorisé |

### Tentative 1 — exercice 3 (10/11/2026, 11 h 57)

Avant l'exercice, l'IA m'a expliqué l'écriture raccourcie (`{ brand, price }` au lieu de `{ brand: brand, price: price }`) avec un objet `phone`. Je n'ai pas répondu à la question d'entraînement (objet `place`) : je suis passé directement à l'exercice.

Mon code, tel quel :

```js
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

// ----- 4. Objets imbriqués -----
// a) Crée un objet user avec un nom et une propriété address
//    contenant street, city et zip.
const alice = createUser('Alice', 30, 'Alice@gmail.com');
console.log(getUserInfo(alice));
```

| Exercice | Résultat | Explication | Corrigé par moi ? |
|---|---|---|---|
| 3 a | ✅ Juste | La fonction reçoit 3 paramètres et retourne un objet en écriture raccourcie | — |
| 3 b | ✅ Juste | Utilise un gabarit (backticks et `${ }`) pour construire la phrase | — |
| 3 (test) | ⚠️ Mal placé | Les deux lignes qui testent les fonctions (`const alice = …` et `console.log(…)`) sont sous la consigne **4 a)** au lieu d'être dans l'exercice 3 | ⬜ |
| 3 b | ❓ À vérifier | Les backticks et `${ }` n'ont pas été revus aujourd'hui : l'IA me demande d'expliquer avec mes mots ce que fait `${user.name}` | ⬜ |

| Question | Ma réponse | Résultat |
|---|---|---|
| Que fait `${user.name}` dans la phrase ? | « il donne le nom de la personne » | ✅ Il met la valeur de `user.name` à cet endroit de la phrase |
| Pourquoi des backticks `` ` `` et pas des `' '` ? | « ça change quoi ça reviens au meme » | ❌ Ce n'est pas pareil : avec des guillemets simples, `${ }` n'est pas remplacé, la console affiche le texte `${user.name}` tel quel. Seuls les backticks remplacent `${ }` par la valeur. L'IA m'a demandé de le tester moi-même dans la console |
