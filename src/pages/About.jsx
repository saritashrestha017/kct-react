import React, { useState } from 'react'

const About = () => {
       const [data,setData] = useState([])

  const apiUrl = "https://dummyjson.com/products";
  const fetchProducts = async() => {
   let response = await axios.get(apiUrl);
   setData(response.data.products);
  };
  
  useEffect(()=>{
    fetchProducts();
  },[]);


  return (
    <div>
      <h1>About Page</h1>
      {data.map((item)=>{
        console.log(item);
      })}
    </div>
  )
}

export default About
