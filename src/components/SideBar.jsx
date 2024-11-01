"use client";

import { FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SideBar = ({ isSidebarOpen, toggleSidebar }) => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    toggleSidebar(); // Close sidebar on navigation
  };

  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 bg-gray-100 md:bg-transparent h-screen`}
    >
      {/* Close button for mobile screens */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 md:hidden focus:outline-none"
      >
        <FaTimes size={24} />
      </button>

      <div className="bg-white rounded  shadow-lg h-full">
        <div className="flex items-center space-x-4 p-2 mb-5 w-52">
          <img
            className="h-12 rounded-full"
            src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
            alt="James Bhatta"
          />
          <div>
            <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
              Arturo M
            </h4>
            <span className="text-sm tracking-wide flex items-center space-x-1">
              <svg
                className="h-4 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-gray-600">Verified</span>
            </span>
          </div>
        </div>

        <ul className="space-y-2 text-sm">
          <li>
            <a
              onClick={() => handleNavigation("/")}
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span>Home</span>
            </a>
          </li>

          <li>
            <a
              onClick={() => handleNavigation("/patients")}
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </span>
              <span>Pacientes</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </span>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
