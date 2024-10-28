import React from 'react';

function ItemListContainer({ backgroundColor, width, color, children }) {
    return (
        <div
            style={{ backgroundColor: backgroundColor, width: width, color:'white' }} // Corregido para aplicar el estilo correctamente
        >
            {children}
        </div>
    );
}

export default ItemListContainer;