import Button from "../Button";

import "../../styles/css/SideBar.css";

const SideBar = () => {
  function generateShapes() {
    return [...Array(10)].map((_, i) => ({
      id: i.toString(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotation: Math.random() * 180,
      isDragging: false,
    }));
  }

  return (
    <div className="sidebar">
      Hello From SideBar
      <div>
        <Button onClick={generateShapes}>Star</Button>
      </div>
    </div>
  );
};

export default SideBar;
