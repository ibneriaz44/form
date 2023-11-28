import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
  const param =  useParams()
  return (
    <>
    <h1>The number is {param.number} </h1>
    </>
  )
}

