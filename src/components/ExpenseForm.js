import React from 'react';

const ExpenseForm = ({charge,amount,handleAmount,handleCharge,handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">charge</label>
                    <input type="text" name="charge" id="charge" className="form-control" placeholder="e.g. rent" value={charge} onChange={handleCharge}/>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input type="number" name="amount" id="amount" className="form-control" placeholder="e.g. 10000" value={amount} onChange={handleAmount}/>
                </div>
            </div>
            <button type="submit" className="btn">submit <i className="fas fa-long-arrow-right btn-icon"></i></button>
        </form>
    );
}

export default ExpenseForm;