import React from 'react';

const Button = ({onClick,text, style}) => {
    return (
        <button onClick={onClick} className={`${style} text-amber-50 w-full h-12 mb-2`}>
            {text}
        </button>
    );
};

export default Button;