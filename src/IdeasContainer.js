import React from 'react'
import IdeaCard from './IdeaCard'

const IdeasContainer = ({ideas}) => {
  const ideaCards = ideas.map(idea => 
    <IdeaCard {...idea} />)

  return (
    <div className="IdeasContainer">
      { ideaCards }
    </div>
  )
}

export default IdeasContainer;