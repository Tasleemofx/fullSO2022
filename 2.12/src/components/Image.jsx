import React from 'react';
import './Image.css';
function Image(params) {
    return(
        <img src={params.src} alt={params.alt}/>
    )
}

export default Image;