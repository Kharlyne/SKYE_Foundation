import express from "express";
import pool from '../db.js'

const router = express.Router();


// GET tous les articles
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM articles ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET un article par id
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM articles WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Article introuvable' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST créer un article
router.post("/", async (req, res) => {
  try {
    const { title, excerpt, content, category, image_url, status } = req.body;

    const result = await pool.query(
      `
      INSERT INTO articles (title, excerpt, content, category, image_url, status)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
      `,
      [title, excerpt, content, category, image_url, status || "draft"]
    );

    res.status(201).json({
      message: "Article ajouté avec succès",
      article: result.rows[0],
    });
  } catch (error) {
    console.error("Erreur ajout article :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// DELETE supprimer un article
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM articles WHERE id = $1', [req.params.id]);
    res.json({ message: 'Article supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;