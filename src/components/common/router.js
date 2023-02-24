import { Routes, Route } from "react-router-dom";
import Admin from "../../pages/Admin";
import MyInfo from "../../pages/MyInfo";
import Portal from "../../pages/Portal";
import System from "../../pages/System";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={ <System /> } />
      <Route path="admin" element={ <Admin /> }/>
      <Route path="myInfo" element={ <MyInfo /> } />
      
      <Route path="main" element={ <System /> } /> 
    </Routes>
  );
};

export default Router;
