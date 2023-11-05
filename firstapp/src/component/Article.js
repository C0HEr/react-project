import React from 'react'

function Article(props) {
    // console.log(props)
  return (
    <div key={props.id}>
        <h2>Titre : {props.title}</h2>
        <h6>Auteur: {props.auteur}</h6>
        {props.children}
    </div>
  )
}

export default Article