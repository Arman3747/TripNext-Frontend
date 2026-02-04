import { Link } from "react-router";

const Unauthorized = () => {
  return (
    <div>
      <p className="mb-8">Unauthorized Na !!! </p>

      <Link className="border rounded-sm border-white p-2 my-16" to="/">
        Go Home Page
      </Link>
    </div>
  );
};

export default Unauthorized;
