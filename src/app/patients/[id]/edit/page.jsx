"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Edit2, Check, Save } from "lucide-react";

export default function EditPatientPage({ params }) {
  const { id } = params;
  const router = useRouter();
  const [fields, setFields] = useState([
    { label: "Nombre", name: "name", value: "", isEditing: false },
    {
      label: "Apellido Paterno",
      name: "apellidoPaterno",
      value: "",
      isEditing: false,
    },
    {
      label: "Apellido Materno",
      name: "apellidoMaterno",
      value: "",
      isEditing: false,
    },
    {
      label: "Fecha de Nacimiento",
      name: "fechaDeNacimiento",
      value: "",
      isEditing: false,
    },
    {
      label: "Lugar de Nacimiento",
      name: "lugarDeNacimiento",
      value: "",
      isEditing: false,
    },
    { label: "Phone", name: "phone", value: "", isEditing: false },
    { label: "Genero", name: "genero", value: "", isEditing: false },
    { label: "Estatura", name: "estatura", value: "", isEditing: false },
    { label: "Peso", name: "peso", value: "", isEditing: false },
    { label: "CURP", name: "curp", value: "", isEditing: false },
    { label: "Estado Civil", name: "estadoCivil", value: "", isEditing: false },
    { label: "Educacion", name: "educacion", value: "", isEditing: false },
    { label: "Ocupacion", name: "ocupacion", value: "", isEditing: false },
    { label: "Ciudad", name: "ciudad", value: "", isEditing: false },
    { label: "Estado", name: "estado", value: "", isEditing: false },
    { label: "Calle", name: "calle", value: "", isEditing: false },
    { label: "Colonia", name: "colonia", value: "", isEditing: false },
    {
      label: "Codigo Postal",
      name: "codigoPostal",
      value: "",
      isEditing: false,
    },
    { label: "Email", name: "email", value: "", isEditing: false },
    {
      label: "Nombre Familiar",
      name: "nombreFamiliar",
      value: "",
      isEditing: false,
    },
    {
      label: "Phone Familiar",
      name: "phoneFamiliar",
      value: "",
      isEditing: false,
    },
    {
      label: "Email Familiar",
      name: "emailFamiliar",
      value: "",
      isEditing: false,
    },
    { label: "Tabaco", name: "tabaco", value: "", isEditing: false },
    { label: "Alcohol", name: "alcohol", value: "", isEditing: false },
    { label: "Drogas", name: "drogas", value: "", isEditing: false },
    { label: "Actividad", name: "actividad", value: "", isEditing: false },
    {
      label: "Enfermedad Cronica",
      name: "enfermedadCronica",
      value: "",
      isEditing: false,
    },
    { label: "Alergias", name: "alergias", value: "", isEditing: false },
    { label: "Cirugias", name: "cirugias", value: "", isEditing: false },
    { label: "Trastornos", name: "trastornos", value: "", isEditing: false },
    { label: "Cancer", name: "cancer", value: "", isEditing: false },
    {
      label: "Hipertension",
      name: "hipertension",
      value: "",
      isEditing: false,
    },
    { label: "Diabetes", name: "diabetes", value: "", isEditing: false },
    { label: "Cancer Familiar", name: "cancerF", value: "", isEditing: false },
    { label: "Asma", name: "asma", value: "", isEditing: false },
    {
      label: "Enfermedad Neurologica",
      name: "enfermedadN",
      value: "",
      isEditing: false,
    },
  ]);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`/api/patients/${id}`);
        if (!response.ok) {
          throw new Error("Error al conseguir información del paciente");
        }
        const data = await response.json();
        setFields(
          fields.map((field) => ({
            ...field,
            value: data[field.name] || "",
          }))
        );
      } catch (error) {
        console.error("Error al conseguir información del paciente:", error);
      }
    };

    fetchPatient();
  }, [id]);

  const toggleEdit = (index) => {
    setFields(
      fields.map((field, i) =>
        i === index ? { ...field, isEditing: !field.isEditing } : field
      )
    );
  };

  const handleChange = (index, newValue) => {
    setFields(
      fields.map((field, i) =>
        i === index ? { ...field, value: newValue } : field
      )
    );
  };

  const handleSave = async () => {
    const updatedData = fields.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});

    try {
      const response = await fetch(`/api/patients/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar información del paciente");
      }

      alert("¡Se ha actualizado la información del paciente!");
      setFields(fields.map((field) => ({ ...field, isEditing: false })));
      router.push(`/patients/${id}/view`); // Redirect to the view page after editing
    } catch (error) {
      console.error("Error al actualizar información del paciente:", error);
    }
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl py-4 border-b mb-10">Editar Paciente</h1>
      <form className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.name} className="group relative">
            <label className="text-sm font-medium text-muted-foreground">
              {field.label}
            </label>
            <div className="flex items-center mt-1">
              {field.isEditing ? (
                <input
                  type={field.name === "fechaDeNacimiento" ? "date" : "text"}
                  value={field.value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-full border-b border-primary bg-transparent focus:outline-none transition-all duration-300 ease-in-out"
                  autoFocus
                />
              ) : (
                <span className="w-full py-1">{field.value}</span>
              )}
              <button
                type="button"
                onClick={() => toggleEdit(index)}
                className="ml-2 text-primary hover:text-primary/80 transition-colors opacity-0 group-hover:opacity-100"
              >
                {field.isEditing ? <Check size={18} /> : <Edit2 size={18} />}
              </button>
            </div>
          </div>
        ))}
      </form>
      <div className="mt-6 flex justify-between">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center"
        >
          <Save size={18} className="mr-2" /> Guardar Perfil
        </button>
        <button
          onClick={() => router.push(`/patients/`)}
          className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
        >
          Regresar
        </button>
      </div>
    </div>
  );
}
