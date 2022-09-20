import { User } from "../Users/User";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  FETCH_USER,
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
} from "./constants";

export const loginAccount = (payload: string) => ({
  type: LOGIN,
  payload,
});

export const logout = (payload: string) => ({
  type: LOGOUT,
  payload,
});

export const register = (payload: string) => ({
  type: REGISTER,
  payload,
});

export const fetchUser = (payload: User[]) => ({
  type: FETCH_USER,
  payload,
});

export const addUser = (payload: User) => ({
  type: ADD_USER,
  payload,
});

export const editUser = (payload: User) => ({
  type: EDIT_USER,
  payload,
});

export const deleteUser = (payload: string) => ({
  type: DELETE_USER,
  payload,
});
