import logo from "./logo.svg";
import "./App.scss";
import "../src/assets/scss/section.scss";
import "../src/assets/scss/mobsection.scss";
import Home from "./components/Home";
import { isMobile, isTablet } from "react-device-detect";
function App() {
  if (isMobile && !isTablet) {
    return (
      <div className="App">
        <div
          className="main-div"
          style={{ position: "relative", width: "100%" }}
        >
          <Home />
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="main-div">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
