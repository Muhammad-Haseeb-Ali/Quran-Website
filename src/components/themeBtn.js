import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_THEME } from "../redux/constant"
import "./styles/themebtn.css"

export default function (props){
    const dispatch = useDispatch();
    function setTheme(e){
  
        const inc = document.getElementById("inc")
        const Root = document.querySelector(':root')
        dispatch({type:SET_THEME,theme: e===true? "dark" : "light"})
        switch (e) {
          case true:
            console.warn('it is true')
            localStorage.setItem("theme", "dark");
            inc.classList.replace("lightmode","darkmode")
            Root.style.setProperty("--main_bg","#131418")
            Root.style.setProperty("--back_bg","#1c292e")
            Root.style.setProperty("--main_text","#fff")
            Root.style.setProperty("--deep_bg","#1b1e23")
            Root.style.setProperty("--anti_theme","#fff")
    
            break;
          case false:
            console.warn('it is false')
            localStorage.setItem("theme", "light");
            inc.classList.replace("darkmode" , "lightmode")
            Root.style.setProperty("--main_bg","#fff")
            Root.style.setProperty("--back_bg","#e7edef")
            Root.style.setProperty("--main_text","#000")
            Root.style.setProperty("--deep_bg","#fff")
            Root.style.setProperty("--anti_theme","#c2f3e6")
    
    
    
            break;
        }
    }
    
     function getTheme(){
        if(localStorage.getItem("theme") === "dark"){
            document.getElementById("themebtn").checked = true;
              setTheme(true)
          }
     }
    useEffect(()=>{
      getTheme()
     },[])
    return(
        <label class={`${props.type}_switch`}>
        <input id="themebtn" onClick={e => setTheme(e.target.checked)} type="checkbox" />
        <span className="slider"></span>
        </label>
    )
}