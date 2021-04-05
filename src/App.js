import React,{useState} from 'react'
import './App.css';
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'

const initialExpenses=[]


function App() {

  //********state values********/
  //all expenses,add expense
  const [expenses,setExpenses]=useState(initialExpenses);//we get the array

  //single expense
  const [charge,setCharge]=useState('')

  //single amount
  const [amount,setAmount]=useState('')


  //********functionality********/
  const handleCharge=e=>{
    setCharge(e.target.value)
  }

  const handleAmount=e=>{
    setAmount(e.target.value)
  }

  const handleSubmit=e=>{
    e.preventDefault()
    if(charge!==''&&amount>0){
      const singleExpense={id:Math.random(),charge:charge,amount:amount}
      setExpenses([...expenses,singleExpense])
      setCharge('')
      setAmount('')
    }else{
      //handle alert called
    }
  }

  return (
    <>
      <Alert/>
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm charge={charge} amount={amount} handleAmount={handleAmount} handleCharge={handleCharge} handleSubmit={handleSubmit}/>
        <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        total spending: <span className="total">
          kshs {expenses.reduce((acc,curr)=>{
            return acc+=parseInt(curr.amount)
          },0)}
        </span>
      </h1>
      
    </>
  );
}

export default App;
