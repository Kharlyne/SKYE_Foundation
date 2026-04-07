const express = require('express');
const router = express.Router();
const db = require('../db');

// GET tous les articles
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM articles ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET un article par id
router.get('/:id', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM articles WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Article introuvable' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST créer un article
router.post('/', async (req, res) => {
  const { title, content, excerpt, image_url, gallery, category, date, language } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO articles (title, content, excerpt, image_url, gallery, category, date, language)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [title, content, excerpt, image_url, gallery || [], category, date, language || 'fr']
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE supprimer un article
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM articles WHERE id = $1', [req.params.id]);
    res.json({ message: 'Article supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;