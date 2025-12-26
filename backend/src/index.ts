import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import flagsRouter from './routes/flags';

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Backend server is running' });
});

app.use('/flags', flagsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

