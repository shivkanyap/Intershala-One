import {LIST_COLLEGE, LIST_COLLEGE_STATE} from '../actions/types'

const initialState={
    item:[],
    list_college_state:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case LIST_COLLEGE:
            return{
                ...state,
                item:action.payload
            };
        case LIST_COLLEGE_STATE:
            return{
                ...state,
                list_college_state:action.payload
            }
            default:
                return state
    }
}