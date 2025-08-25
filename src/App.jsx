import BichCham from "./assets/bich_chamm.mp4";
import "./App.scss";
import Header from "./components/Header/Header";
import {Outlet} from "react-router";
function App() {
  return (
    <div className="app-container px-3">
        <div className="header-container">
            <Header></Header>
        </div>
      <div className="context-container">
          <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
