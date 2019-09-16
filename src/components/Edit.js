import React from 'react'

import Button from './Button'
import TextArea from './TextArea'

import example from '../example'

const Edit = ({ show, onSubmit }) => {
  if (!show) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    onSubmit(formData.get('sprint'))
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextArea
        name="sprint"
        value={JSON.stringify(example)}
      />
      <Button>Enviar</Button>
    </form>
  )
}

export default Edit
