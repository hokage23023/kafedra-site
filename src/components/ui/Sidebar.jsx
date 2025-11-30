import data from "../../data/announcements.json";

function Sidebar() {
  return (
    <aside className="box sidebar">
      <h2 className="block-title">Оголошення</h2>
      <ul className="announcements-list">
        {data.content.map((item) => (
          <li key={item.id} className="announcement-item">
            <h4 className="announcement-title">
              {item.title}
              {item.subtitle && <span className="announcement-subtitle">: {item.subtitle}</span>}
            </h4>

            <p className="announcement-details">
              <span>Коли: </span>
              {item.date && <span className="detail-date">{item.date}</span>}
              {item.time && <span className="detail-time"> {item.time}</span>}
            </p>

            {item.location && <p className="announcement-location">Місце: {item.location}</p>}

            <p className="announcement-text">{item.text}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
