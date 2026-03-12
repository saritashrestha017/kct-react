import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Navbar from "./pages/Navbar";
import Edit from "./pages/Edit";
import Settings from "./pages/setting";
import Changes from "./pages/changes";
import User from "./pages/User";
import UserDetail from "./pages/UserDetail";
import AddUser from "./Adduser";
import Edituser from "./pages/Edituser";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const App = () => {
  return (

    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<About />} path={"/about"} />
         <Route element={<Product />} path={"/product"} />
         <Route element={<Cart />} path={"/cart"} />
        <Route element={<User />} path={"/user"} />
       <Route element={<UserDetail />} path={"/user/:id"} />
        <Route path={"/addUser"} element={<AddUser />} />
        <Route path={"/editUser/:id"} element={<Edituser />}/>

        <Route element={<Profile />} path={"/profile"}>
          <Route path={"editProfile"} element={<Edit />} />
          <Route path={"settings"} element={<Settings />} />
          <Route path={"changes"} element={<Changes />} />
        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
