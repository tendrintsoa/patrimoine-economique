import React from 'react';
import PossessionActions from './PossessionActions';

const PossessionTable = () => {
  const possessions = [
    // Exemple de données
    { libelle: 'Car', valeur: 10000, dateDebut: '2021-01-01', dateFin: '', taux: 5, valeurActuelle: 9500 },
    // Ajoutez d'autres possessions ici
  ];

  return (
    <table>
      <thead>
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
        {possessions.map((possession, index) => (
          <tr key={index}>
            <td>{possession.libelle}</td>
            <td>{possession.valeur}</td>
            <td>{possession.dateDebut}</td>
            <td>{possession.dateFin}</td>
            <td>{possession.taux}</td>
            <td>{possession.valeurActuelle}</td>
            <td><PossessionActions libelle={possession.libelle} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PossessionTable;
