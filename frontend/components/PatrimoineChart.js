import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const PatrimoineChart = ({ onRangeChange }) => {
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [jour, setJour] = useState('');

  const handleValidate = () => {
    onRangeChange({ dateDebut, dateFin, jour });
    // Fetch data for the chart
  };

  const data = {}; // Data structure for Line chart

  return (
    <div>
      <input type="date" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} />
      <input type="date" value={dateFin} onChange={(e) => setDateFin(e.target.value)} />
      <select value={jour} onChange={(e) => setJour(e.target.value)}>
        <option value="Lundi">Lundi</option>
        <option value="Mardi">Mardi</option>
        {/* Add other days */}
      </select>
      <button onClick={handleValidate}>Validate</button>
      <Line data={data} />
    </div>
  );
};

export default PatrimoineChart;
