import data from "../../data/socials.json";

function Footer() {
  return (
    <footer className="footer">
      <h3>Контакти</h3>
      <p>м. Запоріжжя, вул. Жуковського 64</p>
      <p>+38 (061) 123-45-67</p>
      <div className="footer-links">
        {data.content.map((social, index) => (
          <a key={index} href={social.href} title={social.name} className="social-link">
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
