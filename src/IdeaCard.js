import React from 'react'

const IdeaCard = ({name, description, id, removeIdea}) => (
  <div className="IdeaCard" key={id}>
    <h1>{name}</h1>
    <p>{description}</p>
    <button onClick={() => removeIdea(id)}>Delete Card</button>
    <hr />
  </div>
)

export default IdeaCard;