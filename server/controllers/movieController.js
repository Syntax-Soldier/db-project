const db = require('../db');

exports.getAllMovies = (req, res) => {
  db.query('SELECT * FROM Movie', (err, results) => {
    if (err) {
      console.error('Query error:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(results);
  });
};

exports.updateMovie = (req, res) => {
  const movieId = req.query.id;
  const newTitle = req.query.title;

  console.log('Update Request Received:', movieId, newTitle);

  const query = `UPDATE movie SET title = '${newTitle}' WHERE id = ${movieId}`;

  console.log('Executing Change', query);

  db.query(query, (err, results) => {
    if (err) {
      console.error('Query Error:', err);
      return res.status(500).json({ error: 'Server Error', details: err.message });
    }
    res.json({ success: true, message: 'Movie updated!' });
  });
};
