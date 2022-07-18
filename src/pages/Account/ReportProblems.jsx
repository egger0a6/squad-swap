
import React from 'react'

const ReportProblems = ({ user }) =>{
  return (
    <div>
      <h1>Hello {user ? user.name : 'friend'}! What is your problem⚠️</h1>
     
    </div>
  )
}

export default ReportProblems
