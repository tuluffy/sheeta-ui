import React from 'react';
import './style.css';

function Button(props) {
    const {callback} = props

    const handlerClick = () => {
        !!callback && callback();
    }

    return (
        <div className="button-container"
             onClick={handlerClick}
        >
            Primary
        </div>
    )
}

export default Button;