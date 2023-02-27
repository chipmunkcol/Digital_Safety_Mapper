import "./App.css";
import Header from "./components/common/Header";
import Header2 from "./components/common/Header2";
import Router from "./components/common/router";

function App() {
  return (
    <div style={{ width:"100vw", height:"100vh" }}>
      <Header />

      <Header2 />

      <Router />
    </div>
  );
}

export default App;
