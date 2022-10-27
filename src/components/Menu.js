import { useRef } from "react";
import "./styles/menu.css";
function Menu() {
  function backMenu () {
    document.getElementById("menu").style.display = "none";
  }
  return (
    <div id="menu">
            <div onClick={backMenu}></div>
      <div className="menu_list">
        <div onClick={backMenu} className="back">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10.5 7.5L14 11H6V13H14L10.5 16.5L12 18L18 12L12 6L10.5 7.5Z"
              fill="#2C3E50"
              transform="rotate(-180 12 12)"
            />
          </svg>
        </div>
        <ul>
          <li>Menu</li>
          <li>
            <a href="#target">Theme</a>
          </li>
          <li>
            <a href="#target">Font</a>
          </li>
          <li>
            <a href="#target">Audio</a>
          </li>
          <li>Reset</li>
        </ul>
      </div>
    </div>
  );
}
export default Menu;
