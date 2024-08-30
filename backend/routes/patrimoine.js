const express = require('express');
const router = express.Router();

// Simulated database
let patrimoineValues = [];

// Get Valeur Patrimoine by date
router.get('/:date', (req, res) => {
    const { date } = req.params;

    const patrimoine = patrimoineValues.find(p => p.date === date);
    if (patrimoine) {
        res.json(patrimoine.valeur);
    } else {
        res.status(404).json({ message: 'No patrimoine found for this date' });
    }
});

// Get Valeur Patrimoine Range
router.post('/range', (req, res) => {
    const { type, dateDebut, dateFin, jour } = req.body;

    // Logic to filter patrimoineValues between dateDebut and dateFin
    const filteredValues = patrimoineValues.filter(p => {
        return p.date >= dateDebut && p.date <= dateFin;
    });

    // Logic to calculate the patrimoine range value
    // (Here you would apply more complex logic based on type, jour, etc.)

    res.json(filteredValues);
});

module.exports = router;
