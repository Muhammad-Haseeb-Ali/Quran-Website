import { SET_THEME } from "../constant"

export const theme = (state = "light", action) => {
    if(action.type === SET_THEME)
    {
        localStorage.setItem("theme",action.theme)
        return action.theme
    }
    else return state

}