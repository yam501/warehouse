import React from 'react';

const Button = ({onClick,text, style}) => {
    return (
        <button onClick={onClick} className={`${style} text-amber-50 w-full h-11`}>
            {text}
        </button>
    );
};

export default Button;