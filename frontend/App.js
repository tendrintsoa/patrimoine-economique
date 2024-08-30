import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PatrimoinePage from './components/PatrimoinePage';
import PossessionsListPage from './components/PossessionsListPage';
import CreatePossessionPage from './components/CreatePossessionPage';
import UpdatePossessionPage from './components/UpdatePossessionPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/patrimoine" exact component={PatrimoinePage} />
        <Route path="/possession" exact component={PossessionsListPage} />
        <Route path="/possession/create" component={CreatePossessionPage} />
        <Route path="/possession/:libelle/update" component={UpdatePossessionPage} />
        <Route path="/" exact>
          <h1>Welcome to the App</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
