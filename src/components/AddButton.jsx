import styled from "styled-components";

const Button = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background-color: #1e40af;
  }
`;

export default function AddButton({ onClick }) {
  return <Button onClick={onClick}>Добавить</Button>;
}
