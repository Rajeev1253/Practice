import mongoose from "mongoose";

const transactionSchema =  new mongoose.Schema({
    amount:{
        type:Number,
        required:true,
    },
    category:{
        type:'string',
        required:true,
    },
  
    reference:{
        type:'string',
        
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
    }

},{timestamps:true})

export const TransactionModel =  mongoose.model('transactions',transactionSchema)