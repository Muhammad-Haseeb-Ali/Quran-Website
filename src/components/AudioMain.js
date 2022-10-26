import { useRef } from "react";
import "./styles/audiomain.css";

function AudioMain() {
  const ref = useRef();
  function setVol() {}
  return (
    <div className="main" id="audio_main">
      <img src="/development.svg" width="300px" />
      <br/>
      <h1>This Section is under Development</h1>
      {/* <div className="player">
        <div className="player_banner">
          <img className="bg" src="/quran.jpg" />
          <h1 className="top_name surah_info">
            Al Fatiha <br />
            <samp>The Opener</samp>
          </h1>
          <div className="reciter_info">
            <h1 className="top_name">
              Mishari Rashid al-`Afasy <br />
              <samp>The Opener</samp>
            </h1>
            <img src="\Mishari Rashid al-`Afasy.jpg" />
          </div>
        </div>
        <div className="player_controller">
          <div className="slides">
            <input
              id="audio_slide"
              type="range"
              min="1"
              max="100"
              defaultValue="1"
            />
            <div id="volume_slide">
              <input type="radio" id="volume_1" name="volume" value="1" />
              <input
                type="radio"
                id="volume_2"
                name="volume"
                value="2"
              />
              <input type="radio" id="volume_3" name="volume" value="3" />
              <input type="radio" id="volume_4" name="volume" value="4" />
              <input type="radio" id="volume_5" name="volume" value="5" />
            </div>
          </div>
          <div id="audio_btns">
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1132 8.80421V15.1957C11.1132 15.9812 10.2493 16.46 9.58325 16.0437L4.47003 12.848C3.84332 12.4563 3.84332 11.5436 4.47003 11.152L9.58325 7.95622C10.2493 7.53993 11.1132 8.01878 11.1132 8.80421Z"
                  fill="black"
                />
                <path
                  d="M19.1132 8.80421V15.1957C19.1132 15.9812 18.2493 16.46 17.5833 16.0437L12.47 12.848C11.8433 12.4563 11.8433 11.5436 12.47 11.152L17.5833 7.95622C18.2493 7.53993 19.1132 8.01878 19.1132 8.80421Z"
                  fill="black"
                />
              </svg>
            </button>
            <button>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6.00148L6 18.5551C6 19.3229 6.82948 19.8043 7.49614 19.4234L18.4806 13.1465C19.1524 12.7626 19.1524 11.7939 18.4806 11.4101L7.49614 5.13323C6.82948 4.75229 6 5.23366 6 6.00148Z"
                  fill="black"
                />
              </svg>
            </button>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 8.80424V15.1958C4 15.9812 4.86395 16.46 5.53 16.0437L10.6432 12.848C11.2699 12.4563 11.2699 11.5437 10.6432 11.152L5.53 7.95625C4.86395 7.53996 4 8.01881 4 8.80424Z"
                  fill="black"
                />
                <path
                  d="M12 8.80424V15.1958C12 15.9812 12.864 16.46 13.53 16.0437L18.6432 12.848C19.2699 12.4563 19.2699 11.5437 18.6432 11.152L13.53 7.95625C12.864 7.53996 12 8.01881 12 8.80424Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div id="right_menu">
        <div id="recitation_style">
        <select name="recitation_style_selector" id="recitation_style_selector">
  <option value="All">All</option>
  <option value="Mujawwad">Mujawwad</option>
  <option value="Murattal">Murattal</option>
  <option value="Muallim" id="options">Muallim</option>
</select>
        </div>
        <div className="recitor">
          <div className="reciter_info">
        <img src="\Mishari Rashid al-`Afasy.jpg" />

            <h1 className="top_name">
              Mishari Rashid al-`Afasy <br />
              <samp>The Opener</samp>
            </h1>
          </div>
          <div className="reciter_info">
        <img src="\Mishari Rashid al-`Afasy.jpg" />

            <h1 className="top_name">
              Mishari Rashid al-`Afasy <br />
              <samp>The Opener</samp>
            </h1>
          </div>
          <div className="reciter_info">
        <img src="\Mishari Rashid al-`Afasy.jpg" />

            <h1 className="top_name">
              Mishari Rashid al-`Afasy <br />
              <samp>The Opener</samp>
            </h1>
          </div>
          </div>
          
      </div> */}


    </div>
  );
}
export default AudioMain;
