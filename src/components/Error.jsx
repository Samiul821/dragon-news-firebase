import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 text-center px-4 py-10">
      <h1 className="text-[80px] sm:text-[100px] md:text-[120px] font-extrabold text-yellow-500 leading-none">
        😵‍💫 404
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mt-4">
        Oops! You got lost in the interwebs 🕸️
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-3 mb-6 max-w-md">
        The page you're looking for took a vacation 🚀<br />
        Let's bring you back home before the aliens find you 👽
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg font-medium px-5 py-2 rounded shadow-md transition"
      >
        🏠 Take Me Home
      </Link>
    </div>
  );
};

export default ErrorPage;

