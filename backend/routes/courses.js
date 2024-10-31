// backend/routes/courses.js
app.get('/api/cours/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);
    if (course) {
      res.json(course);
    } else {
      res.status(404).send({ message: "Cours non trouvé" });
    }
  });
  