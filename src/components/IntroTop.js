
export default function IntroTop(props){
    if(props.bis === true)
        {
            return(
                        <>
            <div className="contant_info_header">
          <div>
            <p>{props.id}</p>
          </div>
          <div>
            <h1>{props.name}</h1>
          </div>
          <div>
            <p>{props.mean}</p>
          </div>
          <div>
            <p>{props.verses} verses</p>
          </div>
        </div>
       <div className="ayat bismalh">
          بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
        </div>
        </>
            )

        }
        else{
            return(
                            <div className="contant_info_header">
          <div>
            <p>{props.id}</p>
          </div>
          <div>
            <h1>{props.name}</h1>
          </div>
          <div>
            <p>{props.mean}</p>
          </div>
          <div>
            <p>{props.verses} verses</p>
          </div>
        </div>
            )

        }

      
}