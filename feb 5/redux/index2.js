const redux=require("redux")
const produce = require("immer").produce
const intialState={
    name:'Rajeev',
    address:{
        street:'preet nagar',
        city:'goniana',
        state:'Punjab'

    }
}

const UPDATE_STREET = 'UPDATE_STREET'

function updateStreet(street="89"){
    return{
        type:UPDATE_STREET,
        payload:street,
    }
}

const reducer = (state=intialState,action)=>{
    switch(action.type){
        case UPDATE_STREET:
            // return{
            //     ...state,
            //     adress:{
            //         ...state.address,
            //         street:action.payload,
            //     },
            // }
            return produce(state,(draft)=>{
                draft.address.street=action.payload
            })
            default:{
                return state
            }
    }

}
const store = redux.createStore(reducer)
console.log("intial state",store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log("updated state",store.getState())
})
store.dispatch(updateStreet())
unsubscribe();