require('dotenv').config();
const express = require('express');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const cors = require('cors');
const connectDB = require('./config/db');
const admin = require("firebase-admin");

const PORT = process.env.PORT || 5000;

connectDB();

// Firebase
const firebaseServiceAccount = require("./firebase/serviceAccount.json");
admin.initializeApp({
	credential: admin.credential.cert(firebaseServiceAccount),
});

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Main page to know that the API is running 
app.get('/', (req, res) => {
	res.send('API is Running...');
});

// Routes
app.use('/api/users', require('./routes/user'));

// See if the server is running or not
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`.green.bold);
});
