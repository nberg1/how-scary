import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: "How Scary", message: 'Welcome to How Scary Webpage'});
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});