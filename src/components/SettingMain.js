import { useEffect, useState } from "react";
import { RiAddLine, RiDeleteBin7Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles/settingmain.css";
import ThemeBtn from "./themeBtn";

function SettingMain() {
  const theme = useSelector((state) => state.theme);
  const [lang, changeLang] = useState("Urdu")
  const [tran, changeTran] = useState([151,'Shaykh al-Hind Mahmud al-Hasan(with Tafsir E Usmani)'])
  const [translist,upTranslist] = useState([...JSON.parse(localStorage.getItem("translation"))])
  const [langs , setLangs] = useState([]);
  const [trans , setTrans] = useState([]);
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
  function togTrans(a) {
    const form = document.getElementById("trans_form"),
    mainSec = document.getElementById("setting_main");

    if(a == "show"){
          fetch("https://api.quran.com/api/v3/options/languages")
      .then((response) => response.json())
      .then((data) => ( setLangs([...data.languages]) ))
      .catch((err) => console.error(err));

    form.style.display = "flex";
    mainSec.scrollTop = "0";
    mainSec.style.overflow = "hidden";
    }
    if(a == "hide")
    {   
      form.style.display = "none";
      mainSec.style.overflow = "scroll";  
    }

  }
  function addTrans(){
    if(tran[0] != 0)
    {
         if(localStorage.getItem("translation")){
      localStorage.setItem("translation",JSON.stringify([...JSON.parse(localStorage.getItem("translation")).filter(id=>id!=tran[0]),tran[0]]))
    }
    else{localStorage.setItem("translation",JSON.stringify([tran[0]]))}
    togTrans("hide") 
    }
    upTranslist([...translist,tran[0]])

  }
  function deleteTrans() {
    console.log("i will delete a translation");
  }
  function optTog(o,l) {
    const tr1 = document.getElementById(o),
    tr2 = document.getElementById(l)
    if(tr2.classList.contains('opt_of') === false){tr2.classList.toggle("opt_of")}
    tr1.classList.toggle("opt_of")
  }
  useEffect(()=>{
    fetch("https://api.quran.com/api/v3/options/translations")
    .then((response) => response.json())
    .then((data) => setTrans([...data.translations]))
    .catch((err) => console.error(err));
  },[])
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
        <ThemeBtn type="ban" />
        <div id="cir">
          <div id="icn">
            <div className={theme === "light"? "lightmode" : "darkmode"} id="inc"></div>
          </div>
        </div>
      </div>
      <hr />
      <h1 className="sub_heading">Translations</h1>
      <div id="translations">
        <div id="trans_head">
          <p>sr#</p>
          <p>Translation</p>
          <p>Translator</p>
          <p>Language</p>
          <p onClick={()=>togTrans("show")}>
            <RiAddLine />
          </p>
        </div>
        <ul id="trans_list">
          {
                        trans.length > 0 ?
                        translist.map((value, i) => 
                        <li key={i}>
                        <p>{i+1}</p>
                        <p>{trans.find(({ id }) => id === value).name}</p>
                        <p>{trans.find(({ id }) => id === value).author_name}</p>
                        <p>{trans.find(({ id }) => id === value).language_name}</p>
                        <p>
                          <RiDeleteBin7Fill />
                        </p>
                      </li>)
                        : null
          }
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
      <div id="trans_form">
        <div className="form">
          <div onClick={()=>optTog("lang_opt","tran_opt")} className="lang_slc slc" >{lang}</div>
          <div className="opt opt_of" id="lang_opt">
          {
            langs.length > 0 ?
            langs.sort(function (a, b) {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
            .map((value, i) => <p onClick={()=>{
              changeLang(value.name)
              changeTran([0,`Select ${value.name} translation`])
              optTog("lang_opt","tran_opt")
            }} key={i}>{value.name}</p>)
            : null
          }
          </div>          
          <div className="tran_slc slc" onClick={()=>optTog("tran_opt","lang_opt")}>{`${tran[1].slice(0,30)}...`}</div>
          <div className="opt opt_of" id="tran_opt">
          {
            trans.length > 0 ?
            trans
            .filter(tran => tran.language_name == lang.toLowerCase())
            .map((value, i) => <p onClick={()=>{
              changeTran([value.id,value.name])
              optTog("tran_opt","lang_opt")
            }} key={i}>{value.name}</p>)
            : null
          }
          </div>
          <button className="btnu" id="add_tran" onClick={addTrans}>Select</button>
          <button className="btnu" id="cncl" onClick={()=>togTrans("hide")}>Cancle</button>
        </div>
      </div>
    </div>
  );
}
export default SettingMain;
