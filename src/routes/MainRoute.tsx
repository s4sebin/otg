import { Route, Routes } from "react-router-dom";
import { routeEnum } from "../enums/route.enum";
import CareerGps from "../pages/CareerGps/CareerGps";

const MainRoute = () => {
  return (
    <Routes>
      <Route path={routeEnum.Home} element={<CareerGps />} />
    </Routes>
  );
};
export default MainRoute;
