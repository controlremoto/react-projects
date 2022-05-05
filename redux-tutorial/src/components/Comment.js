import React from 'react'

export const Comment = ({ comment }) => (
  
  <aside className="comment">
    <p>{comment.body}</p>
    <h3><i>{comment.email}</i></h3>
  </aside>
)
