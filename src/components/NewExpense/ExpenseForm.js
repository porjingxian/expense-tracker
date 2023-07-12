import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState(new Date().toISOString().substr(0, 10));
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setAdd('hide');
    };
    const [add, setAdd] = useState('hide');
    const expandForm = () => setAdd('show');
    const hideForm = () => setAdd('hide');
    if (add == 'hide') {
        return(
            <div className='form-container'>
                <img src="kuromi2.png" />
                <div className='button-with-arrow'>
                    <button onClick={expandForm}>Add New Expense</button>
                </div>
            </div>
        )
    }else if (add == 'show') {
        return(
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' value={enteredDate} onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button onClick={hideForm}>Cancel</button><button type='submit'>Add Expense</button>
                </div>
            </form>
        )
    }   
}

export default ExpenseForm;