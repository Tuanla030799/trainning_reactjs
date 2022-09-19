import React, { SyntheticEvent, useState, useRef } from "react";
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
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<ModalError>(errorDefault);

  const addUserHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    const enteredName = nameInputRef.current?.value || "";
    const enteredAge = ageInputRef.current?.value || "";
    if (enteredName?.trim().length === 0 || enteredAge?.trim().length === 0) {
      setError((preState: ModalError) => {
        return {
          ...preState,
          title: "Invalid input",
          message: "Please enter a name or age (non-empty value)",
        };
      });
      return;
    }

    if (+enteredAge < 1) {
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
      name: enteredName,
      age: +enteredAge,
    };

    props.onAddUser(userValue);
  };

  const handleSubmitModal = () => {
    setError((preState: ModalError) => {
      return {
        ...preState,
        ...errorDefault,
      };
    });
  };

  return (
    <div>
      {error.title !== "" && error.message !== "" && (
        <ErrorModal modalError={error} onSubmit={handleSubmitModal} />
      )}
      ;
      <Card className="card-user">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName:</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (years):</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
