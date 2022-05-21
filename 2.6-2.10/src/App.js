import React, { useEffect, useState } from 'react';
import Biodata from './components/Biodata';
import axios from "axios"
import './App.css';
import Filterform from './components/Filterform';
import Mapperson from './components/Mapperson';


function App() {
  let mainInput = document.querySelectorAll(".mainInput")
  const startPerson =()=> axios.get(
    "http://localhost:3001/api/contacts"
  ).then(response=>{
    setPerson(response.data)
  })
  const [person, setPerson] = useState([])
  useEffect(startPerson, [])
  const [newNumber, setNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const changeName=(e)=>{
    e.preventDefault();
    setNewName(e.target.value)
  }
  const changeNumber = (e) => {
    e.preventDefault();
    setNumber(e.target.value)
  }
  const changeFilter = (e) => {

    setNewFilter(e.target.value.toLowerCase())
    const regex = new RegExp(newFilter)
    const filteredPerson=()=>
    person.filter(person => person.name.toLowerCase().match(regex))
    setPerson(filteredPerson)

  }

  const submitPerson=(e)=>{
    const checkPerson = person.some(person => person.name.toLowerCase() === newName.toLowerCase())

    if (checkPerson) {
      alert(`${newName} already exists`)
    } else {
      console.log(newName)
    }
    console.log(checkPerson)
    if(checkPerson){
      alert(`${newName} already exists`)
      return;
    }else{
      e.preventDefault();
      console.log({ newName, newNumber});
      console.log();
    let submitName= newName;
    let submitNumber = newNumber;
    let newPerson = {name: submitName,number: submitNumber};
    axios
    .post('http://localhost:3001/persons', newPerson )
    .then(res=> {
      console.log(res)
    })
    console.log("submit",submitName);
    mainInput.forEach((m)=> m.value="")
    setPerson([...person, newPerson])
    }
  }
    const deletePerson=(id)=>{
      axios.delete("http://localhost:3001/persons", person[id])
      .then(res=>{
        res.data.filter(()=> person.id=== id)
      })
    }
  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Filterform type="text"
      onChange={changeFilter}
      person={person} />
      <Biodata submitPerson={submitPerson}
       changeName={changeName}
        changeNumber={changeNumber}
        />
      <div> Typing: ......{newName} {newNumber}</div>
      <h2>Numbers</h2>
      <Mapperson person={person} onClick={deletePerson}/>
    </div>
  );
}

export default App;
