import React, { SyntheticEvent, ChangeEvent, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal, { ModalError } from "../UI/Modal/ErrorModal";
import "./AddUser.css";
import { User } from "./User";

type Props = {
  onAddUser: Function;
};

const AddUser = (props: Props) => {
  const errorDefault: ModalError = {
    title: "",
    message: "",
  };
  const [username, setUsername] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [error, setError] = useState<ModalError>(errorDefault);

  const addUserHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError((preState: ModalError) => {
        return {
          ...preState,
          title: "Invalid input",
          message: "Please enter a name or age (non-empty value)",
        };
      });
      return;
    }

    if (+age < 1) {
      setError((preState: ModalError) => {
        return {
          ...preState,
          title: "Invalid input",
          message: "Please enter age invalid  (age > 1)",
        };
      });
      return;
    }
    const userValue: User = {
      id: Math.random().toString(),
      name: username,
      age: +age,
    };

    props.onAddUser(userValue);

    setUsername("");
    setAge("");
  };

  const handlerChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlerChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const handleSubmitModal = () => {
    setError((preState: ModalError) => {
      return {
        ...preState,
        ...errorDefault
      };
    });
  }

  return (
    <div>
      {error.title !== "" && error.message !== "" && (
        <ErrorModal modalError={error} onSubmit={handleSubmitModal}/>
      )}
      ;
      <Card className="card-user">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={handlerChangeName}
          />
          <label htmlFor="age">Age (years):</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={handlerChangeAge}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
