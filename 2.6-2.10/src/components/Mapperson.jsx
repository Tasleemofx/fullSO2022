import React from 'react';
function Mapperson(params) {
     const mapPerson=params.person.map((numPerson, index)=>{
    return (
      <div key={index}>
        <li >{numPerson.name} {numPerson.number}</li>
        <button onClick={params.onClick}>Delete</button>
      </div>
    )
  })
  return(
      <ul>{mapPerson}</ul>
  )
}
export default Mapperson;
