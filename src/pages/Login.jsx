import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state? location.state : "/"}`)
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode)
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button type="submit" className="btn btn-primary my-4">
              Login
            </button>
            <p className="text-center text-accent font-semibold">
              Dont’t Have An Account ?{" "}
              <Link
                className={"text-secondary hover:underline"}
                to="/auth/register"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
