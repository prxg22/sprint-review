import styled from 'styled-components'

const background = ({ status }) => {
  switch(status) {
    case 'done':
      return '#4ecca3'
    case 'deploy':
      return '#ccc64e'
    case 'wip':
      return '#4ecccc'
    case 'todo':
      return '#cc694e'
    default:
      return '#4ecca3'
  }
}

const color = ({ status }) => {
  switch(status) {
    case 'done':
      return '#2a735b'
    case 'deploy':
      return '#736f2a'
    case 'wip':
      return '#2a5c73'
    case 'todo':
      return '#733c2a'
    default:
      return '#2a735b'
  }
}

const Status = styled.span`
  padding: 4px 8px
  border-radius: 4px
  background-color: ${background}
  color: ${color}
  text-transform: uppercase;
  font-size: .65rem
`

export default Status
