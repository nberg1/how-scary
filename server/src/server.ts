import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
  // res.json({message: 'Hello from the backend!'});
  res.json({ users: ['userOne', 'userTwo', 'userThree'] });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../client/build')));

// Catch-all handler
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
