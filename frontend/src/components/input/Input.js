import React from 'react';
import '../../css/Form/Form.css'
import Zoom from 'react-reveal/Zoom'
export default function Input(props) {
  return <div>
      <Zoom>
  
       <label>
       {props.label}
       
       </label>
       <input type={props.type} required name={props.name} onChange={props.onChange}></input>
       
  </Zoom>
  </div>;
}
