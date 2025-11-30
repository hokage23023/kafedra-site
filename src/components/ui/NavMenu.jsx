function NavMenu() {
  return (
    <nav className="box nav-menu">
      <ul className="nav-menu-list">
        <li className="nav-menu-item">
          <a href="#home">Головна</a>
        </li>
        <li className="nav-menu-item">
          <a href="#staff">Викладачі</a>
        </li>
        <li className="nav-menu-item">
          <a href="#courses">Дисципліни</a>
        </li>
        <li className="nav-menu-item">
          <a href="#schedule">Розклад</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
