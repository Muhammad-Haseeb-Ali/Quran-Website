
function SurahFeed(props) {
  if (props.short === "surah" && props.view === "grid") {
    return (
      <div onClick={e => props.open(e, props.data.id, "likedSurah")} className="feed" key={props.key}>
        <div className="f_top">
          <p className="srno">{props.data.id}</p>
          <svg id="likeSVG" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path id={`likedSurah${props.data.id}`} className={`${(localStorage.getItem("likedSurah") && JSON.parse(localStorage.getItem("likedSurah")).find(e => e == props.data.id)) ? "likedSVGbtn" : "unlikedSVGbtn"}`} fill-rule="evenodd" clip-rule="evenodd" d="M19.4255 5.6081C21.5255 7.62057 21.5248 10.8835 19.4239 12.8952L12.0001 20L4.57617 12.8952C2.47532 10.8835 2.47462 7.62056 4.57461 5.60809C6.39411 3.78856 8.74199 3.91193 10.9582 5.90877C11.3096 6.22546 11.6578 6.58928 12 6.99994C12.3422 6.58928 12.6904 6.22547 13.0419 5.90877C15.2581 3.91194 17.606 3.78856 19.4255 5.6081ZM12.0001 17.9238L18.3865 11.8118C19.8708 10.3905 19.8712 8.11285 18.3876 6.69109L18.3761 6.68004L18.3648 6.66875C17.6197 5.92357 16.8736 5.72658 16.1322 5.86353C15.3151 6.01444 14.2701 6.61886 13.1524 7.96022L12 9.34302L10.8477 7.96022C9.72989 6.61886 8.68494 6.01443 7.8679 5.86353C7.12644 5.72658 6.38045 5.92356 5.63528 6.66874L5.62399 6.68003L5.61246 6.69108C4.12896 8.11275 4.12932 10.3902 5.61328 11.8115C5.61338 11.8116 5.61348 11.8117 5.61358 11.8118L12.0001 17.9238Z" />
          </svg>
        </div>
        <div className="f_data">
          <h1>
            {props.data.name_simple}
            <br />
            <samp>{props.data.translated_name.name}</samp>
          </h1>
        </div>
      </div>
    );
  }
  if (props.short === "surah" && props.view === "list") {
    return (
      <div onClick={e => props.open(e, props.data.id, "likedSurah")} className="feed" key={props.key}>
        <div className="f_top">
          <p className="srno">{props.data.id}</p>
          <svg id="likeSVG" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path id={`likedSurah${props.data.id}`} className={`${(localStorage.getItem("likedSurah") && JSON.parse(localStorage.getItem("likedSurah")).find(e => e == props.data.id)) ? "likedSVGbtn" : "unlikedSVGbtn"}`} fill-rule="evenodd" clip-rule="evenodd" d="M19.4255 5.6081C21.5255 7.62057 21.5248 10.8835 19.4239 12.8952L12.0001 20L4.57617 12.8952C2.47532 10.8835 2.47462 7.62056 4.57461 5.60809C6.39411 3.78856 8.74199 3.91193 10.9582 5.90877C11.3096 6.22546 11.6578 6.58928 12 6.99994C12.3422 6.58928 12.6904 6.22547 13.0419 5.90877C15.2581 3.91194 17.606 3.78856 19.4255 5.6081ZM12.0001 17.9238L18.3865 11.8118C19.8708 10.3905 19.8712 8.11285 18.3876 6.69109L18.3761 6.68004L18.3648 6.66875C17.6197 5.92357 16.8736 5.72658 16.1322 5.86353C15.3151 6.01444 14.2701 6.61886 13.1524 7.96022L12 9.34302L10.8477 7.96022C9.72989 6.61886 8.68494 6.01443 7.8679 5.86353C7.12644 5.72658 6.38045 5.92356 5.63528 6.66874L5.62399 6.68003L5.61246 6.69108C4.12896 8.11275 4.12932 10.3902 5.61328 11.8115C5.61338 11.8116 5.61348 11.8117 5.61358 11.8118L12.0001 17.9238Z" />
          </svg>
        </div>
        <div className="f_data">
          <h1>
            {props.data.name_simple}
            <br />
            <samp>{props.data.translated_name.name}</samp>
          </h1>
          <h1>
            {props.data.name_arabic}
            <br />
            <samp>{props.data.verses_count} Verses, {props.data.revelation_place}</samp>
          </h1>
        </div>
      </div>
    );
  }

}

export default SurahFeed;