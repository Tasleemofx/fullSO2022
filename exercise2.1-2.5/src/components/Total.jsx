import React from 'react';
function Total({parts}) {
    const total = 
  parts.reduce((s, p) => s+p.exercises,0)
  return(
      <h5>Total number of courses is {total}</h5>
  )
}
export default Total;