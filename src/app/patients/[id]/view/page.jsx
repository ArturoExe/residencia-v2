"use client";

import { useState, useEffect } from "react";
import DetailsTab from "@/components/DetailsTab";
import AntecedentesTab from "@/components/AntecedentesTab";
import ArchivosTab from "@/components/ArchivosTab";
import ServerTab from "@/components/ServerTab";
import SettingsTab from "@/components/SettingsTab";
import Loading from "../../../../components/Loading";

const ViewPatientPage = ({ params }) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("details");
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the patient data from the API
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`/api/patients/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch patient data");
        }
        const data = await response.json();
        console.log(id);
        setPatient(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPatient();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-11/12">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!patient) {
    return <div>Patient not found</div>;
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl py-4 border-b mb-10">Patient Details</h1>

      <ul className="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-lg p-1">
        <li>
          <a
            onClick={() => handleTabClick("details")}
            className={`flex justify-center py-4 cursor-pointer ${
              activeTab === "details"
                ? "bg-white rounded-lg shadow text-indigo-900"
                : ""
            }`}
          >
            Detalles de paciente
          </a>
        </li>
        <li>
          <a
            onClick={() => handleTabClick("antecedentes")}
            className={`flex justify-center py-4 cursor-pointer ${
              activeTab === "antecedentes"
                ? "bg-white rounded-lg shadow text-indigo-900"
                : ""
            }`}
          >
            Antecedentes
          </a>
        </li>
        <li>
          <a
            onClick={() => handleTabClick("archivos")}
            className={`flex justify-center py-4 cursor-pointer ${
              activeTab === "archivos"
                ? "bg-white rounded-lg shadow text-indigo-900"
                : ""
            }`}
          >
            Archivos
          </a>
        </li>
        <li>
          <a
            onClick={() => handleTabClick("server")}
            className={`flex justify-center py-4 cursor-pointer ${
              activeTab === "server"
                ? "bg-white rounded-lg shadow text-indigo-900"
                : ""
            }`}
          >
            Server Browser
          </a>
        </li>
        <li>
          <a
            onClick={() => handleTabClick("settings")}
            className={`flex justify-center py-4 cursor-pointer ${
              activeTab === "settings"
                ? "bg-white rounded-lg shadow text-indigo-900"
                : ""
            }`}
          >
            Settings
          </a>
        </li>
      </ul>

      <div className="mt-6">
        {activeTab === "details" && <DetailsTab patient={patient} />}
        {activeTab === "antecedentes" && <AntecedentesTab patient={id} />}
        {activeTab === "archivos" && <ArchivosTab userId={id} />}
        {activeTab === "server" && <ServerTab />}
        {activeTab === "settings" && <SettingsTab />}
      </div>
    </div>
  );
};

export default ViewPatientPage;
