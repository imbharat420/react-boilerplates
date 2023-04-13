import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
const RootLayout = () => {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
