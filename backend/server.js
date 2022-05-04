const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;

// INITIALIZE APP
const app = express();

// ROOT ROUTE
app.get('/', (req, res) => {
	res.status(200).send('Hello');
})

// ROUTES
app.use('/api/users', require('./routes/userRoutes'));

// SERVER
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));