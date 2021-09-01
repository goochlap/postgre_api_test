import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';

// Route files
import route from './src/routes';

// Loads .env file contents into process.env
config();

const app = express();

// Body Parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

route(app);

const port = 5000;

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.warn(
    `🚀 Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`
      .yellow.bold
  )
);
