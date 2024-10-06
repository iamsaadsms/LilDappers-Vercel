import React from "react";
import './Button.css';

const Button = ({ data, className, style }) => {
    return (
        <div className={className}>
            <button className="common-btn" style={style}>{data}</button>
        </div>
    );
}

export default Button;
