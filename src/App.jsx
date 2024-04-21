import "./App.css";

export default function App() {
  return (
    <div className="App">
      <article className="tw-follow-card">
        <header className="tw-follow-card-info">
          <img
            className="tw-follow-card-img"
            src="https://media.licdn.com/dms/image/D4D03AQGr9ucnFDH62Q/profile-displayphoto-shrink_800_800/0/1708022739210?e=1718841600&v=beta&t=OU7vMcRAI7t7uLqJR8iihnZ8eY0XQbol5EFrmgzOhzE"
            alt="Avatar"
          />
          <div className="tw-follow-card-userName">
            <strong>Ferney Avila Benitez</strong>
            <span>@favila</span>
          </div>
        </header>

        <aside>
          <button className="tw-follow-card-button">Seguir</button>
        </aside>
      </article>
    </div>
  );
}
