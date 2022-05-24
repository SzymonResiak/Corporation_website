import { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";

import axios from "./api/axios";
const LOGIN_URL = "api/token/";

const LogIn = ({ setLoginUser }) => {
  const { setAuth } = useContext(AuthContext);
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState();

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ username, password, roles, accessToken });
      setUsername("");
      setPassword("");

      //change login status and display page
      setLoginUser(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.resposne?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <section className="form-container">
      <h1>Welcome at Our Company Site</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h2>Log In as User</h2>
          <input
            type="text"
            id="username"
            placeholder="username"
            className="input input-login"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="input input-login"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button type="submit" className="btn btn-login">
            Log In
          </button>
          <hr />
          <a href="http://127.0.0.1:8000/admin/login/?next=/admin/">
            Log In as Admin
          </a>
        </form>
      </div>
    </section>
  );
};

export default LogIn;
