import React from 'react'

const IdeaCard = ({name, description, id}) => (
  <div className="IdeaCard" key={id}>
    <h1>{name}</h1>
    <p>{description}</p>
  </div>
)

export default IdeaCard;