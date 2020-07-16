import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (

    //we're grouping since we want label and input to be together
    <div className='group' >
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ? (
            //the label will always have the 'form-input-label'
            //but it will have the shrink property whenever the user types anything in 
            //this is for brwosers that offer autocomplete 
            <label 
                className={`${otherProps.value.length} ? 'shrink': '' form-input-label`}
            >
                {label}
            </label>)
            : null
        }
    </div>
);

export default FormInput;