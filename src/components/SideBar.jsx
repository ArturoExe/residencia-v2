"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout(); // Clear the token and authentication state
    router.push("/login"); // Redirect to the login page
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-semibold">Dashboard</div>
      <ul className="flex-1 p-4 space-y-2">
        <li>
          <a href="/healthviewer" className="hover:text-gray-300">
            Health Viewer
          </a>
        </li>
        <li>
          <a href="/patients" className="hover:text-gray-300">
            Patients
          </a>
        </li>
        {/* Add more sidebar items as needed */}
      </ul>
      <button
        onClick={handleLogout}
        className="p-4 bg-red-600 hover:bg-red-700 text-center"
      >
        Logout
      </button>
    </div>
  );
}
