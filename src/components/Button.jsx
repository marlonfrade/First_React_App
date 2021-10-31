import React from 'react';

import './Button.css'

const Button = ({children, onClick}) => {
    return ( 
        <div>
            <button onClick = {onClick} className="add_button">
                {children}
            </button>
        </div>
     );
}
 
export default Button;