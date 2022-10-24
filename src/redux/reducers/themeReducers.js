import { SET_THEME } from "../constant"

export const theme = (state = "light", action) => {
    if(action.type === SET_THEME)
    {
        return action.theme
    }
    else return state

}