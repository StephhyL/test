// import { useRef, useEffect, useState } from "react";
// import { Stage, Layer, Image, Transformer } from "react-konva";
// import useImage from "use-image";

// const Rectangle = ({ shapeProps, isSelected, onSelect, onChange }) => {
//   const [image] = useImage(
//     "https://images.unsplash.com/photo-1604537466573-5e94508fd243?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     "Anonimus"
//   );
//   const shapeRef = useRef();
//   const trRef = useRef();

//   useEffect(() => {
//     if (isSelected) {
//       trRef.current.setNode(shapeRef.current);
//       trRef.current.getLayer().batchDraw();
//     }
//   }, [isSelected]);

//   return (
//     <>
//       <Image
//         image={image}
//         onClick={onSelect}
//         ref={shapeRef}
//         draggable
//         onDragEnd={(e) => {
//           onChange({
//             ...shapeProps,
//             x: e.target.x(),
//             y: e.target.y(),
//           });
//         }}
//         onTransformEnd={(e) => {
//           // transformer is changing scale of the node
//           // and NOT its width or height
//           // but in the store we have only width and height
//           // to match the data better we will reset scale on transform end
//           const node = shapeRef.current;
//           const scaleX = node.scaleX();
//           const scaleY = node.scaleY();

//           // we will reset it back
//           node.scaleX(1);
//           node.scaleY(1);
//           node.width(Math.max(5, node.width() * scaleX));
//           node.height(Math.max(node.height() * scaleY));

//           onChange({
//             ...shapeProps,
//             x: node.x(),
//             y: node.y(),
//             // set minimal value
//             width: node.width(),
//             height: node.height(),
//           });
//         }}
//       />
//       {isSelected && (
//         <Transformer
//           ref={trRef}
//           boundBoxFunc={(oldBox, newBox) => {
//             // limit resize
//             if (newBox.width < 5 || newBox.height < 5) {
//               return oldBox;
//             }
//             return newBox;
//           }}
//         />
//       )}
//     </>
//   );
// };

// const generateOneRectange = () => {
//   return {
//     x: 10,
//     y: 10,
//     width: 100,
//     height: 100,
//     id: "rect1",
//   };
// };

// const GenerateImage = () => {
//   const [rectangles, setRectangles] = useState(initialRectangles);
//   const [selectedId, selectShape] = useState(null);

//   const checkDeselect = (e) => {
//     // deselect when clicked on empty area
//     const clickedOnEmpty = e.target === e.target.getStage();
//     if (clickedOnEmpty) {
//       selectShape(null);
//     }
//   };

//   const handleClick = (arr) => {
//     let newRectangle = generateOneRectangle();
//     setRectangles([...rectangles, newRectangle]);
//   };

//   return (
//     <>
//       <Button confirm="confirm" onClick={handleClick}>
//         Rectangle!!
//       </Button>
//       <Stage
//         width={window.innerWidth}
//         height={window.innerHeight}
//         onMouseDown={(e) => {
//           // deselect when clicked on empty area
//           const clickedOnEmpty = e.target === e.target.getStage();
//           if (clickedOnEmpty) {
//             selectShape(null);
//           }
//         }}
//       >
//         <Layer>
//           {rectangles.map((rect, i) => {
//             return (
//               <Rectangle
//                 key={i}
//                 shapeProps={rect}
//                 isSelected={rect.id === selectedId}
//                 onSelect={() => {
//                   selectShape(rect.id);
//                 }}
//                 onChange={(newAttrs) => {
//                   const rects = rectangles.slice();
//                   rects[i] = newAttrs;
//                   setRectangles(rects);
//                 }}
//               />
//             );
//           })}
//         </Layer>
//       </Stage>
//     </>
//   );
// };

// export default GenerateImage;
import React from "react";

const GenerateImage = () => {
  return <div></div>;
};

export default GenerateImage;
