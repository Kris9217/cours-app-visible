// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Données de cours pour l'exemple
const cours = [
  { 
    id: 1, 
    title: "Introduction à la programmation", 
    content: `Qu’est-ce que la Programmation ?\n
La programmation, c'est l'art de donner des instructions précises à un ordinateur pour qu'il effectue des tâches spécifiques. Cela se fait grâce à des langages de programmation, des outils que les programmeurs utilisent pour communiquer avec les machines. À travers ce processus, l'ordinateur est capable de réaliser des opérations mathématiques, de gérer des données, d'automatiser des tâches, de contrôler des appareils, et bien plus encore.
\n
Pourquoi apprendre la Programmation ?
Apprendre à programmer offre plusieurs avantages :
- Résolution de problèmes : la programmation aide à développer une pensée logique et méthodique.
- Créativité : elle permet de créer des logiciels, des jeux, des applications mobiles, etc.
- Carrières : de nombreuses opportunités professionnelles sont accessibles grâce à la programmation.
- Automatisation : automatiser des tâches répétitives peut faire gagner beaucoup de temps.

Comprendre les Langages de Programmation
Les langages de programmation permettent de donner des instructions à l'ordinateur de manière compréhensible. Les plus courants incluent Python, JavaScript, Java, et C++. Chaque langage a ses propres usages et caractéristiques. Par exemple :
- Python : simple et polyvalent, souvent utilisé pour l’apprentissage, les scripts, et l’intelligence artificielle.
- JavaScript : essentiel pour le développement web, il permet d’ajouter des fonctionnalités interactives aux pages web.
- Java : utilisé pour les applications Android, les jeux et les systèmes d’entreprise.
- C++ : très performant, utilisé pour les logiciels, les jeux et les systèmes d’exploitation.

Les Concepts Fondamentaux
Voici les concepts clés que chaque programmeur doit connaître :
- Variables : contiennent des valeurs, telles que des nombres ou des mots, et permettent de stocker des informations temporairement.
- Conditions (Si/Alors) : permettent de prendre des décisions dans le programme, par exemple : si une certaine condition est vraie, alors faire quelque chose.
- Boucles : permettent de répéter une série d’instructions plusieurs fois, par exemple en affichant une série de nombres.
- Fonctions : regroupent des instructions en un bloc réutilisable, facilitant ainsi la gestion du code.
- Types de données : chaque information manipulée a un type (nombre, texte, liste, etc.) qui détermine la manière dont elle est traitée.

L’Importance de la Logique et de l’Algorithme
Un algorithme est un ensemble d'étapes à suivre pour résoudre un problème. La logique algorithmique est l’une des bases de la programmation. En pensant en étapes logiques, un programmeur peut diviser un problème complexe en plusieurs petites parties simples.

De l’Idée au Code : le Processus de Programmation
La programmation suit généralement un processus en plusieurs étapes :
1. Définir le problème : comprendre ce que l’on veut réaliser.
2. Planifier : organiser les étapes nécessaires pour résoudre le problème (utiliser un algorithme).
3. Écrire le code : transcrire les étapes en langage de programmation.
4. Tester : exécuter le code pour vérifier qu’il fonctionne et résoudre les erreurs éventuelles.
5. Améliorer : optimiser le code pour qu’il soit plus efficace, plus rapide, ou plus lisible.

Pratiquer la Programmation
La meilleure façon d'apprendre à programmer est de pratiquer régulièrement. Voici quelques conseils pour progresser :
- Commencer par des exercices simples : tels que créer une calculatrice ou un générateur de nombres aléatoires.
- Lire et comprendre le code des autres : cela permet de voir différentes manières de résoudre un problème.
- Participer à des défis de code : des plateformes comme LeetCode, Codewars ou HackerRank proposent des défis pour les débutants.

Conclusion
La programmation est un domaine riche et vaste. Chaque langage a ses spécificités et chacun répond à des besoins particuliers. En maîtrisant les bases de la programmation et en pratiquant régulièrement, il est possible de créer des solutions puissantes et de s’ouvrir à de nombreuses opportunités.`
},

{ 
  id: 2, 
  title: "Apprendre JavaScript", 
  content: `JavaScript est l'un des langages de programmation les plus populaires au monde, principalement utilisé pour rendre les pages web interactives et dynamiques. Voici un aperçu des bases pour commencer à apprendre JavaScript.

1. **Qu'est-ce que JavaScript ?**
 JavaScript est un langage de programmation côté client, ce qui signifie qu'il est exécuté dans le navigateur de l'utilisateur. Cela permet d'ajouter de l'interactivité aux pages web, de manipuler les éléments du DOM (Document Object Model), et de créer des expériences utilisateur enrichies.

2. **Pourquoi apprendre JavaScript ?**
 - **Popularité et demande** : JavaScript est essentiel pour le développement web moderne, et une compétence précieuse pour de nombreux emplois en développement.
 - **Polyvalence** : avec JavaScript, vous pouvez créer des sites web, des applications mobiles (grâce à des frameworks comme React Native), et même des applications backend avec Node.js.
 - **Écosystème riche** : JavaScript dispose de nombreux frameworks et bibliothèques comme React, Vue, et Angular, qui simplifient le développement et permettent de créer des applications complexes.

3. **Les Bases de JavaScript**
 - **Variables** : stockent des informations que vous pouvez réutiliser. On déclare une variable avec let, const, ou var.

 Exemple : 
 \`\`\`javascript
 let nom = "Alice";
 const PI = 3.14;
 \`\`\`

 - **Types de données** : JavaScript gère différents types de données, tels que les nombres, les chaînes de caractères, les tableaux, et les objets.

 Exemple : 
 \`\`\`javascript
 let nombre = 42;
 let texte = "Bonjour";
 let tableau = [1, 2, 3];
 let objet = { nom: "Alice", age: 30 };
 \`\`\`

 - **Opérateurs** : utilisés pour effectuer des opérations sur les variables, comme l'addition, la soustraction, la comparaison, etc.
 - **Conditions** : permettent de prendre des décisions dans le code avec des instructions if, else if, et else.

 Exemple :
 \`\`\`javascript
 if (age > 18) {
     console.log("Adulte");
 } else {
     console.log("Mineur");
 }
 \`\`\`
 - **Boucles** : répétition de blocs de code, notamment avec for et while.
 Exemple :
 \`\`\`javascript
 for (let i = 0; i < 5; i++) {
     console.log(i);
 }
 \`\`\`

4. **Fonctions**
 Les fonctions permettent de regrouper un ensemble d'instructions que l'on peut exécuter plusieurs fois avec des arguments différents. 
 Exemple de fonction :
 \`\`\`javascript
 function saluer(nom) {
     return "Bonjour " + nom;
 }
 console.log(saluer("Alice"));
 \`\`\`

5. **Introduction au DOM**
 Le DOM (Document Object Model) est une interface qui permet d’interagir avec les éléments HTML d’une page. JavaScript peut manipuler le DOM pour modifier le contenu, les styles, et la structure de la page en temps réel.
 Exemple de manipulation du DOM :
 \`\`\`javascript
 document.getElementById("titre").innerHTML = "Nouveau Titre";
 \`\`\`

6. **Les Événements**
 Les événements permettent de déclencher du code JavaScript en réponse à une action utilisateur, comme un clic, une saisie clavier, ou un survol de souris. Cela rend les pages web interactives.
 Exemple :
 \`\`\`javascript
 document.getElementById("monBouton").addEventListener("click", function() {
     alert("Bouton cliqué !");
 });
 \`\`\`

7. **Les Objets et Tableaux**
 Les objets en JavaScript sont des collections de propriétés et méthodes, et les tableaux sont utilisés pour stocker des listes d'éléments.
 Exemple d'objet :
 \`\`\`javascript
 let utilisateur = { nom: "Alice", age: 25, saluer: function() { return "Bonjour"; } };
 \`\`\`
 Exemple de tableau :
 \`\`\`javascript
 let nombres = [1, 2, 3, 4, 5];
 \`\`\`

8. **Conclusion**
 JavaScript est un langage puissant et accessible. Apprendre JavaScript vous permettra de créer des pages web interactives et de maîtriser les bases du développement moderne. En progressant, vous pourrez explorer les frameworks et les bibliothèques pour développer des applications web plus complexes.

Bon apprentissage !`
},

  // Ajoutez d'autres cours ici
];

// Endpoint pour récupérer tous les cours
app.get('/api/cours', (req, res) => {
  res.json(cours);
});

// Endpoint pour récupérer un cours spécifique par ID
app.get('/api/cours/:id', (req, res) => {
  const courseId = parseInt(req.params.id, 10);
  const course = cours.find(c => c.id === courseId);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: "Cours non trouvé" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur backend en écoute sur le port ${PORT}`);
});
