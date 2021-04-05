import React from 'react';

const ExpenseItem = ({expense}) => {
    const {id,charge,amount}=expense
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">Kshs {amount}</span>
            </div>
            <div><button className="edit-btn"><i className="fas fa-pencil"></i></button></div>
            <div><button className="clear-btn"><i className="fas fa-times"></i></button></div>
        </li>
    );
}

export default ExpenseItem;
