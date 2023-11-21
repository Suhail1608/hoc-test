import React from 'react'
import './UserCard.css'
function UserCard({user, color}) {
  return (
    <div className='userCard' style={{color:color}}>
        <div className='userDetails'>
            <strong>Name: {user.name}</strong>
            <strong>Age: {user.age}</strong>
            <strong>Stack: {user.stack}</strong>
            <strong>Role: {user.role}</strong>
        </div>
    </div>
  )
}
export default UserCard