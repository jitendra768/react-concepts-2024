import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [users,setUsers] = useState([])

    const fetchUserData = async ()=>{
        const url = "https://jsonplaceholder.typicode.com/users";;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setUsers(data);
    }

    useEffect(()=>{
        fetchUserData();
    },[])

  return (
    <div>
        <h3>User List</h3>
        <ul>
            {users.map((user)=><li key={user.id}>{user.name}</li>)}
        </ul>
    </div>
  )
}

export default UseEffectHook;