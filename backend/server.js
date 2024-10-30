// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Données de cours pour l'exemple
const cours = [
  { id: 1, title: "Introduction à la programmation", content: "Contenu du cours 1" },
  { id: 2, title: "Apprendre JavaScript", content: "Contenu du cours 2" },
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
