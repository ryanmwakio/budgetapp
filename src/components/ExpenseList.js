import React from 'react';
import Item from './ExpenseItem'

const ExpenseList = ({expenses}) => {
    return (
        <>
            <ul className="list">
                {expenses.map((expense)=>{
                    return <Item key={expense.id} expense={expense}/>
                })}
            </ul>
            {expenses.length >0 && <button className="btn">clear expenses <i className="fas fa-trash btn-icon"></i></button>}
        </>
    );
}

export default ExpenseList;
