import React from 'react';
import './App.css';
import data from './data.json'; // Імпорт даних

function App() {
  return (
    <div className="app-container">

      {/* 1. Блок ЗАГОЛОВОК (лівий верхній) */}
      <header className="box header-area">
        <h1>{data.header.title}</h1>
      </header>

      {/* 2. Блок МЕНЮ (правий верхній) */}
      <nav className="box menu-area">
        <ul style={{ display: 'flex', gap: '15px' }}>
          {data.menu.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 3. Блок ВМІСТ (великий лівий блок) */}
      <main className="box content-area">
        <h2>Інформація про кафедру</h2>
        <div className="content-grid">
          {data.content.map((item) => (
            <div key={item.id} style={{ marginBottom: '20px' }}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </main>

      {/* 4. Блок ДОДАТКОВА СЕКЦІЯ (правий середній) */}
      <aside className="box sidebar-area">
        <h3>{data.sidebar.title}</h3>
        <ul>
          {data.sidebar.items.map((note, index) => (
            <li key={index}>📌 {note}</li>
          ))}
        </ul>
      </aside>

      {/* 5. Блок НИЖНІЙ КОЛОНТИТУЛ / ФУТЕР (правий нижній) */}
      <footer className="box footer-area">
        <h3>Контакти</h3>
        <p>{data.footer.contact}</p>
        <p>{data.footer.phone}</p>
        <div style={{ marginTop: '10px' }}>
          {data.footer.socials.map((social, index) => (
            <span key={index} style={{ marginRight: '10px', cursor: 'pointer' }}>
              {social}
            </span>
          ))}
        </div>
      </footer>

    </div>
  );
}

export default App;