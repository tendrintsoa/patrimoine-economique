import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdatePossessionPage = () => {
  const { libelle } = useParams();
  const [dateFin, setDateFin] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await fetch(`/api/possessions/${libelle}/update`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dateFin }),
      });

      if (!response.ok) {
        throw new Error('Failed to update possession');
      }

      const result = await response.json();
      console.log('Update successful', result);
      // Optionally, redirect or update UI
    } catch (error) {
      console.error('Error updating possession:', error);
    }
  };

  return (
    <div>
      <h1>Update Possession</h1>
      <label>
        Libelle:
        <input type="text" value={libelle} readOnly />
      </label>
      <br />
      <label>
        Date Fin:
        <input
          type="date"
          value={dateFin}
          onChange={(e) => setDateFin(e.target.value)}
          placeholder="Date Fin"
        />
      </label>
      <br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdatePossessionPage;
