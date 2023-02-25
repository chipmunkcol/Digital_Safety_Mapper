import "../../styles/main.css";

const Header = () => {
  return (
    <div className="header-wrap">
      <div className="header-logo"></div>
      <div className="header-nav">
        <div className="header-nav-home">Home</div>
        <div className="header-nav-upload">Upload</div>
        <div className="header-nav-analysis">Analysis</div>
      </div>
      <div className="header-profile"></div>
    </div>
  );
};

export default Header;
