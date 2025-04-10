import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
    const error=useRouteError()
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100"> 
        <h1 className="text-4xl text-red-500 mb-4">{error.status || 'Error'} - {error.statusText || 'Page Not Found'}</h1>
         <p className="text-lg text-gray-700 mb-8">{error.message || 'Sorry, the page you are looking for does not exist.'}</p>
          <Link to="/" className="bg-primarycolor text-white font-bold py-2 px-4 rounded"> Go to Home </Link>
         </div>
    );
};

export default ErrorPage;