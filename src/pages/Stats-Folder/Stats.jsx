import './Stats.css'
import { useEffect, useState } from 'react'
import users from './../../info/players.json'

const endpoint = users

function Stats() {
  const [users, setUsers] = useState([])

  useEffect(() => {
      const data = fetch(endpoint).then(res => res.json())
      setUsers(data)
  }, [])

    return (
      <>
        <h1>Stats Moment</h1>
        <p>test{users[0]}</p>
      </>
    )
  }
  
  export default Stats