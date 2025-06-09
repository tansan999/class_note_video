import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  background: white;
  padding: 24px;
  border-radius: 10px;
  max-width: 400px;
  margin: 100px auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const CancelButton = styled.button`
  background: #e5e7eb;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
`;

const AddButton = styled.button`
  background: #10b981;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
`;

export default function Modal({
  onClose,
  onSubmit,
  title,
  setTitle,
  link,
  setLink,
}) {
  // Получаем контейнер для портала
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  // Само модальное содержимое
  const modalContent = (
    <Overlay>
      <ModalBox>
        <h3>Добавить видеоурок</h3>
        <Input
          type="text"
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Ссылка на YouTube"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <ButtonRow>
          <CancelButton onClick={onClose}>Отмена</CancelButton>
          <AddButton onClick={onSubmit}>Добавить</AddButton>
        </ButtonRow>
      </ModalBox>
    </Overlay>
  );

  // Рендерим через портал
  return ReactDOM.createPortal(modalContent, modalRoot);
}
