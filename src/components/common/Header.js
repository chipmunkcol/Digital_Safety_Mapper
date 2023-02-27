import { useNavigate } from "react-router";
import "../../styles/main.css";

const Header = () => {

  const navigate = useNavigate();
  const navigateHandler = ( url ) => {
    navigate(url);
  };

  return (
    <div className="header-wrap">
      <div className="header-logo"></div>
      <div className="header-nav">
        <div className="header-nav-home">Home</div>
        <div className="header-nav-upload" onClick={()=>navigateHandler('upload')}>Upload</div>
        <div className="header-nav-analysis" onClick={()=>navigateHandler('analysis')}>Analysis</div>
      </div>
      <div className="header-profile"></div>
    </div>
  );
};

export default Header;
