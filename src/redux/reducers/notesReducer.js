import { FETCH_SUCCESS,FETCH_LOADING } from "../actions/actions"

const initialState = {notes:[],loading:false,error:null}

export const notesReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_LOADING:
            return{...state,loading:true}
        case FETCH_SUCCESS:
            return {...state,notes:action.payload,loading:false}
        default:
            return state
    }
}