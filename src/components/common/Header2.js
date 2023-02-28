import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/main.css";
import Navbar from "./Navbar";

const Header2 = () => {

const facilityList = ['서해대교', '청담대교', '이순신대교'];
const [selectedList, setSelectedList] = useState('');
// console.log('selectedList: ', selectedList);

const projectList = ['2021 정밀안전진단(가)', '2022 정밀안전진단(나)'];

const navigate = useNavigate();
const navigateHandler = ( projectId ) => {
  navigate({pathname:'/', search:`fac_id=${selectedList}&prj_id=${projectId}` });
}

  return (
    <div className="header2-wrap">
      <div className="header2-nav-fix">
        <select className="input-name"
          onChange={(e)=> {
            setSelectedList(e.target.value)
          }} 
        >
          <option 
            style={{ display: "none" }}
          >
            Select Facility
          </option>
          {
            facilityList.map((facility, index) => (
              <option 
                value={ facility } 
                key={ index }
                >
                  { facility }
              </option>
            ))
          }
        </select>
        
        <div className="input-space"> - </div>

        <select className="input-name2"
          onChange={(e)=> {
            navigateHandler(e.target.value)
          }} 
        >
          <option 
            style={{ display: "none" }}
          >
            Select Project
          </option>
          {
            projectList.map((project, index) => (
              <option 
                value={ project } 
                key={ index }
                >
                  { project }
              </option>
            ))
          }
        </select>

      </div>
      <div className="header2-nav-flex">
        <Navbar /> {/* Navbar 컴포넌트   */}
      </div>
    </div>
  );
};

export default Header2;
