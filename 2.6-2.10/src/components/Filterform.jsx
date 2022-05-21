import React from 'react';

function Filterform(params) {
        return(
        <input type={params.type}
         onChange={params.onChange}
          className="Filter"/>
    )
}

export default Filterform;
