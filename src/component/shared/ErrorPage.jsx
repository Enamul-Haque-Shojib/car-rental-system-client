import { Link, } from "react-router";

const ErrorPage = () => {
    

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page not found</h2>
      <p className="mb-6 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default ErrorPage;