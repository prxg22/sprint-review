import styled, { css } from 'styled-components'

const styles = {
  done: {
    background: '#4ecca3',
    color:  '#2a735b',
  },
  deploy: {
    background: '#ccc64e',
    color: '#736f2a',
  },
  wip: {
    background: '#4ecccc',
    color: '#2a5c73',
  },
  todo: {
    background: '#cc694e',
    color: '#733c2a',
  }
}

const colors = ({ status }) => {
  const style = styles[status] || status.done

  return css`
    background-color: ${style.background};
    color: ${style.color};
  `
}


const Status = styled.span`
  padding: 4px 8px
  border-radius: 4px
  text-transform: uppercase;
  font-size: .65rem
  margin-top: 16px;
  ${colors}
`

export default Status
