import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import Login from "./components/Auth/Login";
import EditUser from "./components/Users/EditUser";
import Header from "./components/UI/Header/Header";
import Register from "./components/Auth/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<UserList />} />
          <Route path="/user" element={<AddUser />} />
          <Route path="/user/:userId" element={<EditUser />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
