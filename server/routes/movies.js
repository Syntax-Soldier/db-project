const express = require('express');
const router = express.Router();
const { getAllMovies } = require('../controllers/movieController');
router.get('/movies/update', movieController.updateMovie);
router.get('/', getAllMovies);
module.exports = router;
