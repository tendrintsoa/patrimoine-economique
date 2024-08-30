import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListPossession = () => {
  const [possessions, setPossessions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPossessions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/possessions');
        setPossessions(response.data);
      } catch (error) {
        setError('Une erreur est survenue lors de la récupération des possessions.');
      }
    };

    fetchPossessions();
  }, []);

  const handleClose = async (libelle) => {
    try {
      await axios.put(`http://localhost:5000/api/possessions/${libelle}/close`);
      // Mettre à jour l'état local pour refléter la clôture
      setPossessions(possessions.map(p => 
        p.libelle === libelle ? { ...p, dateFin: new Date().toISOString().split('T')[0] } : p
      ));
    } catch (error) {
      setError('Une erreur est survenue lors de la clôture de la possession.');
    }
  };

  return (
    <div>
      <h1>Listes des Possessions</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link className="btn btn-success" to="/possession/create">
          + Créer une nouvelle possession
        </Link>
        <span>{`Total des possessions : ${possessions.length}`}</span>
      </div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Libelle</th>
            <th>Valeur</th>
            <th>Date Début</th>
            <th>Date Fin</th>
            <th>Taux</th>
            <th>Valeur Actuelle</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {possessions.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                Aucune possession disponible.
              </td>
            </tr>
          ) : (
            possessions.map((possession) => (
              <tr key={possession.libelle}>
                <td>{possession.libelle}</td>
                <td>{possession.valeur.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</td>
                <td>{new Date(possession.dateDebut).toLocaleDateString('fr-FR')}</td>
                <td>{possession.dateFin ? new Date(possession.dateFin).toLocaleDateString('fr-FR') : 'En cours'}</td>
                <td>{possession.taux}%</td>
                <td>{(possession.valeur * (1 + possession.taux / 100)).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</td>
                <td>
                  <Link className="btn btn-info btn-sm" to={`/possession/${possession.libelle}/update`}>
                    Éditer
                  </Link>
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => handleClose(possession.libelle)}
                    disabled={!!possession.dateFin}
                  >
                    Fermer
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListPossession;
