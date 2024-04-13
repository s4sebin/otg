/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faSearchMinus,
  faSearchPlus,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const IframeNew = () => {
  const [zoom, setZoom] = useState(100);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const divRef = useRef<any>(null);
  const iFrameRef = useRef<any>(null);
  const [buttonDisableStatus, setButtonDisableStatus] = useState<any>({
    left: false,
    right: false,
    top: false,
    bottom: false,
    zoomIn: false,
    zoomOut: false,
    reset: true,
  });

  useEffect(() => {
    if (zoom == 100) resetPosition();
    else setButtonDisable("reset", false);
  }, [zoom]);

  const handleZoomIn = () => {
    if (zoom < 400) setZoom(zoom + 10);
  };

  const handleZoomOut = () => {
    if (zoom > 100) setZoom(zoom - 10);
  };

  const handleMove = (direction: string) => {
    const step = 10;
    const newPosition = { ...position };
    if (zoom <= 100) return;
    const { width: pWidth } = divRef.current.getBoundingClientRect();
    const { width: iWidth, left: iLeft } =
      iFrameRef.current.getBoundingClientRect();

    switch (direction) {
      case "left": {
        const maxLeftMoveWidth = iWidth - iWidth / 4;
        if (iLeft > -maxLeftMoveWidth) newPosition.left -= step;
        break;
      }
      case "right": {
        const maxRightMoveWidth = pWidth - pWidth / 4;
        if (iLeft < maxRightMoveWidth) newPosition.left += step;
        break;
      }
      case "top": {
        const iFrameEdge = zoom - 10;
        if (newPosition.top > -iFrameEdge) newPosition.top -= step;
        break;
      }
      case "bottom":
        if (newPosition.top < 80) newPosition.top += step;
        break;
      default:
        break;
    }

    setPosition(newPosition);
  };

  const resetPosition = () => {
    setPosition({
      top: 0,
      left: 0,
    });
    setButtonDisable("reset", true);
  };

  const setButtonDisable = (action: string, state: boolean) => {
    setButtonDisableStatus((prevState: any) => ({
      ...prevState,
      [action]: state,
    }));
  };

  return (
    <div className="mb-7 relative">
      <div
        className="ot-iframe-container border border-solid border-orange-600"
        ref={divRef}
      >
        <iframe
          src="./scorm/index.html"
          style={{
            position: "absolute",
            top: `${position.top}%`,
            left: `${position.left}%`,
            width: `${zoom}%`,
            height: `${zoom}%`,
            border: "none",
          }}
          ref={iFrameRef}
        />
      </div>
      <div className="flex justify-end my-4 ot-iframe-controller-wrapper  ">
        {!buttonDisableStatus.reset && (
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => setZoom(100)}
            title="Reset All"
          >
            <FontAwesomeIcon icon={faUndo} />
          </button>
        )}
        <span className="inline-flex mr-2 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Zoom - {`${zoom}%`}
        </span>
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
