import { SIGNIN_SUCCESS,SIGNIN_LOADING } from "../actions/actions"

const initial={user:null,loading:false,error:null}

export const authReducer=(state=initial,action)=>{
    switch(action.type){
        case SIGNIN_LOADING:
            return{...state,loading:true}
        case SIGNIN_SUCCESS:
            return{...state,user:action.payload,loading:false}
        default:
            return state
    }
}