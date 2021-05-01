import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Register = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error === "User already exists") {
      toast.error("User already exists");
      clearErrors();
    }
  }, [error, isAuthenticated, history, clearErrors]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      toast.error("Fields cannot be empty!");
    } else if (password !== confirmPassword) {
      toast.error("Passwords don't match");
    } else {
      register({ name, email, password });
    }
  };

  return (
    <section>
      <div className="mt-32 bg-grey-lighter flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Register</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-yellow-500 w-full p-3 rounded mb-4"
                name="name"
                value={name}
                placeholder="Name"
                onChange={handleChange}
              />

              <input
                type="text"
                className="block border border-yellow-500 w-full p-3 rounded mb-4"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                type="password"
                className="block border border-yellow-500 w-full p-3 rounded mb-4"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
                minLength="6"
              />

              <input
                type="password"
                className="block border border-yellow-500 w-full p-3 rounded mb-4"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={handleChange}
                minLength="6"
              />

              <button
                type="submit"
                className="mx-auto mt-4 py-1 px-6 rounded-full border-2 border-yellow-500 flex items-center font-bold text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-500 ease-in-out focus:outline-none"
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="text-grey-dark mt-6">
            Have an account?{" "}
            <Link
              to="/login"
              className="border-b font-semibold text-lg focus:outline-none"
            >
              Click here to login.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
