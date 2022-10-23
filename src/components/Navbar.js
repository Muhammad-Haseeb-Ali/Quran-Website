import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


import "./styles/navbar.css";
import ThemeBtn from "./themeBtn";
function Navbar() {



  function noti() {
    var x = document.getElementById("noti_box");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  return (
    <nav>
      <ul>
        <ol>
          <li
            onClick={() => {
              document.getElementById("menu").style.display = "grid";
            }}
          >
            <img src="/menu.png" alt="" />
          </li>
          <li onClick={() => navigate("./")}>
            <img src="/logo.png" alt="" width={"50px"} height={"50px"} />
          </li>
          <li>
            <h3>Al Quran</h3>
          </li>
        </ol>
        <ol>
          <li>
            <img src="/lang.png" alt="" />
          </li>
          <li>
            <ThemeBtn type="nav" />
          </li>
          { isAuthenticated === false &&
            <li onClick={loginWithRedirect}>
              <img src="/user.png" alt="" />
            </li>
          }
          <li onClick={() => logout({ returnTo: window.location.origin })}>
            logout
          </li>
          <li onClick={noti}>
            <img src="/noti.png" alt="" />
          </li>
        </ol>
      </ul>
      <div id="noti_box">
        <img src="/notiempty.svg" width="50%" />
        <br />
        <h7>Nothing Found!</h7>
        <p>You have no notification yet.</p>
      </div>
    </nav>
  );
}
export default Navbar;
