import React from 'react'

export default function Input(props) {
  return (
    <input 
      type='text'
      value={props.input}
      onChange={props.handleChange}
      className={`block w-24 mx-auto pb-2 bg-transparent border-b-2 
      ${props.isLight ? "border-b-slate-800" : "border-b-slate-200"} 
      outline-none text-center text-6xl 
      ${props.isLight ? "text-slate-800" : "text-slate-200"}`}
    />
  )
}
