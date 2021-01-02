import { useHistory } from 'react-router-dom';
import React from 'react'

import { useField } from '../hooks'

const CreateNew = (props) => {
  const content = useField('text')
  const author = useField('text')
  const url = useField('text')

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      'content': content.value,
      'author': author.value,
      'url': url.value,
      'votes': 0
    })
    props.notifyWith(`a new anecdote ${content.value} created!`)
    history.push('/')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content <input {...content} />
        </div>
        <div>
          author <input {...author} />
        </div>
        <div>
          url <input {...url} />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default CreateNew
