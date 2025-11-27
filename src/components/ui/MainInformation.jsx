function MainInformation() {
  const data = {
    content: [
      {
        id: 1,
        title: "Вітаємо на кафедрі",
        text: "Наша кафедра готує провідних фахівців у галузі комп'ютерних наук. Ми використовуємо сучасні методики навчання.",
      },
      {
        id: 2,
        title: "Новини: Захист дипломів",
        text: "Увага студентам 4-го курсу! Захист бакалаврських робіт відбудеться 25 червня.",
      },
      {
        id: 3,
        title: "Наукова діяльність",
        text: "Викладачі кафедри опублікували 5 нових статей у Scopus за останній місяць.",
      },
    ],
  };

  return (
    <main className="box content-area">
      <h2>Інформація про кафедру</h2>
      <div className="content-grid">
        {data.content.map((item) => (
          <div key={item.id} style={{ marginBottom: "20px" }}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainInformation;
