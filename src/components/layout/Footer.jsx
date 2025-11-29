import data from "../../data/socials.json";

function Footer() {
  return (
    <footer className="box footer">
      <h3>Контакти</h3>
      <p>м. Київ, вулиця Володимирська, 64</p>
      <p>+38 (044) 239-33-33</p>
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
