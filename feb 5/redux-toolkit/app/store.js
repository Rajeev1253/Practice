const configureStore = require('@reduxjs/toolkit').configureStore
const reduxlogger = require("redux-logger")
const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer = require('../features/icecream/iceCreamSlice')
const logger = reduxlogger.createLogger()
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
module.exports = store