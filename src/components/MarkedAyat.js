import { useState, useEffect } from "react";
import AyatFeed from "./AyatFeed";

export default function MarkedAyat(props) {
    const [ayatDATA, putAyatDATA] = useState([])

    useEffect(() => {
        if(!localStorage.getItem('markedAyat')) localStorage.setItem('markedAyat','[]')
        const markedAyat = JSON.parse(localStorage.getItem('markedAyat'));
        var data = []
        for (var o of markedAyat) {
            const title = o.title,  note = o.note
            fetch(`http://api.quran.com/api/v3/chapters/${o.surahNo}/verses/${o.ayatNo}`)
                .then(res => res.json())
                .then(({verse}) =>{
                    data = [...data, {title,note,verse}]
                    if( markedAyat.length == data.length)
                    putAyatDATA([...data])
                    console.warn([...data, {title:o.title,note:o.note,verse}])
                })


        }
    }, [])

    function wordAudio(e) {
        var url = `https://audio.qurancdn.com/${e.target.attributes.audio.nodeValue}`;
        let audio = new Audio(url);
    
        audio.play();
      }

    return (ayatDATA.length > 0?
        ayatDATA.map(({title,note,verse}, key) => <AyatFeed data={verse} note={note} title={title} key={key} wordAudio={wordAudio} />)
        : null)

}