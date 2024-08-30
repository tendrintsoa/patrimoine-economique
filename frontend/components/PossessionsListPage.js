import React from 'react';
import { useHistory } from 'react-router-dom';
import PossessionTable from './PossessionTable';

const PossessionsListPage = () => {
  const history = useHistory();

  const handleCreateClick = () => {
    history.push('/possession/create');
  };

  return (
    <div>
      <h1>Possessions</h1>
      <button onClick={handleCreateClick}>Create Possession</button>
      <PossessionTable />
    </div>
  );
};

export default PossessionsListPage;
