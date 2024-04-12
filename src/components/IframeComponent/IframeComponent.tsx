import React, { useState } from "react";
import "../../styles/IframeComponent.css"; // Import CSS file for styling

const IframeComponent = () => {
  const [zoomScale, setZoomScale] = useState(100); // Initial zoom scale
  const [iframeStyle, setIframeStyle] = useState({}); // Initial iframe style

  // Function to handle zoom in button click
  const handleZoomIn = () => {
    if (zoomScale < 300) {
      const newZoomScale = zoomScale + 10;
      setZoomScale(newZoomScale);
      setIframeStyle({ transform: `scale(${newZoomScale / 100})` });
    }
  };

  // Function to handle zoom out button click
  const handleZoomOut = () => {
    if (zoomScale > 100) {
      const newZoomScale = zoomScale - 10;
      setZoomScale(newZoomScale);
      setIframeStyle({ transform: `scale(${newZoomScale / 100})` });
    }
  };

  // Function to handle moving the zoomed iframe content
  const handleMove = (direction: string) => {
    const movement = 50; // Adjust movement distance as needed
    let newX = 0;
    let newY = 0;

    switch (direction) {
      case "up":
        newY = -movement;
        break;
      case "down":
        newY = movement;
        break;
      case "left":
        newX = -movement;
        break;
      case "right":
        newX = movement;
        break;
      default:
        break;
    }

    setIframeStyle((prevStyle) => ({
      ...prevStyle,
      transform: `scale(${zoomScale / 100}) translate(${newX}%, ${newY}%)`,
    }));
  };

  return (
    <div className="iframeOuterWrapper">
      <div className="iframe-container">
        <iframe
          src="https://s3.amazonaws.com/otg.discovery/Pilot+1/index.html"
          style={iframeStyle}
          className="iframe-content"
          title="iframe"
        />
      </div>
      <div className="buttons-container">
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={() => handleMove("up")}>Move Up</button>
        <button onClick={() => handleMove("down")}>Move Down</button>
        <button onClick={() => handleMove("left")}>Move Left</button>
        <button onClick={() => handleMove("right")}>Move Right</button>
      </div>
    </div>
  );
};

export default IframeComponent;
