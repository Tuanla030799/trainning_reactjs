import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const initUserInput = {
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  };

  const [userInput, setUserInput] = useState(initUserInput);

  const titleChangeHandle = (event) => {
    setUserInput((preState) => {
      return { ...preState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandle = (event) => {
    setUserInput((preState) => {
      return { ...preState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandle = (event) => {
    setUserInput((preState) => {
      return { ...preState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const value = { ...userInput };
    const expenseData = {
      title: value.enteredTitle,
      amount: value.enteredAmount,
      date: new Date(value.enteredDate),
    }

    props?.onSaveExpenseData(expenseData)

    setUserInput(initUserInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandle}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandle}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandle}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
