import gs from "../assets/Galatasaray_Star_Logo.png";

const Header = () => {
  return (
    <header>
      <div className="img-text">
        <img src={gs} alt="gs" />
        <h1>Galatasaray Footballers</h1>
      </div>
    </header>
  );
};

export default Header;
