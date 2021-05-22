import { createContext, useReducer } from "react";
import usersReducer from "./reducers/usersReducer";
import axios from "axios";

const initialState = {
  loading: true,
  userInfo: {},
  error: null,
};

export const UsersContext = createContext();

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  //login action
  async function loginUser(user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "https://sky-press.herokuapp.com/api/v1/user/login",
      user,
      config
    );

    localStorage.setItem("userInfo", res.data.token_id);

    console.log(res);

    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
  }
  //logout
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  //register user
  async function registerUser(newuser) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://sky-press.herokuapp.com/api/v1/user/register",
        newuser,
        config
      );

      dispatch({
        type: "REGISTER_USER",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <UsersContext.Provider
      value={{ userInfo: state.userInfo, loginUser, registerUser, logout }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UserContextProvider;
