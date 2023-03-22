export default function AyatMarker(props) {
    function Marker(event) {
        if (localStorage.getItem("markFor")) {
            const { surahNo, ayatNo } = JSON.parse(localStorage.getItem("markFor"))[0]
            switch (event) {
                case 'add':
                    const
                        title = document.getElementById("mark-title").value,
                        note = document.getElementById("mark-note").value

                    if (!localStorage.getItem("markedAyat")) localStorage.setItem("markedAyat", '[]')
                    localStorage.setItem("markedAyat", JSON.stringify([
                        ...JSON.parse(localStorage.getItem("markedAyat")),
                        { title, note, ayatNo, surahNo }
                    ]))
                    break;
                case "cnc":
                    document.getElementById(`markFor${surahNo}:${ayatNo}`).classList.toggle("likedSVGbtn")
                    document.getElementById(`markFor${surahNo}:${ayatNo}`).classList.toggle("unlikedSVGbtn")
                    break;
            }
        }
        localStorage.removeItem("markFor")
        document.getElementById("ayatMarker").style.display = "none";
    }
    return <div className="ayat_marker" id="ayatMarker">
        <div className="form">
            <input id="mark-title" type="text" placeholder="Title of Bookmark" />
            <textarea id="mark-note" placeholder="Save any Note for this ayat" />
            <div>
                <button className="btnu" id="add_tran" onClick={() => Marker("add")}>Select</button>
                <button className="btnu" id="cncl" onClick={() => Marker("cnc")}>Cancle</button>
            </div>
        </div>
    </div>
}