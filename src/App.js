import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Header2 from "./components/common/Header2";
import LeftPanel from "./components/common/LeftPanel";
import Router from "./components/common/router";

function App() {

  // const [isHide, setIsHide] = useState(true)
  // console.log('isHide: ', isHide);
  // const params = useLocation().pathname;
  // console.log('params: ', params);

  // const leftpanelHandler = () => {
  //     if(params !== '/') {
  //         setIsHide(false)
  //     } else {
  //         setIsHide(true)
  //     }
  // }

  // useEffect(() => {
  //   leftpanelHandler();
  // },[params])

  return (
    <div style={{ width:"100vw", height:"100vh" }}>
      <Header />

      <Header2 />

      <LeftPanel 
      // isHide={isHide}
      />

      <Router />
      
    </div>
  );
}

export default App;
