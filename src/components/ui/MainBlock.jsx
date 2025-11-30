import data from "../../data/cafedra.json";
import logo from "../../assets/images/caf-logo.png";
import InfSection from "./InfSection";

function MainBlock() {
  return (
    <main className="box main-content">
      <h2 className="block-title">Інформація про кафедру</h2>

      <section className="cafedra-about-section">
        <div className="cafedra-logo-wrapper">
          <img src={logo} className="cafedra-logo" alt="Логотип кафедри" />
        </div>

        <div className="cafedra-inf-about-item">
          <h3 className="inf-item-title">{data.about.title}</h3>
          <p>{data.about.text}</p>
        </div>
      </section>

      <h2 className="block-title-small">Ключові напрямки роботи</h2>
      <div className="main-content-grid">
        {data.blocks.map((item, index) => (
          <InfSection key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </main>
  );
}

export default MainBlock;
