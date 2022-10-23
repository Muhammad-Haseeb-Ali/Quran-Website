import "./styles/homemain.css";
import JuzFeed from "./JuzFeed";
import SurahFeed from "./SurahFeed";
import { GrFormClose, GrFormSearch } from "react-icons/gr";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import {
  Navigate,
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
      <GrFormClose onClick={() => clearFilter()} className="icon sf" />
    );
  }
  function clearFilter() {
    changeSrchIcn(<GrFormSearch className="icon sf" />);
    filterparam.delete("filter");
    changeFilter(filterparam);
    ref.current.value = "";
  }
  const APIdata = useSelector((state) => state.mataData);
  console.log("matadata", APIdata);
  const [view, changeView] = useState(["grid", "grid", "llist"]);
  const [icon, changeIcon] = useState([<FaAngleDown />, <FaAngleUp />]);
  const [srchIcn, changeSrchIcn] = useState(
    <GrFormSearch className="icon sf" />
  );

  const sopt_tog = () => {
    document.getElementById("sopt").classList.toggle("sopt_tog");
    changeIcon([icon[1], icon[0]]);
  };

  useEffect(() => {}, []);

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
            />
            {srchIcn}
          </div>
          <div className="short">
            <p>
              Short by{" "}
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
                    />
                  ))
              : APIdata.data[0].map((value, i) => (
                  <SurahFeed
                    data={value}
                    key={i}
                    view={view[0]}
                    short={shortparam}
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
                  />
                ))
            : APIdata.data[1].map((value, i) => (
                <JuzFeed
                  data={[value, APIdata.data[0]]}
                  key={i}
                  view={view[0]}
                  short={shortparam}
                />
              ))
          : null}
      </div>
    </div>
  );
}

export default HomeMain;
