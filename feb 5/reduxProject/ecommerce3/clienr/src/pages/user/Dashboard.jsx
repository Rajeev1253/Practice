import React, { useState } from "react";
import Layout from "../../component/Layout";
import { useAuth } from "../../context/Auth";
import { useSelector, useDispatch } from "react-redux";
import { addExpense } from "../../features/expenseSlice";
import image from '../../assets/images/logo1.svg'
import "./dashboard.css";

const Dashboard = () => {
  const [category, setCategory] = useState("");
  const [price, setprice] = useState("");
  const [exp,setExp]=useState(0)
  const [auth] = useAuth();
  const expense = useSelector((state) => state.root.expenseList);
  console.log(expense);
  const dispatch = useDispatch();
  const handlecategory = (e) => {
    setCategory(e.target.value);
  };
  const handlePrice = (e) => {
    setprice(e.target.value);
  };
  const handleAdd = (e) => {
    
    console.log(expense);
    dispatch(addExpense({ category: category, price: price }));
    const sum = price;
    setExp(+sum)
   
  };
  return (
    <Layout>

    <div className="user1">
    <div className="Logo">
      <img src={image}></img>
    </div>

      <div className="user_details">
        <h3>Welcome : {auth?.user?.name}</h3>
        <h3>Email:{auth?.user?.email}</h3>

      
      </div>
    </div>
    
<div className="main-box">

      <div className="heading1">
        <h1>Summary</h1>
      </div>
      <div className="heading2">
        <h2>Net total</h2>
        <h1>Total Amount</h1>
      </div>
      <div className="types">
      <div className="income"><h3>Income</h3></div>
      <div className="expense"><h3>Expense</h3>
      <h4>{exp}</h4></div>
      <div className="investment"><h3>Investment</h3></div>
      <div className="savings"><h3>Savings</h3></div>

      </div>
      <div className="Transactionsbox">
      <h2>Transactions</h2>

      <div className="category">

        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={handlecategory}
        ></input>
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={handlePrice}
        ></input>
        <button onClick={handleAdd}>ADD</button>
      </div>
      <div className="Transaction-main"></div>
      <h1>
        {expense.map((expense, index) => (
          <div key={index}>
            <span>{expense.category}</span>
            <span>{expense.price}</span>
          </div>
        ))}
      </h1>
        
      </div>
</div>
    </Layout>
  );
};

export default Dashboard;
