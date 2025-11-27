import logo from "../../assets/images/book.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <p>Кафедра Інформаційних Технологій</p>
    </header>
  );
}

export default Header;
