import "./styles/readmain.css";
import AyatFeed from "./AyatFeed";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import  AyatMarker  from "./AyatMarker";
function ReadMain() {
  const navigator = useNavigate()
  const [data, setData] = useState([]);
  const [loop, setLoop] = useState([]);
  const [stage, setStage] = useState([1, 0]);
  const [loadingState, changeLoadingState] = useState("block");
  const { short, id } = useParams();
  const storeData = useSelector((state) => state.mataData.data);
  useEffect(() => {
    if (!localStorage.getItem("translation")) {
      localStorage.setItem("translation", JSON.stringify([]))
    }
    async function makeLoop() {
      if (short === "juz") {
        var objs = [];
        Object.entries(storeData[1][id - 1].verse_mapping).forEach(
          ([id, verses]) => {
            objs = [
              ...objs,
              { id, start: verses.split("-")[0], end: verses.split("-")[1] },
            ];
          }
        );
        setLoop(objs);
      }
      if (short === "surah") {
        setLoop([{
          id, start: 1, end: storeData[0][id - 1].verses_count
        }]);
      }
    }
    async function dataFetching() {
      const result = await fetch(
        `http://api.quran.com/api/v3/chapters/${loop[stage[1]].id
        }/verses?recitation=1&page=${stage[0]}&offset=${parseInt(loop[stage[1]].start) - 1
        }${localStorage.getItem("translation") ? `&translations=${JSON.parse(localStorage.getItem("translation"))}` : ''}`
      )
        .then((res) => res.json())
        .catch((err) => err);
      console.warn("result", result);
      if (result.pagination.total_pages >= stage[0] && loop[stage[1]].end >= result.verses[0].verse_number) {
        if (stage[0] === 1) {
          setData([
            ...data,
            {
              first: true,
              no: loop[stage[1]].id,
              bis: storeData[0][loop[stage[1]].id - 1].bismillah_pre,
              simple_name: storeData[0][loop[stage[1]].id - 1].name_simple,
              meaning: storeData[0][loop[stage[1]].id - 1].translated_name.name,
              verses:
                short === "surah"
                  ? storeData[0][loop[stage[1]].id - 1].verses_count
                  : `${loop[stage[1]].start} to ${loop[stage[1]].end}`,
            },
            ...result.verses.filter(
              (e) => e.verse_number <= loop[stage[1]].end
            ),
          ]);
        } else {
          setData([
            ...data,
            ...result.verses.filter(
              (e) => e.verse_number <= loop[stage[1]].end
            ),
          ]);
        }
      } else {
        console.warn("im", loop, stage);
        if (loop.length === stage[1] + 1) {
          changeLoadingState("none");
        } else {
          setStage([1, stage[1] + 1]);
        }
      }
    }
    if (storeData !== undefined) {
      console.warn(stage, loop);
      loop.length === 0 && makeLoop();
      dataFetching();
    }
  }, [storeData, stage, loop]);

  const onScrolling = () => {
    var myDiv = document.getElementById("read_main");
    var currentProgress = document.getElementById("current_progress");

    if (myDiv.offsetHeight + myDiv.scrollTop == myDiv.scrollHeight) {
      setStage([stage[0] + 1, stage[1]]);
    }
  };

  function wordAudio(e) {
    var url = `https://audio.qurancdn.com/${e.target.attributes.audio.nodeValue}`;
    let audio = new Audio(url);

    audio.play();
  }

  // Update the current slider value (each time you drag the slider handle)
  function sliderVal() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
  }


  return (
    <div onScroll={onScrolling} className="main" id="read_main">
          <AyatMarker/>
      <div className="contant_top_nav">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => { navigator(-1) }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10.5 7.5L14 11H6V13H14L10.5 16.5L12 18L18 12L12 6L10.5 7.5Z"
            transform="rotate(-180 12 12)"
          />
        </svg>
        <div>
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
              d="M13.8091 9.41249C14.5395 10.3769 15.697 11 17 11C19.2091 11 21 9.20914 21 7C21 4.79086 19.2091 3 17 3C14.7909 3 13 4.79086 13 7C13 7.1919 13.0135 7.38065 13.0396 7.56534L9.0296 9.38809C8.29609 8.53804 7.21088 8 6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16C7.21088 16 8.29609 15.462 9.0296 14.6119L13.0396 16.4346C13.0135 16.6193 13 16.8081 13 17C13 19.2091 14.7909 21 17 21C19.2091 21 21 19.2091 21 17C21 14.7909 19.2091 13 17 13C15.697 13 14.5395 13.6231 13.8091 14.5875L9.91628 12.818C9.97116 12.554 10 12.2803 10 12C10 11.7197 9.97116 11.446 9.91628 11.182L13.8091 9.41249ZM15 7C15 8.10457 15.8954 9 17 9C18.1046 9 19 8.10457 19 7C19 5.89543 18.1046 5 17 5C15.8954 5 15 5.89543 15 7ZM17 19C15.8954 19 15 18.1046 15 17C15 15.8954 15.8954 15 17 15C18.1046 15 19 15.8954 19 17C19 18.1046 18.1046 19 17 19ZM4 12C4 13.1046 4.89543 14 6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12Z"
            />
          </svg>
        </div>
      </div>
      {data.length > 0 &&
        data.map((val, ind) => (
          <AyatFeed data={val} key={ind} wordAudio={wordAudio} />
        ))}

      <div className="ayat" id="loading" style={{ display: loadingState }}>
        <div id="loading_ayat_no">{""}</div>
        <div id="loading_arabic_ayat">
          <samp></samp>
        </div>
        <hr />
        <div id="loading_ayat_opt">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="ayat" id="loading" style={{ display: loadingState }}>
        <div id="loading_ayat_no">{""}</div>
        <div id="loading_arabic_ayat">
          <samp></samp>
        </div>
        <hr />
        <div id="loading_ayat_opt">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* <div className="progress_bar"><div id="current_progress"></div></div> */}
    </div>
  );
}
export default ReadMain;
