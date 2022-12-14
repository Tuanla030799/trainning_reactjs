import React, {
  SyntheticEvent,
  useState,
  useRef,
  useContext,
  ChangeEvent,
} from "react";
import myContext from "../Store/context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal, { ModalError } from "../UI/Modal/ErrorModal";
import "./AddUser.css";
import { User } from "./User";
import axios from "axios";
import { addUser } from "../Store/action";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input/Input";

const AddUser = () => {
  const [state, dispatch] = useContext(myContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const postUser = (user: User) => {
    const url = ` http://localhost:3000/users`;
    axios
      .post(url, user)
      .then((res) => {
        dispatch(addUser(res.data));
      })
      .catch((err: any) => console.log(err));
  };

  const errorDefault: ModalError = {
    title: "",
    message: "",
  };
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<ModalError>(errorDefault);

  const addUserHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    if (name?.trim().length === 0) {
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
      name: name,
      age: +age,
    };

    postUser(userValue);
    navigate("/");
  };

  const handleSubmitModal = () => {
    setError((preState: ModalError) => {
      return {
        ...preState,
        ...errorDefault,
      };
    });
  };

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  return (
    <div>
      {error.title !== "" && error.message !== "" && (
        <ErrorModal modalError={error} onSubmit={handleSubmitModal} />
      )}
      ;
      <Card className="card-user">
        <form onSubmit={addUserHandler}>
          <Input
            id="username"
            label="Use Name:"
            type="text"
            ref={nameInputRef}
            onChange={handleChangeName}
            value={name}
          />
          <Input
            id="age"
            label="Age (years):"
            type="number"
            ref={ageInputRef}
            onChange={handleChangeAge}
            value={age}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
