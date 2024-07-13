import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    // const [newBudget, setNewBudget] = useState(budget);
    const totalExp = expenses.reduce((total, expense) =>{
        return (total = total+expense.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const newBud = event.target.value;
        if(newBud > 20000){
            alert("Budget cannot be more than 20,000");
        }
        else if(newBud >= totalExp){
            dispatch({
                type: 'SET_BUDGET',
                payload: newBud
            })
        }else{
            alert("Budget cannot be less than the current expenditure");
        }
        // setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency}</span>
        <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
