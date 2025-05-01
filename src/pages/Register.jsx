import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
            />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your Photo URL"
            />

            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <label className="label">
                <input type="checkbox" className="checkbox" />
                Accept Term & Conditions
              </label>
            </div>
            <button className="btn btn-primary my-4">Login</button>
            <p className="text-center text-accent font-semibold">
              Allready Have An Account ?{" "}
              <Link
                className={"text-secondary hover:underline"}
                to="/auth/login"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
