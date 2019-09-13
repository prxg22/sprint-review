import styled from 'styled-components'
import Item from './Item'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;

  ${Item} {
    flex-basis: calc(33.3333% - 16px);
    box-sizing: border-box;
    margin: 8px;
  }
`

export default List;
