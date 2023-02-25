import "../../styles/main.css";
import Navbar from "./Navbar";

const Header2 = () => {
  return (
    <div className="header2-wrap">
      <div className="header2-nav-fix">
        <input className="input-name" placeholder="건축사" />
        <input className="input-name2" placeholder="시설명" />
      </div>
      <div className="header2-nav-flex">
        <Navbar /> {/* Navbar 컴포넌트   */}
      </div>
    </div>
  );
};

export default Header2;
