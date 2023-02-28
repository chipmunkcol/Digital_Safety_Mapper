import { useNavigate } from "react-router-dom";
import "../../styles/main.css";
import 코매퍼로고 from "../../assets/kmplogo_fit.png" 

const Header = () => {

  const navigate = useNavigate();
  const navigateHandler = ( url ) => {
    navigate(url);
  };

  return (
    <div className="header-wrap">
      <div className="header-logo">
        <img
          src={ 코매퍼로고 } 
          alt="komapper logo for bridge"
          width={170}
          height={30}
          />
      </div>
      <div className="header-nav">
        <div className="header-nav-home" onClick={()=>navigateHandler('')}>Home</div>
        <div className="header-nav-upload" onClick={()=>navigateHandler('upload')}>Upload</div>
        <div className="header-nav-analysis" onClick={()=>navigateHandler('analysis')}>Analysis</div>
      </div>
      <div className="header-profile"></div>
    </div>
  );
};

export default Header;
