import {
  LOGIN,
  LOGOUT,
  REGISTER,
  FETCH_USER,
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
} from "./constants";
import { User } from "../Users/User";

type Action = {
  type: string;
  payload?: any;
};

type State = {
  users: User[];
  isAuthenticate: boolean;
};

const token = localStorage.getItem('token');

const initState = {
  users: [],
  isAuthenticate: token ? true : false,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        isAuthenticate: true,
      };
    case REGISTER:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        isAuthenticate: true,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticate: false,
      };
    case FETCH_USER:
      return {
        ...state,
        users: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case EDIT_USER:
      const newUsers = state.users.map((user) => {
        if (user.id === action.payload.id) {
          user.age = action.payload.age;
          user.name = action.payload.name;
        }
        return user;
      });
      return {
        ...state,
        users: newUsers,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user: User) => user.id !== action.payload),
      };
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
