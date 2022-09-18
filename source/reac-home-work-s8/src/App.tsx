import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import { User, Users } from "./components/Users/User";

function App() {
  const [users, setUsers] = useState(Users);

  const handleAddUser = (user: User) => {
    setUsers((preState) => {
      return [user, ...preState];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={handleAddUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
