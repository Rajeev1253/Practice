import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    expenseList:[]
}

export const expenseSlice =  createSlice({
    name:'ExpenseSlice',
    initialState,
    reducers:{
        addExpense:(state=initialState,action)=>{
            const  newExpense={
                category:action.payload.category,
                price:action.payload.price,
                time: new Date(),
            }

            state.expenseList.push(newExpense)

        },
    deleteExpense:(state,action)=>{

       
        }
    }
})
export const {addExpense,deleteExpense} = expenseSlice.actions;
export default expenseSlice.reducer