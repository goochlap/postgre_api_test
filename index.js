import express from 'express';
import { config } from 'dotenv';

// Loads .env file contents into process.env
config();

const app = express();

// Body Parser
app.use(express.json());

const port = 5000;

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.warn(
    `🚀 Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`
  )
);
