import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>OOOPSSSSS!!!!</h2>
            <Link className="btn btn-warning" to={'/'}>Go Back To Home Page</Link>
        </div>
    );
};

export default ErrorPage;