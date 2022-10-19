import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    let expensesContent = <h2 className="expenses-list__fallback">No expenses for selected year</h2>;

    if (props.filteredList.length > 0) {
        expensesContent = props.filteredList.map(expenses =>
            <ExpenseItem
                key={expenses.id}
                title={expenses.title}
                amount={expenses.amount}
                date={expenses.date}
            />)
    }
    return <ul className="expenses-list">{expensesContent}</ul>;
}

export default ExpensesList;