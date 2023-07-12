import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('all');
    const dropdownChangeHandler = (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter(expense => {
        if (filteredYear != 'all') {
            return expense.date.getFullYear().toString() === filteredYear
        }else{
            return true
        }
    });

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeDropdown={dropdownChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                {filteredExpenses.length === 0 
                    ? <div className="img-container"><img src="kuromi.png" /><p>No Expenses Found.</p></div> 
                    : filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id} 
                            title={expense.title} 
                            amount={expense.amount} 
                            date={expense.date} 
                        />
                    ))
                }
            </Card>
        </div>
    )
}

export default Expenses;