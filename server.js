const express = require('express');
const path = require('path');

const app = express();

// Serve the main homepage
app.use('/', express.static(path.join(__dirname, 'html')));

// Serve the built React app from ring1's build directory
app.use('/ring1', express.static(path.join(__dirname, 'ring1', 'build')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
