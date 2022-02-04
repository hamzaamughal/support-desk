const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Support Desk API' });
});

app.use('/api/users', require('./routes/userRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
