import styled from 'styled-components'

const Button = styled.button`
  background-color: #232931;
  border-radius: 4px;
  color: #eee;
  padding: 8px 16px;
  border: 0;
  transition: background-color .42s ease;
  cursor: pointer;

  &:hover {
    background-color: #4ecca3;
  }
`

export default Button;
