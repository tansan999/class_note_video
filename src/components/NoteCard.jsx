
const NoteCard = ({ note }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "0.5rem 0" }}>
      <h3>{note.title}</h3>
      {note.link && <a href={note.link} target="_blank" rel="noreferrer">Смотреть видео</a>}
    </div>
  );
};

export default NoteCard;
