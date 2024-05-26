import { Outlet } from "react-router-dom";

import Header from "../components/Header";

const LandingLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default LandingLayout;
