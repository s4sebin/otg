import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menus: Array<string> = [
    "Experiences",
    "Tech",
    "Culinary",
    "Careers",
    "Press",
    "CIBO",
    "Business Diversity",
    "Contact",
  ];
  return (
    <header className="bg-gray-800 text-white py-4 ">
      <div className="container mx-auto flex justify-between items-center px-20">
        <div className="flex items-center">
          <img
            src="./assets/img/OTG_Logo_Orange.svg"
            alt="Logo"
            className="w-14 mr-2"
          />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu bar on the right side */}
        <nav className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex space-x-4 md:space-x-8">
            {menus.map((menu: string, i: number) => (
              <li key={i} className="hover:text-gray-300">
                {menu}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
