import { Route, Routes } from "react-router-dom";
import { routeEnum } from "../enums/route.enum";
import CareerGps from "../pages/CareerGps/CareerGps";

const MainRoute = () => {
  return (
    <Routes>
      <Route path={routeEnum.Home} element={<CareerGps />} />
      <Route path={routeEnum.FallBack} element={<CareerGps />} />
    </Routes>
  );
};
export default MainRoute;
