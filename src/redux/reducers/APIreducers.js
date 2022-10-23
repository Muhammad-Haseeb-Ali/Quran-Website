import { FETCHING_FAILED, FETCHING_SUCCESS } from "../constant"

export const mataData = (state = {status:"loading"}, action) => {
    if(action.type === FETCHING_SUCCESS)
    {
        return {...state, status :"success", data : action.data}
    }
    else if(action.type === FETCHING_FAILED)
    {
        return {...state, status :"failed", data : action.data}
    }
    else return state

}