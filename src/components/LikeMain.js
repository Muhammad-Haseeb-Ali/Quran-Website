import "./styles/likemain.css";
import { IoArrowBackCircle } from "react-icons/io5"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import JuzFeed from "./JuzFeed";
import SurahFeed from "./SurahFeed";
import AyatFeed from "./AyatFeed";
import { useSelector } from "react-redux";


function LikeMain() {
  const navigator = useNavigate();
  const [key, changeKey] = useState("surah")
  const [likedData, setLikedData] = useState({})
  const APIdata = useSelector((state) => state.mataData);
  useEffect(() => {
    if(!localStorage.getItem('likedAyat')) localStorage.setItem('likedAyat','[]')
    const likedAyat = JSON.parse(localStorage.getItem('likedAyat'));
    var ayatDATA = []
    for (var o of likedAyat) {
      fetch(`http://api.quran.com/api/v3/chapters/${o.surahNo}/verses/${o.ayatNo}`)
      .then(res=>res.json())
      .then(data=>{
        ayatDATA = [...ayatDATA,data]
        if(likedAyat.length == ayatDATA.length){
          setLikedData({
            surah: [...JSON.parse(localStorage.getItem("likedSurah"))],
            juz: [...JSON.parse(localStorage.getItem("likedJuz"))],
            ayat:[...ayatDATA]
          })
        }
      })
    }

  }, [])

  function feedClicked(e, go, address) {
    if (e.target.id == "likeSVG" || e.target.id == "likeSVGbtn") {
      if (!localStorage.getItem(address)) { localStorage.setItem(address, '[]') }
      localStorage.setItem(
        address,
        JSON.parse(localStorage.getItem(address)).find(e => e == go) ?
          JSON.stringify(JSON.parse(localStorage.getItem(address)).filter(e => e != go))
          :
          JSON.stringify([...JSON.parse(localStorage.getItem(address)), go])
      )
      setLikedData({
        surah: [...JSON.parse(localStorage.getItem("likedSurah"))],
        juz: [...JSON.parse(localStorage.getItem("likedJuz"))]
      })
    }
    else { navigator(`../home/${key}/${go}`) }
  }

  function wordAudio(e) {
    var url = `https://audio.qurancdn.com/${e.target.attributes.audio.nodeValue}`;
    let audio = new Audio(url);

    audio.play();
  }

  function RenderdLikeData({ point }) {
    if (APIdata.status == "success")
      switch (point) {
        case "surah":
          return likedData.surah.map((value, i) => (
            <SurahFeed
              data={APIdata.data[0][value - 1]}
              key={i}
              view="list"
              short="surah"
              open={feedClicked}
            />
          ))
        case "juz":
          return likedData.juz.map((value, i) => (
            <JuzFeed
              data={[APIdata.data[1][value - 1], APIdata.data[0]]}
              key={i}
              view="list"
              short='juz'
              open={feedClicked}
            />
          ))

        case "ayat":
          return likedData.ayat.map((val, ind) => (
            <AyatFeed data={val.verse} key={ind} wordAudio={wordAudio} />
          ))
      }
  }

  function changePoint(e) {
    const target = e.target.innerHTML.toLowerCase()
    changeKey(target)
  }

  return (
    <div className="main" id="like_main">

      <div id="options">
        <IoArrowBackCircle className="backSVG"
          onClick={() => {
            navigator(-1);
          }}
        />
        <ul>
          <li className={key == "surah" ? 'active' : ''} onClick={changePoint}>Surah</li>
          <li className={key == "juz" ? 'active' : ''} onClick={changePoint}>Juz</li>
          <li className={key == "ayat" ? 'active' : ''} onClick={changePoint}>Ayat</li>
        </ul>
      </div>
      {
        (likedData.surah || likedData.para || likedData.ayat) ?
          <RenderdLikeData point={key} />
          : null
      }
    </div>
  );
}


export default LikeMain