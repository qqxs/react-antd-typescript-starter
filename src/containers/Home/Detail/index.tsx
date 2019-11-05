import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams()
  return <div>Detail ID: {id}</div>
}

export default Detail
