import React, {
  SyntheticEvent,
  useState,
  useRef,
  useContext,
  useEffect,
  ChangeEvent,
} from "react";
import myContext from "../Store/context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal, { ModalError } from "../UI/Modal/ErrorModal";
import "./EditUser.css";
import { User } from "./User";
import axios from "axios";
import { editUser } from "../Store/action";
import { useParams,useNavigate } from "react-router-dom";
import Input from "../UI/Input/Input";

const EditUser = () => {
  const [state, dispatch] = useContext(myContext);
  const { userId } = useParams();
  const navigate = useNavigate();
  const errorDefault: ModalError = {
    title: "",
    message: "",
  };
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState<ModalError>(errorDefault);
  const url = ` http://localhost:3000/users`;

  useEffect(() => {
    axios
      .get(`${url}/${userId}`)
      .then((res) => {
        const user = res.data;
        setName(user.name);
        setAge(user.age);
      })
      .catch((err: any) => console.log(err));
  }, [dispatch]);

  const putUser = (user: User) => {
    axios
      .put(`${url}/${userId}`, user)
      .then((res) => {
        dispatch(editUser(res.data));
        navigate("/");
      })
      .catch((err: any) => console.log(err));
  };

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
    putUser(userValue);
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
          <label htmlFor="username">UserName:</label>
          <Input
            id="username"
            type="text"
            onChange={handleChangeName}
            value={name}
          />
          <label htmlFor="age">Age (years):</label>
          <Input
            id="age"
            type="number"
            onChange={handleChangeAge}
            value={age}
          />
          <Button type="submit">Edit user</Button>
        </form>
      </Card>
    </div>
  );
};

export default EditUser;
