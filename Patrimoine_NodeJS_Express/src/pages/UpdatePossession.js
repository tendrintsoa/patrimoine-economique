import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdatePossession = () => {
  const { libelle } = useParams();
  const [possession, setPossession] = useState({
    libelle: '',
    valeur: '',
    dateDebut: '',
    dateFin: '',
    taux: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    axios.get(`http://localhost:5000/api/possessions/${libelle}`)
      .then(response => {
        setPossession(response.data);
      })
      .catch(error => {
        setError('Erreur lors de la récupération des détails de la possession.');
      });
  }, [libelle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPossession(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    axios.put(`http://localhost:5000/api/possessions/${libelle}`, possession)
      .then(response => {
        alert('Possession mise à jour avec succès');
        navigate('/possessions'); 
      })
      .catch(error => {
        setError('Erreur lors de la mise à jour de la possession.');
      });
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center text-info">Mettre à Jour la Possession</h1>
      {error && <div className="alert alert-danger text-center">{error}</div>}
      <form onSubmit={handleSubmit} className="p-4 rounded bg-white border border-info shadow-lg">
        <div className="mb-3">
          <label className="form-label text-secondary">Libellé</label>
          <input
            type="text"
            className="form-control border-info"
            name="libelle"
            value={possession.libelle}
            onChange={handleChange}
            disabled
            style={{ backgroundColor: '#f5f5f5' }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-secondary">Valeur</label>
          <input
            type="number"
            className="form-control border-info"
            name="valeur"
            value={possession.valeur}
            onChange={handleChange}
            required
            style={{ backgroundColor: '#eafaf1' }}
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label text-secondary">Date Début</label>
            <input
              type="date"
              className="form-control border-info"
              name="dateDebut"
              value={possession.dateDebut}
              onChange={handleChange}
              required
              style={{ backgroundColor: '#eafaf1' }}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label text-secondary">Date Fin</label>
            <input
              type="date"
              className="form-control border-info"
              name="dateFin"
              value={possession.dateFin || ''}
              onChange={handleChange}
              style={{ backgroundColor: '#eafaf1' }}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="form-label text-secondary">Taux d'Amortissement (%)</label>
          <input
            type="number"
            className="form-control border-info"
            name="taux"
            value={possession.taux}
            onChange={handleChange}
            required
            style={{ backgroundColor: '#eafaf1' }}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-info btn-lg">
            Mettre à Jour
          </button>
        </div>
      </form>
    </div>
  );
  
}

export default UpdatePossession;
