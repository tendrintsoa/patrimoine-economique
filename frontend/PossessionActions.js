import React from 'react';
import { useHistory } from 'react-router-dom';

const PossessionActions = ({ libelle }) => {
  const history = useHistory();

  const handleEditClick = () => {
    history.push(`/possession/${libelle}/update`);
  };

  const handleCloseClick = () => {
    // Call API to close the possession
    console.log(`Closing possession: ${libelle}`);
  };

  return (
    <div>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleCloseClick}>Close/Clôture</button>
    </div>
  );
};

export default PossessionActions;
