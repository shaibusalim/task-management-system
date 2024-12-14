const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/tasks', taskRoutes);

// Sync database and start server
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database synchronized');
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    })
    .catch((err) => console.error('Error synchronizing database:', err));
