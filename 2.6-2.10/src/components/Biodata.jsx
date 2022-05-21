import React from 'react';

function Biodata(props) {
    return(
        <form onSubmit={props.submitPerson}>
        <div>
          name: <input type="text" className="mainInput"autoFocus onChange={props.changeName} />
        </div>
        <div>
          Phone Number: <input type="text" className="mainInput" onChange={props.changeNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    )
}

export default Biodata;