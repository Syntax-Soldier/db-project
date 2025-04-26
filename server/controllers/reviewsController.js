const db = require('../db'); // assuming you have a db.js file exporting your db connection

exports.getAllReviews = (req, res) => {
  db.query('SELECT * FROM reviews', (err, results) => {
    if (err) {
      console.error('Error fetching reviews:', err);
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
};

exports.addReview = (req, res) => {
  const { movie_id, reviewer_name, review_text, rating } = req.body;

  if (!movie_id || !reviewer_name || !review_text || !rating) {
    return res.status(400).send('All fields are required.');
  }

  db.query(
    'INSERT INTO reviews (movie_id, reviewer_name, review_text, rating) VALUES (?, ?, ?, ?)',
    [movie_id, reviewer_name, review_text, rating],
    (err, results) => {
      if (err) {
        console.error('Error inserting review:', err);
        res.status(500).send(err);
      } else {
        res.status(201).send('Review added successfully!');
      }
    }
  );
};
