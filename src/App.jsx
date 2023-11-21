import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import userData from './component/UserData'
import HocComp from './HocComp'
import UserCard from './component/UserCard'

const EnhancedComp = HocComp(UserCard)
function App() {
  return (
    <>
    <div className='hor'>
      {userData.map((item)=>{
        return(
          <EnhancedComp user={item} stack={item.stack} />
        )
      })}
    </div>
    </>
  )
}

export default App
