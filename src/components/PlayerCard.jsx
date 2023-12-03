import {data} from "../helper/data"
const PlayerCard = () => {
  return (
    <>
        {data.map(({name,img,statistics},index)=>(
        <div key={index} className="card">
            <div className="on">
                <img src={img} alt="" />
                <h3>{name}</h3>
            </div>
            <div className="arka">
                <p>⚽{statistics[0]}</p>
                <p>⚽{statistics[1]}</p>
                <p>⚽{statistics[2]}</p>
                <p>⚽{statistics[3]}</p>
            </div>
        </div>
        ))}
    </>
  )
}
export default PlayerCard