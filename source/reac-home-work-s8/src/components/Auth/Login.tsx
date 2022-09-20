import axios from "axios";
import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { loginAccount } from "../Store/action";
import myContext from "../Store/context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import { Profile } from "./profile";

const Login = () => {
  const url = `http://localhost:3000/profile`;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [state, dispatch] = useContext(myContext);
  const navigate = useNavigate();
  const { isAuthenticate } = state;

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
          loginAccount("email");
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
        <Button type="submit">Login</Button>
      </form>
    </Card>
  );
};

export default Login;
