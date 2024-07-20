const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

// Route to handle button click with GET method
app.get('/button-clicked', (req, res) => {
    res.json({ message: 'Button clicked' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
