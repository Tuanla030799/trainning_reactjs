import React from "react";
import Card from "../UI/Card/Card";
import { User } from "./User";
import "./UserList.css";

type Props = {
  users?: User[];
};

const UserList = (props: Props) => {
  return (
    <Card className="users">
      <ul>
        {(props.users || []).map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
