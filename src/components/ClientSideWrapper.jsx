"use client";

import { useState } from "react";
import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";
import { useAuth } from "@/context/AuthContext"; // Import AuthContext to check authentication

const ClientSideWrapper = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Manage sidebar open state
  const { isAuthenticated } = useAuth(); // Check if the user is authenticated

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <div className="flex w-full">
      {/* Conditionally render Sidebar only if the user is signed in */}
      {isAuthenticated && (
        <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}

      {/* Main content area */}
      <div className="flex flex-col w-full">
        <div className="flex">{children}</div>
      </div>
    </div>
  );
};

export default ClientSideWrapper;
