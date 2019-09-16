import styled from 'styled-components'
import Status from './Status'

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #232931;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 2px 2px 5px #333;
  margin-bottom: 24px
  list-style: none;
  transform: scale(1);
  transition: transform .4s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  ${Status} {
    align-self: flex-end
  }
`

export default Item
