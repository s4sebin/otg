import React from "react";
import { IframeModalProps } from "../../types/CareerGps.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import IframeNew from "./IframeNew";

const IframeModal = ({ onClose }: IframeModalProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50   w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full h-full max-w-full max-h-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col h-full w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-1 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-xl font-semibold">Full screen</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-4 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            {/*body*/}
            <div className="relative p-1 flex-auto">
              <IframeNew isInModal />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

// import React from 'react';

// const FullScreenModal = ({ isOpen, onClose }) => {
//   // Define a class to conditionally show/hide the modal
//   const modalClass = isOpen ? 'fixed inset-0 flex items-center justify-center z-50' : 'hidden';

//   return (
//     <div className={modalClass}>
//       {/* Background overlay */}
//       <div className="fixed inset-0 bg-gray-900 opacity-50"></div>

//       {/* Modal content */}
//       <div className="bg-white p-8 rounded-lg w-full max-w-lg">
//         {/* Close button */}
//         <button className="absolute top-0 right-0 m-4" onClick={onClose}>
//           <svg
//             className="w-6 h-6 text-gray-700 hover:text-gray-900"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             ></path>
//           </svg>
//         </button>

//         {/* Modal content goes here */}
//         <h2 className="text-xl font-bold mb-4">Modal Title</h2>
//         <p className="text-gray-700">Modal content goes here...</p>
//       </div>
//     </div>
//   );
// };

// export default FullScreenModal;

export default IframeModal;
