import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoute from './routes/contact.js';

dotenv.config();

const app = express();


app.use(cors({ 
  origin: ['http://localhost:5173', 'https://skye-foundation.com'] 
}));

app.use(express.json());

app.use('/api/contact', contactRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});