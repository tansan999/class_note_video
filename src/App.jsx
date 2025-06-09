import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddButton from './components/AddButton';
import Modal from './components/Modal';
import NoteCard from './components/NoteCard';

const Container = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 32px 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 24px;
`;

export default function App() {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('youtubeNotes')) || [];
    setNotes(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('youtubeNotes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!title || !link) return;
    setNotes([...notes, { title, link }]);
    setTitle('');
    setLink('');
    setModalOpen(false);
  };

  const deleteNote = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
  };

  return (
    <Container>
      <h1>Заметки видеоуроков в YouTube</h1>
      <AddButton onClick={() => setModalOpen(true)} />
      {isModalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          onSubmit={addNote}
          title={title}
          setTitle={setTitle}
          link={link}
          setLink={setLink}
        />
      )}
      <Grid>
        {notes.map((note, idx) => (
          <NoteCard key={idx} note={note} onDelete={() => deleteNote(idx)} />
        ))}
      </Grid>
    </Container>
  );
}
