import React from 'react'
import { Link, useParams } from 'react-router'

const UserDetail = () => {
    const data =useParams();
    console.log(data);
  return (
    <div>
      <h1>User Detail Pages</h1>
      <p>User Id is : {data.id}</p>
      <Link to ='/user'>Back</Link>
    </div>
  )
}

export default UserDetail
