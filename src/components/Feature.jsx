import React from 'react'

export const Feature = (props) => {
  // console.log(props);
  return (
    <p className={`card-text ${props.symbol === '✖' ? 'text-muted' : ''}`}>{ props.symbol } { props.feature } </p>
  )
}

export default Feature