import data from "../../data/cafedra.json";

function MainBlock() {
  return (
    <main className="main-content">
      <h2>Інформація про кафедру</h2>
      <div className="main-content-grid">
        {data.content.map((item) => (
          <div key={item.id} className="cafedra-inf-item">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainBlock;
