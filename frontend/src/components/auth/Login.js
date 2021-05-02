import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import AuthContext from "../../context/auth/authContext";

const Login = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error === "Incorrect username or password") {
      toast.error("Incorrect username or password");
      clearErrors();
    }
  }, [error, isAuthenticated, history, clearErrors]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      toast.error("Email and/or password cannot be empty");
    } else {
      login({ email, password });
    }
  };

  return (
    <section className="mx-auto">
      <div className="mt-32 bg-grey-lighter flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Login</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-yellow-500 w-full p-3 rounded mb-4"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                className="block border border-yellow-500 w-full p-3 rounded mb-4"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="mx-auto mt-4 py-1 px-6 rounded-full border-2 border-yellow-500 flex items-center font-bold text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-500 ease-in-out focus:outline-none"
              >
                Login
              </button>
            </form>
          </div>

          <div className="text-grey-dark mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="border-b font-semibold text-lg focus:outline-none"
            >
              Click here to register.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
