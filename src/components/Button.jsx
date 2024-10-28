import React from 'react';

function Button({color, handler, children}) {
    return (
        <button
            style={{ backgroundColor: color }} // Corregido "backgorundColor"
            onClick={handler} // Corregido "handlre"
        >
            {children}
        </button>
    );
}

export default Button;