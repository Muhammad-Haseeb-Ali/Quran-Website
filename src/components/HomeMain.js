import "./styles/homemain.css";
import JuzFeed from "./JuzFeed";
import SurahFeed from "./SurahFeed";
import { GrFormNext, GrFormClose, GrFormSearch } from "react-icons/gr";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import {
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useSelector } from "react-redux";

function HomeMain() {
  const shortparam = useParams().short;
  const [filterparam, changeFilter] = useSearchParams();
  const ref = useRef(null);
  const navigator = useNavigate();

  function feedClicked(e,go,address){
    if(e.target.id == "likeSVG" || e.target.id == "likeSVGbtn")
    {
      if(!localStorage.getItem(address))
      {localStorage.setItem(address,'[]')}
      localStorage.setItem(
        address,
        JSON.parse(localStorage.getItem(address)).find(e=>e==go)?
        JSON.stringify(JSON.parse(localStorage.getItem(address)).filter(e=>e!=go))
        :
        JSON.stringify([...JSON.parse(localStorage.getItem(address)),go])
        )
        document.getElementById(`${address}${go}`).classList.toggle("likedSVGbtn")
        document.getElementById(`${address}${go}`).classList.toggle("unlikedSVGbtn")
        console.warn(e)
    }
    else{navigator(JSON.stringify(go))}
  }

  var filter;
  if (shortparam !== "surah" && shortparam !== "juz") {
    navigator("/not_found");
  }
  useEffect(() => {
    if (filterparam.get("filter")) {
      ref.current.value = filterparam.get("filter");
      makeFilter();
    }
  }, [filterparam]);

  function makeFilter() {
    ref.current.blur();
    changeSrchIcn(
      <>
      <GrFormClose onClick={() => clearFilter()} className="icon sf" />
      <GrFormClose onClick={() => clearFilter()} className="icon sf" id="mobile_srch_icn"/>
      </>
    );
  }
  function clearFilter() {
    changeSrchIcn(
      <>
      <GrFormSearch className="icon sf" />
      <GrFormNext className="icon sf" onClick={serchIcnClicked} id="mobile_srch_icn" />
    </>
    );
    filterparam.delete("filter");
    changeFilter(filterparam);
    ref.current.value = "";
  }
  const APIdata = useSelector((state) => state.mataData);
  console.log("matadata", APIdata);
  const [view, changeView] = useState(["grid", "grid", "llist"]);
  const [icon, changeIcon] = useState([<FaAngleDown />, <FaAngleUp />]);
  const [srchIcn, changeSrchIcn] = useState(
    <>
    <GrFormSearch className="icon sf" />
    <GrFormSearch className="icon sf" onClick={serchIcnClicked} id="mobile_srch_icn" />
  </>
  );

  const sopt_tog = () => {
    document.getElementById("sopt").classList.toggle("sopt_tog");
    changeIcon([icon[1], icon[0]]);
  };

  function serchIcnClicked(){
    const hasWindow = typeof window !== 'undefined';
    const width = hasWindow ? window.innerWidth : null;
    if(width <= 520){
      const filterIn = document.getElementById("filter_in")
      const shortBy = document.getElementById("short_by")

      if(filterIn.style.display == "block"){
        changeSrchIcn(
          <>
          <GrFormSearch onClick={serchIcnClicked} className="icon sf" id="mobile_srch_icn" />
          </>
        );
      }
      else{
        changeSrchIcn(
          <>
          <GrFormNext onClick={serchIcnClicked} className="icon sf" id="mobile_srch_icn" />
          </>
        );
      }

      filterIn.style.display = filterIn.style.display == "block" ? "none" : "block" ;
      shortBy.style.display = shortBy.style.display == "none" ? "block" : "none";

    }
  }
  return (
    <div className="main">
      <div id="options">
        <div className="format">
          <img
            onClick={() => {
              changeView(["grid", "grid", "llist"]);
            }}
            src={`/${view[1]}.png`}
          />
          <img
            onClick={() => {
              changeView(["list", "lgrid", "list"]);
            }}
            src={`/${view[2]}.png`}
          />
        </div>
        <div>
          <div className="short" id="short_by">
            <p>
              Short by{" "}
              <samp onClick={sopt_tog}>
                {shortparam} {icon[0]}
              </samp>{" "}
            </p>
            <p>
              <samp onClick={sopt_tog}>
                {shortparam} {icon[0]}
              </samp>{" "}
            </p>
            <ul className="sopt_tog" id="sopt">
              <NavLink to="/home/surah">
                <li onClick={() => sopt_tog()}>surah</li>
              </NavLink>
              <NavLink to="/home/juz">
                <li onClick={() => sopt_tog()}>juz</li>
              </NavLink>
            </ul>
          </div>
          <div className="filter">
            <input
              onKeyDown={(e) =>
                e.code === "Enter" &&
                changeFilter({ filter: ref.current.value })
              }
              type="text"
              placeholder="Search..."
              value={filter}
              maxLength={20}
              ref={ref}
              id='filter_in'
            />
            {srchIcn}
          </div>
        </div>
      </div>
      <div className={view[0]} id="feeds">
        {APIdata.status === "success"
          ? shortparam === "surah"
            ? filterparam.get("filter")
              ? APIdata.data[0].filter((val) => val.id == filterparam.get("filter") || val.revelation_place == filterparam.get("filter") || val.name_simple ==  filterparam.get("filter") || val.name_arabic ==   filterparam.get("filter") || val.translated_name.name ==  filterparam.get("filter") )
              .map((value, i) => (
                    <SurahFeed
                      data={value}
                      key={i}
                      view={view[0]}
                      short={shortparam}
                      open={feedClicked}
                    />
                  ))
              : APIdata.data[0].map((value, i) => (
                  <SurahFeed
                    data={value}
                    key={i}
                    view={view[0]}
                    short={shortparam}
                    open={feedClicked}
                  />
                ))
            : filterparam.get("filter")
            ? APIdata.data[1]
                .filter((val) => val.id == filterparam.get("filter"))
                .map((value, i) => (
                  <SurahFeed
                    data={value}
                    key={i}
                    view={view[0]}
                    short={shortparam}
                    open={feedClicked}
                  />
                ))
            : APIdata.data[1].map((value, i) => (
                <JuzFeed
                  data={[value, APIdata.data[0]]}
                  key={i}
                  view={view[0]}
                  short={shortparam}
                  open={feedClicked}
                />
              ))
          : null}
      </div>
    </div>
  );
}

export default HomeMain;
