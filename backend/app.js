const express = require('express');
const app = express();
const possessionRoutes = require('./routes/possession');
const patrimoineRoutes = require('./routes/patrimoine');

app.use(express.json());

// Possession routes
app.use('/possession', possessionRoutes);

// Patrimoine routes
app.use('/patrimoine', patrimoineRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
