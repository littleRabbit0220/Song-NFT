import React from 'react';

const Radio = ({name, value}) => {
    return (
        <React.Fragment>
            <input 
                type='radio' 
                className=''
                name={name} 
                value={value}
            />
        </React.Fragment>
    )
}

export default Radio;