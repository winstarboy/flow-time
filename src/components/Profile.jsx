import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <h3>Not logged in</h3>
  return (
    <>
    <h3>Profile : {user.username}</h3>
    <h3>Password : {user.password}</h3>
    </>
  )
}

export default Profile