import React, { useContext, useEffect } from "react";
import Card from "../UI/Card/Card";
import { User } from "./User";
import "./UserList.css";
import axios from "axios";
import myContext from "../Store/context";
import { deleteUser, fetchUser } from "../Store/action";
import Button from "../UI/Button/Button";
import { NavLink } from "react-router-dom";

const UserList = () => {
  const [state, dispatch] = useContext(myContext);
  const { users } = state;
  const url = ` http://localhost:3000/users`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        dispatch(fetchUser(res.data));
      })
      .catch((err: any) => console.log(err));
  }, [dispatch]);

  const handleDeleteUser = (userId: string) => {
    axios
      .delete(`${url}/${userId}`)
      .then((res) => {
        dispatch(deleteUser(userId));
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <Card className="users">
      <div className="users__add">
        <NavLink to={"/user"}>
          <Button>Add user</Button>
        </NavLink>
      </div>
      <ul>
        {(users || []).map((user: User) => (
          <li key={user.id}>
            <div className="users__list">
              {user.name} ({user.age} years old)
            </div>
            <div className="users__action">
              <NavLink to={`/user/${user.id}`}>
                <Button>Edit</Button>
              </NavLink>
              <Button onClick={() => handleDeleteUser(user.id)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
