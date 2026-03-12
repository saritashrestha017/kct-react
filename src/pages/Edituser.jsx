import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
const Edituser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const url = "http://localhost:3000/users/" + id;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async (id) => {
    let response = await fetch(url);
    response = await response.json();
    setFirstName(response.firstName);
    setLastName(response.lastName);
    setAge(response.age);
    setGender(response.gender);
    setEmail(response.email);
  };
  const handleUpdate = async () => {
    let response = await fetch(url, {
      method: "put",
      body: JSON.stringify({ firstName, lastName, age, gender, email }),
    });
    response = await response.json();
    if (response) {
      alert("updare");
      navigate("/user");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>EditUser</h1>
      <input
        type="text"
        placeholder="enter First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="enter last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="enter gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /> <br />
      <button onClick={handleUpdate}>Submit</button>
    </div>
  );
};

export default Edituser;
