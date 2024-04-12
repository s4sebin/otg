import React from "react";
import PinchZoomPan from "react-pinch-zoom-pan";

interface Props {
  src: string;
}
const ZoomableIframe = (props: Props) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <PinchZoomPan>
        <iframe
          src={props.src}
          title="Zoomable Iframe"
          style={{ width: "100%", height: "100%" }}
          allowFullScreen
        />
      </PinchZoomPan>
    </div>
  );
};

export default ZoomableIframe;
