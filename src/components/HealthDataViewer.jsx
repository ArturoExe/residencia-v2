"use client";

import React, { useState } from "react";
import * as XLSX from "xlsx";

// Mock data with the specified fields
const initialData = [
  {
    nombre: "Juan Pérez",
    edad: 35,
    peso: 75,
    altura: 175,
    imc: 24.5,
    hipertensionArterial: false,
    presionSistolica: 120,
    presionDiastolica: 80,
    consumoAlcohol: true,
    unidadesSemana: 5,
    fumador: false,
    cigarrillosSemana: 0,
    edadInicioFumar: 0,
    actividadFisica: true,
    minutosActividad: 150,
    diabetes: false,
    tipoDiabetes: "",
    discapacidadAuditiva: false,
    porcentajeDiscapacidad: 0,
    contactoSocial: 20,
    clasificacionContactoSocial: "Medio",
    calidadAire: "Buena",
    ica: 50,
  },
  {
    nombre: "María García",
    edad: 28,
    peso: 62,
    altura: 165,
    imc: 22.8,
    hipertensionArterial: false,
    presionSistolica: 110,
    presionDiastolica: 70,
    consumoAlcohol: false,
    unidadesSemana: 0,
    fumador: true,
    cigarrillosSemana: 30,
    edadInicioFumar: 20,
    actividadFisica: true,
    minutosActividad: 200,
    diabetes: false,
    tipoDiabetes: "",
    discapacidadAuditiva: false,
    porcentajeDiscapacidad: 0,
    contactoSocial: 30,
    clasificacionContactoSocial: "Alto",
    calidadAire: "Moderada",
    ica: 75,
  },
];

export default function HealthDataViewer() {
  const [data, setData] = useState(initialData);

  const headers = Object.keys(data[0]);

  const deleteEntry = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Health Data");
    XLSX.writeFile(workbook, "health_data.xlsx");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Health Data Viewer</h1>
      <button
        onClick={downloadExcel}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Download Excel
      </button>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-6 py-3">
                  {header}
                </th>
              ))}
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                {headers.map((header) => (
                  <td key={header} className="px-6 py-4">
                    {typeof item[header] === "boolean"
                      ? item[header]
                        ? "Yes"
                        : "No"
                      : item[header]}
                  </td>
                ))}
                <td className="px-6 py-4">
                  <button
                    onClick={() => deleteEntry(index)}
                    className="font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
