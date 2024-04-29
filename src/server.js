// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://TeamWEb:pandiyarajan@cluster0.7ospkzk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define User model
const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String,
    userId: String // Assuming userId is a string
});

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/api/login', async (req, res) => {
    // Handle login logic here
});

app.post('/api/signup', async (req, res) => {
    const { username, email, password, userId } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ success: false, message: 'Email already exists' });
        } else {
            const newUser = new User({ username, email, password, userId });
            await newUser.save();
            res.json({ success: true, message: 'Signup successful' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
