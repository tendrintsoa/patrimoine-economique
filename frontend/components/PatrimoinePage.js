import React, { useState } from 'react';
import PatrimoineChart from './PatrimoineChart';
import PatrimoineValue from './PatrimoineValue';

const PatrimoinePage = () => {
  const [dateRange, setDateRange] = useState({ dateDebut: '', dateFin: '', jour: '' });
  const [selectedDate, setSelectedDate] = useState('');

  const handleRangeChange = (range) => {
    setDateRange(range);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Patrimoine</h1>
      <PatrimoineChart onRangeChange={handleRangeChange} />
      <PatrimoineValue onDateChange={handleDateChange} />
    </div>
  );
};

export default PatrimoinePage;
