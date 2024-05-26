import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

const Header = ({ className = "", loggedIn = false }) => {
  return (
    <header
      className={`container mx-auto flex items-center justify-between gap-4 py-8 ${className}`}
    >
      <div className="text-white flex items-start gap-4">
        <Logo className="w-12" />
      </div>
      <div className="text-white flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/#tips-tricks">Tips & Tricks</NavLink>
        <NavLink to="/#previous-disasters">Previous Disasters</NavLink>
        {!loggedIn && <NavLink to="/auth">Login / Signup</NavLink>}
      </div>
    </header>
  );
};

export default Header;
