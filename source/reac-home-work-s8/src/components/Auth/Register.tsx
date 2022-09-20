import axios from "axios";
import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../Store/action";
import myContext from "../Store/context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import { Profile } from "./profile";

const Register = () => {
  const url = `http://localhost:3000/profile`;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [state, dispatch] = useContext(myContext);
  const navigate = useNavigate();
  const { isAuthenticate } = state;

  useEffect(() => {
    if (isAuthenticate) {
      navigate("/");
    }
  }, [isAuthenticate]);

  const handleSubmitRegister = (e: SyntheticEvent) => {
    e.preventDefault();
    const profile: Profile = {
      id: Math.random().toString(),
      email,
      password,
    };
    axios
      .post(url, profile)
      .then((res) => {
        dispatch(register(email));
      })
      .catch((err: any) => console.log(err));
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeRePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setRePassword(event.target.value);
  };
  return (
    <Card className="card-user">
      <form onSubmit={handleSubmitRegister}>
        <Input
          id="Email"
          label="Email:"
          type="email"
          onChange={handleChangeEmail}
          value={email}
        />
        <Input
          id="Password"
          label="Password:"
          type="password"
          onChange={handleChangePassword}
          value={password}
        />
        <Input
          id="rePassword"
          label="Eetype Password:"
          type="password"
          onChange={handleChangeRePassword}
          value={rePassword}
        />
        <Button type="submit">Register</Button>
      </form>
    </Card>
  );
};

export default Register;
