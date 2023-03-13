import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function StudentView() {
    let params=useParams()
    console.log(params)
    const [studentView, setStudentView] = useState({})

    const fetchdata=async()=>{  
        const value = await axios.get(`https://63e089a365b57fe606446f28.mockapi.io/student/${params.id}`)
        setStudentView(value.data)
}
    useEffect(()=>{
        fetchdata()
},[])

  return (
    <>
    <div>{studentView.id}</div>
    <div>{studentView.name}</div>
    <div>{studentView.roll}</div>
    <div>{studentView.age}</div>
    </>
  )
}

export default StudentView