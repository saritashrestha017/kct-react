import React, { useState } from 'react'
import { useNavigate } from 'react-router';

 const AddUser = () => {
  const navigate= useNavigate()
  const[firstName,setFirstName]=useState("");
   const [lastName, setLastName] = useState("");
   const [age, setAge] = useState("");
   const [gender, setGender] = useState("");
   const [email, setEmail] = useState("");
   const handleSubmit=async()=>{
     const url ="http://localhost:3000/users";
     let response= await fetch(url,{
      method:"Post",
      body:JSON.stringify({firstName,lastName,age,gender,email})
     });
     response= await response.json();

     if(response){
      alert('USer added')
      navigate('/users')
     }

   }
   
  return (
    <div style={{textAlign:"center"}}>

      <h1>AddUser</h1>
      <input type="text" placeholder='enter First name'
      onChange={(e)=>setFirstName(e.target.value)}
      />
      <br /> <br />
      <input type="text" placeholder='enter last name' 
        onChange={(e) => setLastName(e.target.value)}
      />
      <br /> <br />
      <input type="text" placeholder='enter age' 
        onChange={(e) => setAge(e.target.value)}
/>
      <br /> <br />
      <input type="text" placeholder='enter gender'
        onChange={(e) => setGender(e.target.value)}
 />
      <br /> <br />
      <input type="text" placeholder='enter email'
        onChange={(e) => setEmail(e.target.value)}
/>
      <br /> <br />
      <button onClick={handleSubmit}>Submit</button>
      </div>
  )
}

export default AddUser