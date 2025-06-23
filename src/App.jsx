import { AuthContext } from "./context/AuthContext";

import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import NoteCard from "./components/NoteCard";

const defaultNotes = [
  {
    title:
      "Урок - 1 Что такое библиотека / фреймворк / nodeJS / npm / babel /terminal",
    link: "https://youtu.be/VU3nP_QoWKM",
  },
  {
    title: "Урок 2. Понимание структуры проекта",
    link: "https://youtu.be/EnvJe8ZK3Z4",
  },
  {
    title: "Урок - 3 свойства, CSS-модули и рендеринг списка",
    link: "https://youtu.be/TgYs3uOTZYA",
  },
  {
    title: "Урок 4 - Приложение «Расходы»",
    link: "https://youtu.be/NCUTSQWZqwQ",
  },
  {
    title: "Урок 5 — Пакетирование состояний",
    link: "https://youtu.be/P90me30e4mw",
  },
  {
    title: "Урок - 6 Подъем состояния вверх",
    link: "https://youtu.be/LhVyVGN78w4",
  },
  {
    title: "Урок 7 — Git | ветви | команды",
    link: "https://youtu.be/HZY6k9p0onI",
  },
  { title: "Урок 8 — Styled-components", link: "https://youtu.be/KwUvjUGtdtU" },
  {
    title: "Урок 9 - useRef, Порталы, Фрагменты",
    link: "https://youtu.be/Fhn2vy92Avo",
  },
  { title: "Урок 10 - useEffect()", link: "https://youtu.be/6DTEilKI7AY" },
  { title: "Урок 11 - useReducer", link: "https://youtu.be/59tTo0TvHY4" },
  { title: "Урок 12 — Context API", link: "https://youtu.be/Aet5-wjaJRo" },
  {
    title: "Урок 13 - Заказ еды часть 1",
    link: "https://youtu.be/25Q61Uu3WCk",
  },
  {
    title: "Урок 14 - Заказ еды Часть 2",
    link: "https://youtu.be/1an_gycMOGU",
  },
  {
    title: "Урок 15 - useCallback, useMemo, lazy",
    link: "https://youtu.be/lwTdIpxrKNk",
  },
  { title: "Урок 16 — React Router 1", link: "https://youtu.be/DTIhkGxf60M" },
  { title: "Урок 17 - React Router 2", link: "https://youtu.be/umM-E9Fq_4s" },
  { title: "Урок 18 — Введение в Redux", link: "https://youtu.be/euSOS838UPI" },
  { title: "Урок 19 - Redux Thunk", link: "https://youtu.be/t65P43gKY5M" },
  {
    title: "Урок 20 — Введение в Redux-Toolkit",
    link: "https://youtu.be/f_X7W0B6yBA",
  },
  {
    title: "Урок 21 - Redux-Toolkit | createAsyncThunk",
    link: "https://youtu.be/2b7MTfpgfd0",
  },
  { title: "Урок 22 — Material UI", link: "" },
  { title: "Урок 23 - Аутентификация, Jwt_token", link: "" },
  { title: "Урок 24 - React-Hook-Form", link: "" },
  { title: "Урок 25 - TypeScript | devDependencies", link: "" },
];

const App = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(`notes-${user?.uid}`);
    if (saved) {
      setNotes(JSON.parse(saved));
    } else {
      setNotes(defaultNotes);
      localStorage.setItem(`notes-${user?.uid}`, JSON.stringify(defaultNotes));
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`notes-${user.uid}`, JSON.stringify(notes));
    }
  }, [notes, user]);

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: theme === "dark" ? "#121212" : "#fff",
      }}
    >
      <h1>Учебные уроки</h1>
      {defaultNotes.map((note, index) => (
        <NoteCard key={index} note={note} />  
      ))}
    </div>
  );
};

export default App;
