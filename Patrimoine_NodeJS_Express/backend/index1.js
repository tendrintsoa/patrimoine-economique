import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Configurer CORS pour autoriser plusieurs origines
const allowedOrigins = ['http://localhost:3000', 'http://192.168.221.1:3000'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Origin ${origin} not allowed by CORS`));
    }
  }
}));

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Configurer __dirname pour les modules ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir le dossier "data" statiquement
app.use('/data', express.static(path.join(__dirname, 'data')));

// Données simulées
let possessions = [
  { libelle: "Voiture", valeur: 15000, dateDebut: "2022-01-01", taux: 2000, dateFin: null },
  { libelle: "Maison", valeur: 250000, dateDebut: "2018-05-15", taux: 5000, dateFin: null },
  // Ajoutez d'autres possessions ici
];

// Endpoint: Get Possession list
app.get('/api/possessions', (req, res) => {
  res.json(possessions);
});

// Endpoint: Get Possession details
app.get('/api/possessions/:libelle', (req, res) => {
  const { libelle } = req.params;
  const possession = possessions.find(p => p.libelle === libelle);
  if (possession) {
    res.json(possession);
  } else {
    res.status(404).json({ message: 'Possession not found' });
  }
});

// Endpoint: Create Possession
app.post('/api/possessions', (req, res) => {
  const { libelle, valeur, taux } = req.body;
  if (!libelle || !valeur || !taux) {
    return res.status(400).json({ message: 'Missing required fields: libelle, valeur, or taux' });
  }
  if (!possessions.find(p => p.libelle === libelle)) {
    possessions.push({ libelle, valeur, dateDebut: new Date().toISOString().split('T')[0], taux, dateFin: null });
    res.status(201).json({ message: 'Possession created' });
  } else {
    res.status(400).json({ message: 'Possession already exists' });
  }
});

// Endpoint: Update Possession
app.put('/api/possessions/:libelle', (req, res) => {
  const { libelle } = req.params;
  const updatedPossession = req.body;
  const index = possessions.findIndex(p => p.libelle === libelle);

  if (index !== -1) {
    possessions[index] = { ...possessions[index], ...updatedPossession };
    res.status(200).json({ message: 'Possession updated successfully' });
  } else {
    res.status(404).json({ message: 'Possession not found' });
  }
});

// Endpoint: Close Possession
app.put('/api/possessions/:libelle/close', (req, res) => {
  const { libelle } = req.params;
  const possession = possessions.find(p => p.libelle === libelle);

  if (possession) {
    possession.dateFin = new Date().toISOString().split('T')[0];
    res.status(200).json({ message: 'Possession closed successfully' });
  } else {
    res.status(404).json({ message: 'Possession not found' });
  }
});

// Configurer le port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
