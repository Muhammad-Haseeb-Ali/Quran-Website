import "./styles/markmain.css";
import {IoArrowBackCircle} from "react-icons/io5"
import { useNavigate } from "react-router-dom";
import AyatMarker from "./AyatMarker";
import MarkedAyat from "./MarkedAyat";

function MarkMain() {
  const navigator = useNavigate();

  return (
    <div className="main" id="mark_main">
      <div id="options">
        <IoArrowBackCircle className="backSVG"
          onClick={() => {
            navigator(-1);
          }}
        />
      </div>
      <AyatMarker/>
      <MarkedAyat/>
    </div>
  );
}


export default MarkMain