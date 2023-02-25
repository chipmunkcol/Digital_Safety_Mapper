import "../../styles/main.css";

const Navbar = () => {
  // params로 받아다가 flex nav만들면 될듯

  return (
    <div className="navbar">
      <div className="navbar-facility">Facility info</div>
      <div className="navbar-analysis">Analysis</div>
      <div>Report</div>
    </div>
  );
};

export default Navbar;
