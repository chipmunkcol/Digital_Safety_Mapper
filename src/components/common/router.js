import { Routes, Route } from "react-router-dom";
import Admin from "../../pages/Admin";
import MyInfo from "../../pages/MyInfo";
import Portal from "../../pages/Portal";
import System from "../../pages/System";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={ <Portal /> } />
      <Route path="/main" element={ <System /> } />
      <Route path="myInfo" element={ <MyInfo /> } />
      <Route path="admin" element={ <Admin /> }/>
    </Routes>
  );
};

export default Router;
