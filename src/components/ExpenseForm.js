import React from 'react';

const ExpenseForm = ({charge,amount,handleAmount,handleCharge,handleSubmit,edit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">charge</label>
                    <input type="text" name="charge" id="charge" className="form-control" placeholder="e.g. rent" value={charge} onChange={handleCharge}/>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input type="number" name="amount" id="amount" className="form-control" placeholder="e.g. 30000" value={amount} onChange={handleAmount}/>
                </div>
            </div>
            <button type="submit" className="btn">{edit ? 'edit' : 'submit'} <i className={edit ? "fas fa-pencil btn-icon" : "fas fa-long-arrow-right btn-icon"}></i></button>
        </form>
    );
}

export default ExpenseForm;
