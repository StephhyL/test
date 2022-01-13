import { useState } from "react";

import Navigation from "./components/Navigation/Navigation";
import SideBar from "./components/SideBar/SideBar";
import StarBoard from "./components/Board/StarBoard";
import RectangleBoard from "./components/Board/RectangleBoard";
import FullRectangle from "./components/Board/FullRectangle";
import SizeStar from "./components/Board/SizeStar";
import SizeImage from "./components/Board/SizeImage";
import SizeStarBoard from "./components/Board/SizeStarBoard";
import GenerateImage from "./components/Board/GenerateImage";
import Footer from "./components/Footer/Footer";

import "./styles/css/App.css";

function App() {
  // const [stars, setStars] = useState([]);

  return (
    <div className="App">
      <Navigation />
      <div className="main-section">
        <SideBar />
        {/* <StarBoard /> */}
        {/* <RectangleBoard /> */}
        {/* <FullRectangle /> */}
        {/* <SizeStar /> */}
        <SizeImage />
        {/* <SizeStarBoard /> */}
        {/* <GenerateImage /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
