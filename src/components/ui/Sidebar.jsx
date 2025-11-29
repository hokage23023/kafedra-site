import data from "../../data/announcements.json";

function Sidebar() {
  return (
    <aside className="box sidebar">
      <h3>Оголошення</h3>
      <ul>
        {data.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
