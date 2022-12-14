import axios from "axios";
import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../Store/action";
import myContext from "../Store/context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import { Profile } from "./profile";

const Login = () => {
  const url = `http://localhost:3000/profile`;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useContext(myContext);
  const navigate = useNavigate();
  const { isAuthenticate } = state;

  const styleLogin = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }

  useEffect(() => {
    if (isAuthenticate) {
      navigate("/");
    }
  }, [isAuthenticate]);

  const handleSubmitLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    axios
      .get(url)
      .then((res) => {
        const isLoginSuccess = res.data.find((profile: Profile) => {
          return profile.email === email && profile.password === password;
        });

        if (isLoginSuccess) {
          dispatch(login(email));
        } else {
          alert("Login failed");
        }
      })
      .catch((err: any) => console.log(err));
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <Card className="card-user">
      <form onSubmit={handleSubmitLogin}>
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
        <div style={styleLogin}>
          <Button type="submit">Login</Button>
          <NavLink to={`/register`}>
            <span>register</span>
          </NavLink>
        </div>
      </form>
    </Card>
  );
};

export default Login;
