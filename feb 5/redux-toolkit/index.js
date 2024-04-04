const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeAction
const iceCreamActions= require('./features/icecream/iceCreamSlice').iceCreamAction
console.log('Intial state ',store.getState())
const unsubscribe = store.subscribe(()=>{
})
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(3))

unsubscribe()