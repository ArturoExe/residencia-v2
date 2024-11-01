"use client";
import { useState } from "react";
import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";

const ClientSideWrapper = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Manage sidebar open state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <div className="flex flex-col w-full">
        <div className="flex ">{children}</div>
      </div>
    </div>
  );
};

export default ClientSideWrapper;
