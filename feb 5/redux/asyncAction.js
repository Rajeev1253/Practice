const redux=require('redux')
const thunkMiddleware = require('thunk').default
const axios = require("axios")
const createStore = redux.createStore()
const applyMiddleware= redux.applyMiddleware
const intialState = {
    loading:false,
    users:[],
    error:''
}
const FETCH_USER_REQUESTED ='FETCH_USER_REQUESTED'

const FETCH_USER_SUCCEEDED ='FETCH_USER_SUCCEEDED'

const FETCH_USER_FAILED ='FETCH_USER_FAILED'


const fetchuserrequest= ()=>{
    return{
        type:FETCH_USER_REQUESTED,
    }
}

const fetchusersuccess=user=>{
    return{
        type:FETCH_USER_SUCCEEDED,
        payload:user
    }
}

const fetchuserfailed=(error)=>{
    return{
        type:FETCH_USER_FAILED,
        payload:error
    }
}

const reducer= (state=intialState,action)=>{
    switch (action.type) {
        case FETCH_USER_REQUESTED:
            return{
                ...state,
                loading:true,
            }
        case FETCH_USER_SUCCEEDED:
            return{
                ...state,
                loading:false,
                user:action.payload,
                error:''
            }
        case FETCH_USER_FAILED:
            return{
                ...state,
                loading:false,
                user:[],
                errror:action.payload

            }
    }
    

}
const fetchUser = ()=>{
    return function(dispatch){
        dispatch(fetchuserrequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            const users = response.data.map((user)=>user.id)
            dispatch(fetchusersuccess(users))
        }).catch((error)=>{
            dispatch(fetchuserfailed(error.message))
        
        })


        

    }
}
const store = createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUser())