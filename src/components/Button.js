import React from 'react'

export default function Button(props) {
  return (
    props.isLight ? 
      <button onClick={props.handleButtonClick}
      className="text-slate-800 rounded-xl bg-slate-500 p-4 text-slate-200">Click for Dark Mode</button> : 
      <button onClick={props.handleButtonClick}
      className="text-slate-200 rounded-xl bg-slate-500 p-4">Click for Light Mode</button>
  )
}
