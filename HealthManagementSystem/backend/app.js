const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/health_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
