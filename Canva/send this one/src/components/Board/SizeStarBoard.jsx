import { useState } from "react";
import { Stage, Layer, Star, Text } from "react-konva";

import Button from "../Button";

import "../../styles/css/Board.css";

function generateShapes() {
  return [...Array(1)].map((_, i) => ({
    id: i.toString(),
    x: 110,
    y: 110,
    // x: Math.random() * window.innerWidth,
    // y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}

const INITIAL_STATE = generateShapes();

const SizeStarBoard = (props) => {
  const [stars, setStars] = useState(INITIAL_STATE);

  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };
  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };

  const handleClick = (arr) => {
    let newStar = generateShapes();
    setStars([...stars, newStar]);
  };

  return (
    <div className="board">
      Hello from Board
      <Button onClick={handleClick}>Star!!</Button>
      <Stage width={1000} height={500} className="stage">
        <Layer>
          <Text text="Try to drag a star" />
          {stars.map((star) => (
            <Star
              key={star.id}
              id={star.id}
              x={star.x}
              y={star.y}
              numPoints={5}
              innerRadius={20}
              outerRadius={40}
              fill="#89b717"
              opacity={0.8}
              draggable
              rotation={star.rotation}
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.6}
              shadowOffsetX={star.isDragging ? 10 : 5}
              shadowOffsetY={star.isDragging ? 10 : 5}
              scaleX={star.isDragging ? 1.2 : 1}
              scaleY={star.isDragging ? 1.2 : 1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default SizeStarBoard;
