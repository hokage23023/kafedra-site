import logo from "../../assets/images/book.svg";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Сайт кафедри</p>
    </header>
  );
}

export default Header;
