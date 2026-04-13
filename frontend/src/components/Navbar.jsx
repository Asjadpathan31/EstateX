import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        EstateX
      </h1>

      <div className="space-x-6">

        <Link to="/" className="hover:underline">
          Home
        </Link>

        <Link to="/properties" className="hover:underline">
          Properties
        </Link>

        <Link to="/add-property" className="hover:underline">
          Add Property
        </Link>

        <Link to="/login" className="hover:underline">
          Login
        </Link>

        <Link to="/register" className="hover:underline">
          Register
        </Link>

      </div>

    </nav>

  );

}

export default Navbar;