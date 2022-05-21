import React from 'react';
 
const Form=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="Input">
                Find Country
            </label>
            <input type={props.name}
             autoFocus id="Input"
             onChange={props.onChange} /><br/>
            <button >Find</button>
        </form>
    )
}
export default Form;