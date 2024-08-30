import React, { useState } from 'react';

const PatrimoineValue = ({ onDateChange }) => {
  const [date, setDate] = useState('');

  const handleValidate = () => {
    onDateChange(date);
    // Fetch value for the selected date
  };

  return (
    <div>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleValidate}>Validate</button>
    </div>
  );
};

export default PatrimoineValue;
