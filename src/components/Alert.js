import React from 'react';

const Alert = ({type,text}) => {
    return (
        <div className="alert-wrapper">
        <div className={`alert alert-${type}`}>
            {text}
        </div>
        </div>
    );
}

export default Alert;
