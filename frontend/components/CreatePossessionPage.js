import React, { useState } from 'react';

const CreatePossessionPage = () => {
  const [libelle, setLibelle] = useState('');
  const [valeur, setValeur] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [taux, setTaux] = useState('');

  const handleCreate = () => {
    // API call to create the possession
    console.log({ libelle, valeur, dateDebut, taux });
  };

  return (
    <div>
      <h1>Create Possession</h1>
      <input type="text" placeholder="Libelle" value={libelle} onChange={(e) => setLibelle(e.target.value)} />
      <input type="number" placeholder="Valeur" value={valeur} onChange={(e) => setValeur(e.target.value)} />
      <input type="date" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} />
      <input type="number" placeholder="Taux" value={taux} onChange={(e) => setTaux(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreatePossessionPage;
