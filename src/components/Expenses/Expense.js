import "./Expense.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {

    const [yearSelected, setYearSelected] = useState('2020');

    let saveExpenseFilterHandler = (enteredExpenseFilterData) => {
        setYearSelected(enteredExpenseFilterData);

    }

    let filteredExpenses = props.array.filter(expense => {
        return expense.date.getFullYear().toString() === yearSelected;
    });



    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onSaveExpenseFilter={saveExpenseFilterHandler} defaultYear={yearSelected}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList filteredList={filteredExpenses}></ExpensesList>

            </Card>
        </div>
    )
}

export default Expense;