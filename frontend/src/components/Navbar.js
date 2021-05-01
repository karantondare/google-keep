import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import AuthContext from "../context/auth/authContext";
import NoteContext from "../context/notes/noteContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const {  user, logout } = authContext;

  const noteContext = useContext(NoteContext);
  const { clearNotes } = noteContext;

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    clearNotes();
  };

  return (
    <header className="flex items-center justify-around px-4 py-4 border-b-2">
      <div className="flex items-center justify-center">
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
          alt="notes keeper"
        />
        <h2 className="text-2xl	font-semibold">Notes Keeper</h2>
      </div>

      <div className="flex items-center justify center">
        {user ? (
          <>
            <h4 style={{ color: "#80868B" }} className="pr-4 text-lg">
              {user && user.name}
            </h4>
            <button onClick={handleLogout}>
              <GoSignOut size={24} />
            </button>
          </>
        ) : (
          <Link to="/login">
            <h3 className="text-lg font-semibold">Login</h3>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
