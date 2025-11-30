import logo from "../../assets/images/book.svg";
import NavMenu from "../ui/NavMenu";

function Header() {
  return (
    <header className="header">
      <div className="logo-name-wrapper">
        <img src={logo} className="header-logo" alt="logo" />
        <h1>Кафедра Інформаційних Технологій</h1>
      </div>
      <NavMenu />
    </header>
  );
}

export default Header;
