import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const {googleSignIn,githubSignIn} = use(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage)
    })
  }

  const handleGitubSignIn = () => {
    githubSignIn()
    .then(result => {
      const user = result.user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage)
    })
  }

  return (
    <div>
      <h2 className="font-semibold mb-5">Login With</h2>
      <div className="space-y-3">
        <button onClick={handleGoogleSignIn} className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24} /> Login with Google
        </button>
        <button onClick={handleGitubSignIn} className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
