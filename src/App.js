import React from 'react';

import Global from './components/Global'
import List from './components/List'
import Item from './components/Item'
import Code from './components/Code'
import Title from './components/Title'
import Status from './components/Status'
import Container from './components/Container'

import sprint from './sprint'
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
  return (
    <Container>
      <Global />
      <h1>Sign-up Growth - Sprint Review</h1>
      <List>
        {sortSprint(sprint).map(([code, { title, status: s }]) => (
          <Item>
            <Code>{code}</Code>
            <Title>{title}</Title>
            <Status status={s}>{s}</Status>
          </Item>
        ))}
      </List>
    </Container>
  )
}

export default App;
