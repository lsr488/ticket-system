const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;

// Connect to db
connectDB();

// INITIALIZE APP
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// ROOT ROUTE
app.get('/', (req, res) => {
	res.status(200).json({message: 'Welcome to the Ticket System API'});
})

// ROUTES
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

// MORE MIDDLEWARE
app.use(errorHandler);

// SERVER
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));