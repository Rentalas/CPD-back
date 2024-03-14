import express from 'express';
import { configureRoutes } from './routes';

const app = express();

configureRoutes(app);

app.listen(2000, () => console.log('started'))