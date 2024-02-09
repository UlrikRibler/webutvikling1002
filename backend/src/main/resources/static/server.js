const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rampeterobin321',
    database: 'my_search_history' // Replace with your actual database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Endpoint to handle search input
app.post('/save-search', (req, res) => {
    const { searchText } = req.body;
    const query = 'INSERT INTO searchHistory (searchText) VALUES (?)';
    db.query(query, [searchText], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error saving search text');
            return;
        }
        res.send('Search text saved');
    });
});

const PORT = 5000; // Use a different port (e.g., 5000) for your Node.js server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
