require('dotenv').config();
const express = require('express');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const cors = require('cors');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
	res.send('API is Running...');
});

app.use("/api/auth", require('./routes/user'));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`.green.bold);
});


