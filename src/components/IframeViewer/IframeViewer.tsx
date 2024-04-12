/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const IframeViewer = () => {
  const [zoom, setZoom] = useState(100); // Initial zoom level

  const handleZoomIn = () => {
    if (zoom < 400) {
      setZoom(zoom + 10);
    }
  };

  const handleZoomOut = () => {
    if (zoom > 100) {
      setZoom(zoom - 10);
    }
  };

  const handleNavigate = (direction: string) => {
    const iframe: any = document.getElementById("myIframe");
    const currentPosition = {
      top: parseInt(iframe?.style?.top || 0),
      left: parseInt(iframe?.style?.left || 0),
    };

    const MAX_MOVEMENT = 10; // Change this value to adjust movement distance

    const newPosition = { ...currentPosition };
    switch (direction) {
      case "left":
        newPosition.left = Math.max(currentPosition.left - MAX_MOVEMENT, 0); // Don't move beyond left edge
        break;
      case "right":
        newPosition.left = Math.min(
          currentPosition.left + MAX_MOVEMENT,
          iframe.clientWidth - iframe.contentWindow.document.body.scrollWidth
        ); // Don't move beyond right edge
        break;
      case "top":
        newPosition.top = Math.max(currentPosition.top - MAX_MOVEMENT, 0); // Don't move beyond top edge
        break;
      case "bottom":
        newPosition.top = Math.min(
          currentPosition.top + MAX_MOVEMENT,
          iframe.clientHeight - iframe.contentWindow.document.body.scrollHeight
        ); // Don't move beyond bottom edge
        break;
      default:
        break;
    }

    iframe.style.top = `${newPosition.top}px`;
    iframe.style.left = `${newPosition.left}px`;
  };

  return (
    <div className="iframeWrapper">
      <div className="iframeContainer">
        <iframe
          id="myIframe"
          src="/scorm/index.html"
          style={{
            width: "100%",
            height: "400px",
            transform: `scale(${zoom / 100})`,
          }}
        />
      </div>
      <div className="buttonWrapper">
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={() => handleNavigate("left")}>Left</button>
        <button onClick={() => handleNavigate("right")}>Right</button>
        <button onClick={() => handleNavigate("top")}>Top</button>
        <button onClick={() => handleNavigate("bottom")}>Bottom</button>
      </div>
    </div>
  );
};

export default IframeViewer;
