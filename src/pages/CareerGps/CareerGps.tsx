import React from "react";
import IframeNew from "../../components/IframeNew/IframeNew";
import HeaderBg from "../../components/shared/layout/HeaderBg/HeaderBg";

const CareerGps = () => {
  return (
    <>
      <HeaderBg
        title="Career"
        HighlightTitle="Gps"
        url="/assets/img/MicrosoftTeams-image-6.jpg"
      />
      <div className="container mx-auto pt-10 px-20">
        <div className="md:flex w-full mb-6">
          <div className="w-full md:w-2/5 p-4">
            <img src="/assets/img/gps-img.png" alt="careerGps" />
          </div>
          <div className="w-full md:w-3/5   p-4">
            <h2 className="ot-section-title mb-3">Map Your Future:</h2>
            <div className="ot-section-content">
              <strong>
                Career
                <span className="ot-text-highlight">
                  <em>GPS </em>
                </span>
              </strong>
              is OTG’s innovative approach to exploring new paths for your
              career.&nbsp;What fuels you? Plot your career path based on your
              passions. Explore opportunities based on where you excel and find
              new horizons to develop. Discover the knowledge, skills, and
              abilities you’ll need along the way, as well as the materials to
              help you <strong>grow</strong>. Create a <strong>plan</strong> to
              achieve your goals. Map your way there. Stay focused and take
              action to <strong>succeed</strong>.
            </div>
          </div>
        </div>
        <IframeNew />
      </div>
    </>
  );
};

export default CareerGps;
