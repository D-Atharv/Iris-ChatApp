import { redirect } from 'next/navigation'
import React from 'react'

type Credentials = {
  bool : Boolean
}

const Login = () => {

  const handleLogin = async (credentials : Credentials) => {
    const response = await fetch("api/login",{
      method: "POST",
      body: JSON.stringify(credentials)
    })
  }
  

  return (
    <div>
      <p>This is the login page</p>
    </div>
  )
}

export default Login
