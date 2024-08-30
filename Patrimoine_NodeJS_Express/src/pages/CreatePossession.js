import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePossession = () => {
  const [libelle, setLibelle] = useState('');
  const [valeur, setValeur] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [taux, setTaux] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/possessions', {
        libelle,
        valeur,
        dateDebut,
        dateFin,
        taux,
      });

      if (response.status === 201) {
        navigate('/possessions'); 
      }
    } catch (error) {
      setError('An error occurred while creating the possession.');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center text-primary">Créer une Nouvelle Possession</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="p-4 rounded border border-primary bg-white shadow">
        <div className="mb-3">
          <label htmlFor="libelle" className="form-label text-secondary">Libellé</label>
          <input
            type="text"
            className="form-control border-primary"
            id="libelle"
            value={libelle}
            onChange={(e) => setLibelle(e.target.value)}
            placeholder="Entrez le libellé de la possession"
            required
            style={{ backgroundColor: '#f0f8ff' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="valeur" className="form-label text-secondary">Valeur</label>
          <input
            type="number"
            className="form-control border-primary"
            id="valeur"
            value={valeur}
            onChange={(e) => setValeur(e.target.value)}
            placeholder="Entrez la valeur"
            required
            style={{ backgroundColor: '#f0f8ff' }}
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="dateDebut" className="form-label text-secondary">Date Début</label>
            <input
              type="date"
              className="form-control border-primary"
              id="dateDebut"
              value={dateDebut}
              onChange={(e) => setDateDebut(e.target.value)}
              required
              style={{ backgroundColor: '#f0f8ff' }}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="dateFin" className="form-label text-secondary">Date Fin</label>
            <input
              type="date"
              className="form-control border-primary"
              id="dateFin"
              value={dateFin}
              onChange={(e) => setDateFin(e.target.value)}
              style={{ backgroundColor: '#f0f8ff' }}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="taux" className="form-label text-secondary">Taux d'Amortissement (%)</label>
          <input
            type="number"
            className="form-control border-primary"
            id="taux"
            value={taux}
            onChange={(e) => setTaux(e.target.value)}
            placeholder="Entrez le taux d'amortissement"
            style={{ backgroundColor: '#f0f8ff' }}
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
          >
            Créer la Possession
          </button>
        </div>
      </form>
    </div>
  );
  
}  
export default CreatePossession;
