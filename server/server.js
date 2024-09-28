const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.get('/api', (req, res) => {
  // res.json({message: 'Hello from the backend!'});
  res.json({ users: ['userOne', 'userTwo', 'userThree'] });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
