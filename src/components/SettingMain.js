import { useEffect } from "react";
import { RiSaveFill, RiAddLine, RiDeleteBin7Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./styles/settingmain.css";
import ThemeBtn from "./themeBtn";
function SettingMain() {
  const navigator = useNavigate();
  function ayatSize(e) {
    localStorage.setItem("Ayat-Size", `${e.target.value}`);
    document.getElementById(
      "display_arabic_ayat"
    ).style.fontSize = `${e.target.value}px`;
  }
  function tranSize(e) {
    localStorage.setItem("Eng-Ayat-Size", `${e.target.value}`);
    document.getElementById(
      "display_eng_ayat"
    ).style.fontSize = `${e.target.value}px`;
  }
  function trjmSize(e) {
    localStorage.setItem("Tarjuma-Size", `${e.target.value}`);
    document.getElementById(
      "display_trjuma"
    ).style.fontSize = `${e.target.value}px`;
  }


  return (
    <div className="main" id="setting_main">
      <div className="contant_top_nav">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            navigator(-1);
          }}
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
      <div id="theme_card">
        <h4>Dark Theme!</h4>
        <p>&nbsp; Dark or Light, It is all about your choice &hearts;</p>
        <ThemeBtn type="ban"/>
        <div id="cir">
          <div id="icn">
            <div className="lightmode" id="inc"></div>
          </div>
        </div>
      </div>
      <div id="translations">
        <h1 className="sub_heading">Translations</h1>
        <div id="trans_head">
          <p>sr#</p>
          <p>Translation</p>
          <p>Translator</p>
          <p>Language</p>
          <p>
            <RiAddLine />
          </p>
        </div>
        <div id="trans_form">
          <p>Add New One</p>
          <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <p>
            <RiSaveFill />
          </p>
        </div>
        <ul id="trans_list">
          <li>
            <p>sr#</p>
            <p>Translation</p>
            <p>Translator</p>
            <p>Language</p>
            <p>
              <RiDeleteBin7Fill />
            </p>
          </li>
          <li>
            <p>sr#</p>
            <p>Translation</p>
            <p>Translator</p>
            <p>Language</p>
            <p>
              <RiDeleteBin7Fill />
            </p>
          </li>
        </ul>
      </div>
      <hr />
      <h1 className="sub_heading">Font Sizes</h1>
      <div id="font_sizes">
        <div>
          <h1>Ayat</h1>
          <input
            onChange={ayatSize}
            type="range"
            min="20"
            max="100"
            defaultValue={
              localStorage.getItem("Ayat-Size")
                ? parseInt(localStorage.getItem("Ayat-Size"))
                : 30
            }
          />
          <div
            className="display"
            id="display_arabic_ayat"
            style={{
              fontSize: localStorage.getItem("Ayat-Size")
                ? parseInt(localStorage.getItem("Ayat-Size"))
                : 30,
            }}
          >
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </div>
        </div>
        <div>
          <h1>Transitation</h1>
          <input
            onChange={tranSize}
            type="range"
            min="20"
            max="100"
            defaultValue={
              localStorage.getItem("Eng-Ayat-Size")
                ? parseInt(localStorage.getItem("Eng-Ayat-Size"))
                : 30
            }
          />
          <div
            className="display"
            id="display_eng_ayat"
            style={{
              fontSize: localStorage.getItem("Eng-Ayat-Size")
                ? parseInt(localStorage.getItem("Eng-Ayat-Size"))
                : 30,
            }}
          >
            bis'mi l-lahi l-raḥmāni l-raḥīmi
          </div>
        </div>
        <div>
          <h1>Translation</h1>
          <input
            onChange={trjmSize}
            type="range"
            min="20"
            max="100"
            defaultValue={
              localStorage.getItem("Eng-Ayat-Size")
                ? parseInt(localStorage.getItem("Eng-Ayat-Size"))
                : 30
            }
          />
          <div
            className="display"
            id="display_trjuma"
            style={{
              fontSize: localStorage.getItem("Eng-Ayat-Size")
                ? parseInt(localStorage.getItem("Eng-Ayat-Size"))
                : 30,
            }}
          >
            bis'mi l-lahi l-raḥmāni l-raḥīmi
          </div>
        </div>
      </div>
    </div>
  );
}
export default SettingMain;
