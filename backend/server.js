import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoute from './routes/contact.js';
import pool from "./db.js";
import articleRoutes from './routes/articleRoutes.js'

dotenv.config();



const app = express();

//const articlesRouter = require('./routes/articles');
//app.use('/api/articles', articlesRouter);


app.use(cors({ 
  origin: ['http://localhost:5173', 'https://skye-foundation.com'] 
}));

app.use(express.json());

app.use('/api/contact', contactRoute);

app.use("/api/articles", articleRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

// Route test
app.get("/", (req, res) => {
  res.send("Backend Skye Foundation en marche");
});

// Test connexion PostgreSQL
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Connexion PostgreSQL réussie",
      time: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erreur de connexion à PostgreSQL",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

