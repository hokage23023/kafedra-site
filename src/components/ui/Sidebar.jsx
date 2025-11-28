function Sidebar() {
  const announcements = {
    items: ["Збори кафедри: Пн, 14:00", "Консультація: Вт, 10:00", "День відкритих дверей: 20.05"],
  };
  return (
    <aside className="box sidebar-area">
      <h3>Оголошення</h3>
      <ul>
        {announcements.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
