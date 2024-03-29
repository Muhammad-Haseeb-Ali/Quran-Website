import IntroTop from "./IntroTop";
function AyatFeed(props) {


  function likeANDmark(e, address, ayatNo, surahNo) {

    if (ayatNo == null || surahNo == null) return
    document.getElementById(`${address}${surahNo}:${ayatNo}`).classList.toggle("likedSVGbtn")
    if (address == "likedAyat" || (address == "markFor" && !document.getElementById(`${address}${surahNo}:${ayatNo}`).classList.contains('unlikedSVGbtn'))) {
      if(address == "markFor")
      document.getElementById("ayatMarker").style.display = "flex";
      if (!localStorage.getItem(address))
        localStorage.setItem(address, '[]')
      localStorage.setItem(
        address,
        JSON.parse(localStorage.getItem(address)).find(e => (e.surahNo == surahNo && e.ayatNo == ayatNo)) ?
          JSON.stringify(JSON.parse(localStorage.getItem(address)).filter(e => !(e.surahNo == surahNo && e.ayatNo == ayatNo)))
          :
          JSON.stringify([...JSON.parse(localStorage.getItem(address)), { surahNo, ayatNo }])
      )
      return;
    }
    localStorage.setItem("markedAyat",JSON.stringify([...JSON.parse(localStorage.getItem('markedAyat')).filter(e=>(e.surahNo!=surahNo && e.ayatNo!=ayatNo))]))
  }



  if (props.data.first) {
    return (
      <IntroTop
        id={props.data.no}
        name={props.data.simple_name}
        mean={props.data.meaning}
        verses={props.data.verses}
        bis={props.data.bis}
      />)
  }
  else {
    return (
        <div className="ayat" key={props.key}>
          <p className="ayat_no">{props.data.verse_key}</p>
          <h1 className="arabic_ayat">
            {props.data.words.map((val, ind) => (
              <samp
                onClick={props.wordAudio}
                audio={val.audio.url}
                means={val.translation.text.replace(/ /g, "_")}
                style={{ "font-size": localStorage.getItem("Ayat-Size") ? `${localStorage.getItem("Ayat-Size")}px` : "30px" }}
              >
                {val.text_madani}{" "}
              </samp>
            ))}
          </h1>
          <h1 className="sub_heading">Transliteration :</h1>
          <h1 className="eng_ayat">
            {props.data.words.map((val, ind) => (
              <samp style={{ "font-size": localStorage.getItem("Eng-Ayat-Size") ? `${localStorage.getItem("Eng-Ayat-Size")}px` : "30px" }}
              >{val.transliteration.text}{" "}</samp>
            ))}
          </h1>
          <h1 className="sub_heading">Transations :</h1>
          {/* {
            props.data.translations.map((val,ind)=><h1>{val.text}</h1>)
          } */}
          <h1>

          </h1>
          <hr />
          <div className="ayat_opt">
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={e => likeANDmark(e, 'likedAyat', props.data.verse_key.split(":")[1], props.data.verse_key.split(":")[0])}>
                <path id={'likedAyat' + props.data.verse_key} className={(localStorage.getItem("likedAyat") && JSON.parse(localStorage.getItem("likedAyat")).find(e => (e.surahNo == props.data.verse_key.split(":")[0] && e.ayatNo == props.data.verse_key.split(":")[1]))) ? "likedSVGbtn" : ''} fill-rule="evenodd" clip-rule="evenodd" d="M19.4255 5.6081C21.5255 7.62057 21.5248 10.8835 19.4239 12.8952L12.0001 20L4.57617 12.8952C2.47532 10.8835 2.47462 7.62056 4.57461 5.60809C6.39411 3.78856 8.74199 3.91193 10.9582 5.90877C11.3096 6.22546 11.6578 6.58928 12 6.99994C12.3422 6.58928 12.6904 6.22547 13.0419 5.90877C15.2581 3.91194 17.606 3.78856 19.4255 5.6081ZM12.0001 17.9238L18.3865 11.8118C19.8708 10.3905 19.8712 8.11285 18.3876 6.69109L18.3761 6.68004L18.3648 6.66875C17.6197 5.92357 16.8736 5.72658 16.1322 5.86353C15.3151 6.01444 14.2701 6.61886 13.1524 7.96022L12 9.34302L10.8477 7.96022C9.72989 6.61886 8.68494 6.01443 7.8679 5.86353C7.12644 5.72658 6.38045 5.92356 5.63528 6.66874L5.62399 6.68003L5.61246 6.69108C4.12896 8.11275 4.12932 10.3902 5.61328 11.8115C5.61338 11.8116 5.61348 11.8117 5.61358 11.8118L12.0001 17.9238Z" />
              </svg>
            </div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={e => likeANDmark(e, 'markFor', props.data.verse_key.split(":")[1], props.data.verse_key.split(":")[0])}
              >
                <path
                  id={'markFor' + props.data.verse_key}
                  className={(localStorage.getItem("markedAyat") && JSON.parse(localStorage.getItem("markedAyat")).find(e => (e.surahNo == props.data.verse_key.split(":")[0] && e.ayatNo == props.data.verse_key.split(":")[1]))) ? "likedSVGbtn" : 'unlikedSVGbtn'}
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.24998 4.5C5.24998 3.67157 5.92155 3 6.74998 3H17.25C18.0784 3 18.75 3.67157 18.75 4.5V19.4838C18.75 20.8422 17.0887 21.501 16.1577 20.5119L12 16.0943L7.84228 20.5119C6.9113 21.501 5.24998 20.8422 5.24998 19.4838V4.5ZM17.25 4.5L6.74998 4.5V19.4838L10.9077 15.0663C11.4999 14.437 12.5 14.437 13.0923 15.0663L17.25 19.4838V4.5Z"
                />
              </svg>
            </div>
            {/* <div>
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
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 20H8C7.20435 20 6.44129 19.6839 5.87868 19.1213C5.31607 18.5587 5 17.7956 5 17V7C5 6.73478 4.89464 6.48043 4.70711 6.29289C4.51957 6.10536 4.26522 6 4 6C3.73478 6 3.48043 6.10536 3.29289 6.29289C3.10536 6.48043 3 6.73478 3 7V17C3 18.3261 3.52678 19.5979 4.46447 20.5355C5.40215 21.4732 6.67392 22 8 22H16C16.2652 22 16.5196 21.8946 16.7071 21.7071C16.8946 21.5196 17 21.2652 17 21C17 20.7348 16.8946 20.4804 16.7071 20.2929C16.5196 20.1054 16.2652 20 16 20ZM21 8.94C20.9896 8.84813 20.9695 8.75763 20.94 8.67V8.58C20.8919 8.47718 20.8278 8.38267 20.75 8.3L14.75 2.3C14.6673 2.22222 14.5728 2.15808 14.47 2.11H14.38L14.06 2H10C9.20435 2 8.44129 2.31607 7.87868 2.87868C7.31607 3.44129 7 4.20435 7 5V15C7 15.7956 7.31607 16.5587 7.87868 17.1213C8.44129 17.6839 9.20435 18 10 18H18C18.7956 18 19.5587 17.6839 20.1213 17.1213C20.6839 16.5587 21 15.7956 21 15V9C21 9 21 9 21 8.94ZM15 5.41L17.59 8H16C15.7348 8 15.4804 7.89464 15.2929 7.70711C15.1054 7.51957 15 7.26522 15 7V5.41ZM19 15C19 15.2652 18.8946 15.5196 18.7071 15.7071C18.5196 15.8946 18.2652 16 18 16H10C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4H13V7C13 7.79565 13.3161 8.55871 13.8787 9.12132C14.4413 9.68393 15.2044 10 16 10H19V15Z"
                />
              </svg>
            </div> */}
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={props.wordAudio}
                audio={props.data.audio ? props.data.audio.url : ""}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.51051 4.5184C6.51056 3.93019 5.24998 4.65117 5.24998 5.8113V18.1887C5.24998 19.3488 6.51056 20.0698 7.51051 19.4816L18.0313 13.2929C19.0172 12.7129 19.0172 11.2871 18.0313 10.7071L7.51051 4.5184ZM6.74998 5.8113L17.2708 12L6.74998 18.1887V5.8113Z"
                />
              </svg>
            </div>
          </div>
          {
            (props.title && props.note) &&
            <div className="markmap">
            <h4>{props.title}</h4>
            <p>{props.note}</p>
            </div>
          }
        </div>
    )
  }

}
export default AyatFeed;
