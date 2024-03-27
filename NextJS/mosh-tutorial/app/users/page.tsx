import React, { useEffect } from 'react'


interface User { // Those variables that uses this interface should have the element id and name but can also have additional elements.
  id: number,
  name: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    geo: {
      lat: string,
      lng: string,
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  }
}

const UsersPage = async () => { // Can use async
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`,{cache: 'no-store'} );
  const users: User[] = await res.json();

  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <table className='table table-zebra text-primary border-2 border-neutral shadow-2xl'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {users.map((user) => (
        <tr className='hover cursor-pointer' key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      ))}
      </tbody>
    </table>
    </>
  )
}

export default UsersPage