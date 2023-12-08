const PlayerCard = ({filteredData}) => {
  return (
    <>
      {filteredData.map(({ name, img, statistics, detail }, index) => (
        <div className="cards">
          <div key={index} className="card">
            <div className="front">
              <img src={img} alt="" />
              <h3>{name}</h3>
            </div>
            <div className="back">
              <>
                {statistics.map((item) => {
                  return <p>⚽ {item}</p>;
                })}
              </>
              <a href={detail} rel="noreferrer" target="_blank">
                Detail
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default PlayerCard;
