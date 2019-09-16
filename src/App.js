import React, { useState } from 'react';

import Global from './components/Global'
import List from './components/List'
import Item from './components/Item'
import Code from './components/Code'
import Title from './components/Title'
import Status from './components/Status'
import Container from './components/Container'
import Button from './components/Button'
import Edit from './components/Edit'

// import sprint from './sprint'

const priority = [
  'done',
  'deploy',
  'wip',
  'todo'
]

const sort = ([ka, { status: a }], [kb, { status: b }]) =>
  priority.indexOf(a) - priority.indexOf(b)

const sortSprint = (sprint) => Object.entries(sprint)
  .sort(sort)

function App() {
  const [ sprint, setState ] = useState(null)
  const [ edit, setEdit ] = useState(false)

  const toogleEdit = () => setEdit(!edit)

  const handleSubmit = (value) => {
    try {
      const json = JSON.parse(value)
      if (sprint === json) return

      setState(json)
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <Container>
      <Global />
      <h1>Sign-up Growth - Sprint Review</h1>
      <Button onClick={toogleEdit}>Edit</Button>

      <Edit show={edit || !sprint} onSubmit={handleSubmit} />

      {sprint && (
        <List>
          {sortSprint(sprint).map(([code, { title, status: s }]) => (
            <Item>
              <Code>{code}</Code>
              <Title>{title}</Title>
              <Status status={s}>{s}</Status>
            </Item>
          ))}
        </List>
      )}
    </Container>
  )
}

export default App;
