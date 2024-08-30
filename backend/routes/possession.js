const express = require('express');
const router = express.Router();

// Simulated database
let possessions = [];

// Get Possession list
router.get('/', (req, res) => {
    res.json(possessions);
});

// Create Possession
router.post('/', (req, res) => {
    const { libelle, valeur, dateDebut, taux } = req.body;
    const newPossession = { libelle, valeur, dateDebut, taux, dateFin: null };
    possessions.push(newPossession);
    res.status(201).json(newPossession);
});

// Update Possession by libelle
router.put('/:libelle', (req, res) => {
    const { libelle } = req.params;
    const { dateFin } = req.body;

    const possession = possessions.find(p => p.libelle === libelle);
    if (possession) {
        possession.dateFin = dateFin;
        res.json(possession);
    } else {
        res.status(404).json({ message: 'Possession not found' });
    }
});

// Close Possession (set dateFin to current Date)
router.put('/:libelle/close', (req, res) => {
    const { libelle } = req.params;

    const possession = possessions.find(p => p.libelle === libelle);
    if (possession) {
        possession.dateFin = new Date().toISOString();
        res.json(possession);
    } else {
        res.status(404).json({ message: 'Possession not found' });
    }
});

module.exports = router;
