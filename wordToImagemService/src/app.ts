import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import imageRouter from './routers/imageRouter';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(imageRouter);

export default app;