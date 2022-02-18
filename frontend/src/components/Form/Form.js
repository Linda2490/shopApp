import React from 'react';
import Input from '../input/Input'
import '../../css/Form/Form.css'

export default function Form(props) {
  return <>
   {props.showForm && 
       <div className="checkout-form">
       <span className='close-icon' onClick={() => props.setShowForm(false)}> &times; </span>
       <form onSubmit={props.onSubmitHundle}>
       
        <Input label='Name' type='text' name='name' onChange={props.hundleChange}/>
        <Input label='Email' type='email' name='email' onChange={props.hundleChange}/>
       
       
       
       
       <div>
       <button type='submit'> Submit </button>
       </div>
       
       
       </form>
    
       
       
       
       </div>
}

  
  
  
  
  </>;
}
