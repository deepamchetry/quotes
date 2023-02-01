import React from 'react';

const Button = ({onClick,color,text}) => {
    return ( <button 
        onClick={onClick}
        style={{
          transition:'all 500ms',
          marginTop: '20px',
          border: 'none',
          backgroundColor: `${color}`,
          color: '#fff',
          padding: '10px',
          borderRadius: '10px',
          width: 'auto',
          
        }}
        >
            {text}
        </button> );
}
export default Button;