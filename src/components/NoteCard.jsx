import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 16px;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: #f0f9ff;
  }
`;

const Title = styled.a`
  text-decoration: none;
  color: #1e3a8a;
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: #ef4444;
  font-size: 16px;
  cursor: pointer;
`;

export default function NoteCard({ note, onDelete }) {
  return (
    <Card>
      <Title href={note.link} target="_blank" rel="noopener noreferrer">
        {note.title}
      </Title>
      <DeleteButton onClick={onDelete}>×</DeleteButton>
    </Card>
  );
}
