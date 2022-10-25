        import { useEffect } from "react";
        import { useDispatch, useSelector } from "react-redux";
        import { SET_THEME } from "../redux/constant"
        import "./styles/themebtn.css"
        
        export default function (props){
            const dispatch = useDispatch();
            const theme = useSelector((state) => state.theme)
            function setTheme(e){
                const Root = document.querySelector(':root')
                switch (theme) {
                  case "light":
                    Root.style.setProperty("--main_bg","#131418")
                    Root.style.setProperty("--back_bg","#1c292e")
                    Root.style.setProperty("--main_text","#fff")
                    Root.style.setProperty("--deep_bg","#1b1e23")
                    Root.style.setProperty("--anti_theme","#fff")
                    dispatch({type:SET_THEME,theme:"dark"})
        
                    break;
                  case "dark":
                    Root.style.setProperty("--main_bg","#fff")
                    Root.style.setProperty("--back_bg","#e7edef")
                    Root.style.setProperty("--main_text","#000")
                    Root.style.setProperty("--deep_bg","#fff")
                    Root.style.setProperty("--anti_theme","#c2f3e6")
                    dispatch({type:SET_THEME,theme:"light"})
            
                    break;
                }
            }
            
            //  function getTheme(){
            //     if(theme === "dark"){
            //         document.getElementById("themebtn").checked = true;
            //           setTheme(true)
            //       }
            //  }
            // useEffect(()=>{
            //   getTheme()
            //  },[])
            return(
                <div onClick={setTheme} id="switch" class={`${props.type}_switch`} theme={theme}>
                <div className="slider"></div>
                </div>
            )
        }