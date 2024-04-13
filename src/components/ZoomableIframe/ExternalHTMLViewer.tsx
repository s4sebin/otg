const ExternalHTMLViewer = () => {
  return (
    <iframe
      src={"https://s3.amazonaws.com/otg.discovery/Pilot+1/index.html"}
      title="External HTML Viewer"
      style={{ width: "100%", height: "100%", border: "none" }}
      allowFullScreen
    />
  );
};

export default ExternalHTMLViewer;
