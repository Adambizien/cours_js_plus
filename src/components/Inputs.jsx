import React from 'react'

export default function Inputs({placeholder,value}) {
  return (
    <>
        <input type='text' placeholder={placeholder} value={value}/>
    </>
  )
}

