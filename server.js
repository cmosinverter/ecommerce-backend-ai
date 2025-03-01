import express from 'express';
import cors from 'cors';
import { sequelize } from './models/index.js';
import { Item } from './models/Item.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express.js backend!' });
});

// API route example
app.get('/api/data', async (req, res) => {
  const items = await Item.findAll();
  res.json({ success: true, data: items });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Sync database and create a sample item
await sequelize.sync();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
