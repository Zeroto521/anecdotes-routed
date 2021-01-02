import { Link } from "react-router-dom"
import React from 'react'

const AnecdoteTitle = ({ anecdote }) => (
  <div>
    <li>
      <Link to={`/anecdotes/${anecdote.id}`}>
        {anecdote.content}
      </Link>
    </li>
  </div>
)

const AnecdoteDetail = ({ anecdote }) => {
  console.log(anecdote)
  return (
    <div>
      <h2>{anecdote.content} by {anecdote.author}</h2>
      <div>has {anecdote.votes} votes</div>
      <br />
    </div>
  )
}

export { AnecdoteTitle, AnecdoteDetail }
