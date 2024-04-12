/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faSearchMinus,
  faSearchPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const IframeNew = () => {
  const [zoom, setZoom] = useState(100);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [buttonDisableStatus, setButtonDisableStatus] = useState<any>({
    left: false,
    right: false,
    top: false,
    bottom: false,
    zoomIn: false,
    zoomOut: false,
  });

  const handleZoomIn = () => {
    if (zoom < 400) setZoom(zoom + 10);
  };

  const handleZoomOut = () => {
    if (zoom > 100) setZoom(zoom - 10);
    else {
      resetPosition();
      setButtonDisable("zoomOut", true);
    }
  };

  const handleMove = (direction: string) => {
    const step = 10;
    const newPosition = { ...position };
    if (zoom <= 100) return;
    switch (direction) {
      case "left":
        if (newPosition.left > -90) newPosition.left -= step;
        break;
      case "right":
        if (newPosition.left < 100) newPosition.left += step;
        break;
      case "top":
        if (newPosition.top > -90) newPosition.top -= step;
        break;
      case "bottom":
        if (newPosition.top < 90) newPosition.top += step;
        break;
      default:
        break;
    }
    // switch (direction) {
    //   case "left":
    //     if (newPosition.left > 0) newPosition.left -= step;
    //     break;
    //   case "right":
    //     if (newPosition.left < 100 - step) newPosition.left += step;
    //     break;
    //   case "top":
    //     if (newPosition.top > 0) newPosition.top -= step;
    //     break;
    //   case "bottom":
    //     if (newPosition.top < 100 - step) newPosition.top += step;
    //     break;
    //   default:
    //     break;
    // }

    setPosition(newPosition);
  };

  const resetPosition = () => {
    setPosition({
      top: 0,
      left: 0,
    });
  };

  const setButtonDisable = (action: string, state: boolean) => {
    setButtonDisableStatus((prevState: any) => ({
      ...prevState,
      [action]: state,
    }));
  };

  return (
    <div className="mb-7 relative">
      <div className="ot-iframe-container">
        <iframe
          src="/scorm/index.html"
          style={{
            position: "absolute",
            top: `${position.top}%`,
            left: `${position.left}%`,
            width: `${zoom}%`,
            height: `${zoom}%`,
            border: "none",
          }}
        />
      </div>
      <div className="flex justify-end my-4 ot-iframe-controller-wrapper  ">
        <div className="inline-flex rounded-md shadow-sm mr-5" role="group">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={handleZoomIn}
          >
            <FontAwesomeIcon icon={faSearchPlus} />
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 rounded-e-lg dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={handleZoomOut}
          >
            <FontAwesomeIcon icon={faSearchMinus} />
          </button>
        </div>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => handleMove("left")}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => handleMove("right")}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => handleMove("top")}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => handleMove("bottom")}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IframeNew;
