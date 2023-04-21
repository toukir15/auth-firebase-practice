import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

export default function Header() {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-primary text-primary-content flex justify-between">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      <div>
        <Link className="mr-4" to="/">
          Home
        </Link>
        <Link className="mr-4" to="/order">
          Order
        </Link>
        <Link className="mr-4" to="/login">
          Login
        </Link>
        <Link className="mr-4" to="/resister">
          Resister
        </Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn ">
              sign out
            </button>
          </>
        ) : (
          <Link className="btn" to="/logIn">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
}
