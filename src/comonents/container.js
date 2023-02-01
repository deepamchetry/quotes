import React from 'react';

const Container =({children,color }) =>{
    return (
        <div
            style={{ 
            transitions: 'all 500ms',
            backgroundColor: `${color}`,
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}
        > 
        {children}
        </div>
    );
}
export default Container;