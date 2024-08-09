import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Button, Table, Form} from "react-bootstrap"
import './App.css'
import JSON from "../../data/data.json";
import {maPatri, valeur}  from "../../index.js"


function App() {
  const [data, setData] = useState(JSON)
  const [patrimoine, setPatrimoine] = useState(0)
  const [selectedDate, setSelectedDate] = useState('');

  // Fonction pour gérer le changement de la date
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  function handleClick() {
    setPatrimoine(maPatri.getValeur(selectedDate))
  }

  console.log(data[1].possessions);
  const listPossession = data[1].possessions

  return <div>
      <Table className='table'>
        <thead>
          <tr>
            <th>nom</th>
            <th>valeur</th>
            <th>date debut</th>
            <th>amortissement</th>
            <th>possesseur</th>
          </tr>
        </thead>
        <tbody>
          {listPossession.map(function(possession, index) {
            return (
              <tr key={index}>
                <td>{possession.libelle}</td>
                <td>{possession.valeur}</td>
                <td>{possession.dateDebut.slice(0, 10)}</td>
                <td>{possession.tauxAmortissement}</td>
                <td>{possession.possesseur}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <p>
        Patrimoine :  {patrimoine} Ar
      </p>
      <Form>
        <input type="date" onChange={(e) => handleDateChange(e)} name="date-picker" id="date" />
        <Button onClick={() => handleClick()}>Valider</Button>
      </Form>
  </div>
}

export default App
