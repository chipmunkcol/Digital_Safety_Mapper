import { useNavigate, useParams } from "react-router";
import "../../styles/main.css";

const Navbar = () => {
  // params로 받아다가 flex nav만들면 될듯
const params = useParams()
console.log('params: ', params);
const navigate = useNavigate()
const navigateHandler = ( arg ) => {
  navigate( arg );
}

  return (
    <div className="navbar">
      <div className="navbar-facility">Facility info</div>
      <div 
        className="navbar-analysis"
        onClick={() => { navigateHandler("status") }}
      >
        Status
      </div>
      <div onClick={() => { navigateHandler("projectInfo") }}>
        Project Info
      </div>
    </div>
  );
};

export default Navbar;
