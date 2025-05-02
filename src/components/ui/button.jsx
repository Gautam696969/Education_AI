import React from 'react'

const Button = ({ children, ...props }) => {
  return (
    <button className="ui-button" {...props}>
      {children}
    </button>
  )
}

export default Button
