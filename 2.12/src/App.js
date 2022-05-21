import Form from './components/Form';
import axios from "axios";
import './App.css';
import { useState } from 'react';
import Image from './components/Image';


function App() {
  const [country, setCountry]= useState();
  const [display, setDisplay] = useState([]);
  const [pop, setPop] = useState('');
  const [capital, setCapital] = useState('');
  
  
  const handleSubmit=(e)=>{
      e.preventDefault();
    console.log("clicked", document.querySelector('input').value);
      let name = document.querySelector('input').value;
      console.log(name)
      setCountry(name);
    document.querySelector('input').value= '';
      axios
      .get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
      .then(response => {
        console.log(response.data)
        setDisplay([response.data[0].flag])
        setPop(response.data[0].population)
        setCapital(response.data[0].capital)
      })
      }

  
  return (
    <div className="App">
     <Form name="text" handleSubmit={handleSubmit}/>
     <Image src={display} alt='flags'/>
      <h1>Country: {country} </h1>
     <p>Population: {pop} people</p>
     <p> Capital: {capital}</p>
    </div>
  );
}

export default App;
