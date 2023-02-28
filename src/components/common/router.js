import { Routes, Route } from "react-router-dom";
import Admin from "../../pages/Admin";
import MyInfo from "../../pages/MyInfo";
import System from "../../pages/System";
import Analysis from "../pages/system/Analysis";
import Upload from "../pages/system/Upload";

const Router = () => {
  return (
    <Routes>
      <Route path="admin" element={ <Admin /> }/>
      <Route path="myInfo" element={ <MyInfo /> } />
  
      <Route path="" element={ <System /> } />
      <Route path="/upload" element={ <Upload /> }/>
      <Route path="/analysis" element={ <Analysis /> }/>

    </Routes>
  );
};

export default Router;
