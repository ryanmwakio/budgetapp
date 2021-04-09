import React,{useState,useEffect} from 'react'
import './App.css';
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'


//localStorage.getItem('item name')
//localStorage.setItem('item name')

// const initialExpenses=[]
const initialExpenses=localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []




function App() {

 

  //********state values********/
  //all expenses,add expense
  const [expenses,setExpenses]=useState(initialExpenses);//we get the array

  //single expense
  const [charge,setCharge]=useState('')

  //single amount
  const [amount,setAmount]=useState('')

  //alert
  const [alert,setAlert]=useState({show:false})

  //edit
  const [edit,setEdit]=useState(false)

  //edit Item
  const [id,setId]=useState(0)

   //********useEffect********/
useEffect(()=>{
  localStorage.setItem('expenses',JSON.stringify(expenses))
},[expenses])


  //********functionality********/
  //handle charge
  const handleCharge=e=>{
    setCharge(e.target.value)
  }

  //handle amount
  const handleAmount=e=>{
    setAmount(e.target.value)
  }

  //handle alert
  const handleAlert=({type,text})=>{
    setAlert({show:true,type,text})
    setTimeout(()=>{
      setAlert({show:false})
    },3000)
  }


  const handleSubmit=e=>{
    e.preventDefault()
    if(charge!==''&&amount>0){

      if(edit){
        let tempExpenses=expenses.map(item=>{
          return item.id===id ? {...item,charge:charge,amount:amount} : item
        })
        setExpenses(tempExpenses)
        handleAlert({type:"success",text:"sucessfully edited"})
        setEdit(false)
      }else{
        const singleExpense={id:Math.random(),charge:charge,amount:amount}
        setExpenses([...expenses,singleExpense])
        handleAlert({type:"success",text:"sucessfully added"})
      }

     
      setCharge('')
      setAmount('')
      
    }else{
      //handle alert called
      handleAlert({type:"danger",text:"charge can't be empty and amount has to be greater than zero"})
    }
  }

  //clear all items
  const clearItems=()=>{
    setExpenses([])
    return handleAlert({type:"success",text:"all items cleared"})
  }

  //handle edit
  const handleEdit=(id)=>{
    console.log(`item ${id} edited`)
    let expense=expenses.find(item=>item.id===id)
    let {charge,amount}=expense
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
    setId(id)
  }

  //handle delete
  const handleDelete=(id)=>{
    let tempExpenses=expenses.filter(item=>item.id!==id)
    setExpenses(tempExpenses)
    return handleAlert({type:"success",text:"item deleted"})
  }

  return (
    <>
    {alert.show && <Alert type={alert.type} text={alert.text}/>}
      
      <h1>Budget Calculator</h1>
      <main className="App">
        <div className="creator">creator: Ryan Mwakio</div>
        <ExpenseForm charge={charge} amount={amount} handleAmount={handleAmount} handleCharge={handleCharge} handleSubmit={handleSubmit} edit={edit}/>
        <ExpenseList expenses={expenses} clearItems={clearItems} handleEdit={handleEdit} handleDelete={handleDelete}/>
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
