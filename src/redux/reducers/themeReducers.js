import { SET_THEME } from "../constant"

export const theme = (state = "light", action) => {
    if(action.type === SET_THEME)
    {
        return {...state, theme : action.theme}
    }
    else return state

}