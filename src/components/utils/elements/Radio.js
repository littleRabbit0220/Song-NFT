import React from 'react';

const Radio = ({name, value, onClick}) => {
    return (
        <React.Fragment>
            <input 
                type='radio' 
                className='hover:cursor-pointer'
                name={name} 
                value={value}
                onClick={()=>onClick(value)}
            />
        </React.Fragment>
    )
}

export default Radio;