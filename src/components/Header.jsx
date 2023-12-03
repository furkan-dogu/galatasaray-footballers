import gs from "../assets/Galatasaray_Star_Logo.png"

const Header = () => {
  return (
    <header>
        <div className="img-text">
            <img src={gs} alt="gs" />
            <h1>Galatasaray Footballers</h1>
        </div>

        <div className="input">
            <h2>2023-2024</h2>
            <input type="search" placeholder="Search Footballer" />
        </div>
        
    </header>
  )
}

export default Header