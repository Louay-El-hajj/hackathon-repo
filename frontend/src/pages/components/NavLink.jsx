const NavLink = ({ to = "/", className = "", children }) => {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
};

export default NavLink;
