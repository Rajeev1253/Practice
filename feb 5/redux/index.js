const redux = require('redux')
const createStore = redux.createStore
const combineReducer= redux.educers;
const bindActionCreator = redux.bindActionCreators
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

function ordercake(){
    return{
        type: CAKE_ORDERED,
        quantity: 1,
    }
}
function cakerestock(qty=1)
{
    return{
        type:CAKE_RESTOCKED,
        quantity:qty
        
    }

}
function ordericecream(){
    return{
        type: ICECREAM_ORDERED,
        quantity: 1,
    }
}
function icecreamrestock(qty=1)
{
    return{
        type:ICECREAM_RESTOCKED,
        quantity:qty
        
    }

}

const cake_intialState ={
    numofCakes:10,
    anotherProperty:0
}
const icecream_intialState ={
    numofIceCream:20,
    anotherProperty:0
}

const cakereducer = (state = cake_intialState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numofCakes: state.numofCakes -1
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numofCakes: state.numofCakes + action.quantity
            }

            default:
                return state
        
    }
}

const icecreamreducer = (state = icecream_intialState,action)=>{
    switch(action.type){
        case ICECREAM_ORDERED:
            return{
                ...state,
                numofIceCream: state.numofIceCream -1
            }
        case ICECREAM_RESTOCKED:
            return{
                ...state,
                numofIceCream: state.numofIceCream + action.quantity
            }

            default:
                return state
        
    }
}
const rootReducer = combineReducer({
    cake:cakereducer,
    icecream:icecreamreducer
})
const store = createStore(rootReducer,applyMiddleware(logger))
console.log("Intial-state",store.getState())

const unsubscribe = store.subscribe(()=>{})

const action = bindActionCreator({ordercake,cakerestock,ordericecream,icecreamrestock},store.dispatch)
action.ordercake();
action.ordercake();
action.ordercake();
action.cakerestock(3);
action.ordericecream();
action.ordericecream();
action.icecreamrestock(2);
// store.dispatch(ordercake())
// store.dispatch(ordercake())
// store.dispatch(ordercake())
// store.dispatch(cakerestock(3))
unsubscribe();
