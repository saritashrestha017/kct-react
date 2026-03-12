import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";


const User = () => {
  const navigate = useNavigate()
  const[userData,setUserData]=useState([]);
  const[loading,setLoading]=useState(false);
  useEffect(()=>{
setLoading(true)
    fetchUserData();
  },[]);

    const url ="http://localhost:3000/users";

  const fetchUserData=async()=>{
    let response= await fetch(url);
    response=await response.json();
    setUserData(response)
    setLoading(false)
    console.log(response);
  }
 /* const userData = [
    { id: 1, name: "Sam", age: 40, gender: "Male", email: "sam@gmail.com" },
    { id: 2, name: "John", age: 30, gender: "Male", email: "john@gmail.com" },
    {
      id: 3,
      name: "Jenny",
      age: 20,
      gender: "Female",
      email: "jenny@gmail.com",
    },
  ];*/
 const handleDelete = async (id) => {
  let response = await fetch(url + "/" +id,{
    method: "Delete",
  });
  response = await response.json();
  if(response){
    alert("user deleted");
fetchUserData();
  }
 };

 const handleEdit = (id) =>{
  navigate(`/editUser/${id}`)
 }


  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h1>User List</h1>
        <Link to={"/addUser"}>Add User</Link>
      </div>
    

     {
      loading ? 
      <h1>Loading...</h1>
      :
          <table border="1" cellPadding="10" cellSpacing="0" width="100%">
            <thead>
              <tr>
                <th style={{ textAlign: "start" }}>ID</th>
                <th style={{ textAlign: "start" }}>First Name</th>
                <th style={{ textAlign: "start" }}>Last Name</th>
                <th style={{ textAlign: "start" }}>Age</th>
                <th style={{ textAlign: "start" }}>Gender</th>
                <th style={{ textAlign: "start" }}>Email</th>
                <th style={{ textAlign: "start"}}>Action</th>
              </tr>
            </thead>

            <tbody>
              {userData.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
     }
    </div>
  );
};

export default User;