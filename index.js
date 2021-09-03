import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import { errorHandler } from './src/middlewares/error';

// Route files
import videos from './src/routes/videos';

// Loads .env file contents into process.env
config();

const app = express();

// Body Parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/videos', videos);

// Handling errors
app.use(errorHandler);

const port = 5000;

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.warn(
    `🚀 Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`
      .yellow.bold
  )
);
