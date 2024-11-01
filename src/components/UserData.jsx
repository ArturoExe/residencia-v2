import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/DatePickerStyles.css"; // Custom styles for date picker

const UserForm = () => {
  const [step, setStep] = useState(1); // Step tracker
  const [userData, setUserData] = useState({
    name: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaDeNacimiento: new Date(), // Default to today's date
    lugarDeNacimiento: "",
    phone: "",
    genero: "",
    estatura: "",
    peso: "",
    curp: "",
    estadoCivil: "",
    educacion: "",
    ocupacion: "",
    ciudad: "",
    estado: "",
    calle: "",
    colonia: "",
    codigoPostal: "",
    email: "",
    nombreFamiliar: "",
    phoneFamiliar: "",
    emailFamiliar: "",
    tabaco: "",
    alcohol: "",
    drogas: "",
    actividad: "",
    enfermedadCronica: "",
    alergias: "",
    cirugias: "",
    trastornos: "",
    cancer: "",
    hipertension: "",
    diabetes: "",
    cancerF: "",
    asma: "",
    enfermedadN: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setUserData({
      ...userData,
      fechaDeNacimiento: date,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/patients/createPatient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        console.error("Error submitting form");
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 p-10 bg-white rounded-xl shadow-lg mt-3"
    >
      {/* Step 1: Personal Information */}
      {step === 1 && (
        <>
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Name
              </label>
              <input
                name="name"
                value={userData.name}
                onChange={handleChange}
                placeholder="Name"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>
            {/* Apellido Paterno */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Apellido Paterno
              </label>
              <input
                name="apellidoPaterno"
                value={userData.apellidoPaterno}
                onChange={handleChange}
                placeholder="Apellido Paterno"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>
            {/* Apellido Materno */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Apellido Materno
              </label>
              <input
                name="apellidoMaterno"
                value={userData.apellidoMaterno}
                onChange={handleChange}
                placeholder="Apellido Materno"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>
            {/* Fecha de Nacimiento */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Fecha de Nacimiento
              </label>
              <DatePicker
                selected={userData.fechaDeNacimiento}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>
            {/* Lugar de Nacimiento */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Lugar de Nacimiento
              </label>
              <input
                name="lugarDeNacimiento"
                value={userData.lugarDeNacimiento}
                onChange={handleChange}
                placeholder="Lugar de Nacimiento"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Phone
              </label>
              <input
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Email
              </label>
              <input
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Email"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>
            {/* Género */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Género
              </label>
              <select
                name="genero"
                value={userData.genero}
                onChange={handleChange}
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
                required
              >
                <option value="" disabled>
                  Seleccionar
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
            {/* Estatura */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Estatura
              </label>
              <input
                name="estatura"
                value={userData.estatura}
                onChange={handleChange}
                placeholder="Estatura (cm)"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Peso */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Peso
              </label>
              <input
                name="peso"
                value={userData.peso}
                onChange={handleChange}
                placeholder="Peso (kg)"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* CURP */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                CURP
              </label>
              <input
                name="curp"
                value={userData.curp}
                onChange={handleChange}
                placeholder="CURP"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Estado Civil */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Estado Civil
              </label>
              <input
                name="estadoCivil"
                value={userData.estadoCivil}
                onChange={handleChange}
                placeholder="Estado Civil"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Educación */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Educación
              </label>
              <input
                name="educacion"
                value={userData.educacion}
                onChange={handleChange}
                placeholder="Nivel de Educación"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Ocupación */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Ocupación
              </label>
              <input
                name="ocupacion"
                value={userData.ocupacion}
                onChange={handleChange}
                placeholder="Ocupación"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={nextStep}
              className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Step 2: Contact Information */}
      {step === 2 && (
        <>
          <h2 className="text-lg font-semibold">Contact Information</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Ciudad */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Ciudad
              </label>
              <input
                name="ciudad"
                value={userData.ciudad}
                onChange={handleChange}
                placeholder="Ciudad"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Estado */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Estado
              </label>
              <input
                name="estado"
                value={userData.estado}
                onChange={handleChange}
                placeholder="Estado"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Calle */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Calle
              </label>
              <input
                name="calle"
                value={userData.calle}
                onChange={handleChange}
                placeholder="Calle"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Colonia */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Colonia
              </label>
              <input
                name="colonia"
                value={userData.colonia}
                onChange={handleChange}
                placeholder="Colonia"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Código Postal */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Código Postal
              </label>
              <input
                name="codigoPostal"
                value={userData.codigoPostal}
                onChange={handleChange}
                placeholder="Código Postal"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          <div className="flex justify-between space-x-3">
            <button
              type="button"
              onClick={prevStep}
              className="px-5 py-2 bg-gray-300 text-gray-600 rounded-full hover:bg-gray-400"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Step 3: Family and Social Habits */}
      {step === 3 && (
        <>
          <h2 className="text-lg font-semibold">Family and Social Habits</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Nombre Familiar
              </label>
              <input
                name="nombreFamiliar"
                value={userData.nombreFamiliar}
                onChange={handleChange}
                placeholder="Nombre Familiar"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Phone Familiar
              </label>
              <input
                name="phoneFamiliar"
                value={userData.phoneFamiliar}
                onChange={handleChange}
                placeholder="Phone Familiar"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Email Familiar
              </label>
              <input
                name="emailFamiliar"
                value={userData.emailFamiliar}
                onChange={handleChange}
                placeholder="Email Familiar"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          <div className="flex justify-between space-x-3">
            <button
              type="button"
              onClick={prevStep}
              className="px-5 py-2 bg-gray-300 text-gray-600 rounded-full hover:bg-gray-400"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Step 4: Health Information */}
      {step === 4 && (
        <>
          <h2 className="text-lg font-semibold">
            Health and Habits Information
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Tabaco */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Tabaco
              </label>
              <input
                name="tabaco"
                value={userData.tabaco}
                onChange={handleChange}
                placeholder="Consumo de Tabaco"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Alcohol */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Alcohol
              </label>
              <input
                name="alcohol"
                value={userData.alcohol}
                onChange={handleChange}
                placeholder="Consumo de Alcohol"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Drogas */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Drogas
              </label>
              <input
                name="drogas"
                value={userData.drogas}
                onChange={handleChange}
                placeholder="Consumo de Drogas"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Actividad */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Actividad Física
              </label>
              <input
                name="actividad"
                value={userData.actividad}
                onChange={handleChange}
                placeholder="Actividad Física"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Enfermedad Crónica */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Enfermedad Crónica
              </label>
              <input
                name="enfermedadCronica"
                value={userData.enfermedadCronica}
                onChange={handleChange}
                placeholder="Enfermedad Crónica"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Alergias */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Alergias
              </label>
              <input
                name="alergias"
                value={userData.alergias}
                onChange={handleChange}
                placeholder="Alergias"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Cirugías */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Cirugías
              </label>
              <input
                name="cirugias"
                value={userData.cirugias}
                onChange={handleChange}
                placeholder="Cirugías"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Trastornos */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Trastornos
              </label>
              <input
                name="trastornos"
                value={userData.trastornos}
                onChange={handleChange}
                placeholder="Trastornos"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Cáncer */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Cáncer
              </label>
              <input
                name="cancer"
                value={userData.cancer}
                onChange={handleChange}
                placeholder="Cáncer"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Hipertensión */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Hipertensión
              </label>
              <input
                name="hipertension"
                value={userData.hipertension}
                onChange={handleChange}
                placeholder="Hipertensión"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Diabetes */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Diabetes
              </label>
              <input
                name="diabetes"
                value={userData.diabetes}
                onChange={handleChange}
                placeholder="Diabetes"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Cáncer Familiar */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Cáncer Familiar
              </label>
              <input
                name="cancerF"
                value={userData.cancerF}
                onChange={handleChange}
                placeholder="Cáncer Familiar"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Asma */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Asma
              </label>
              <input
                name="asma"
                value={userData.asma}
                onChange={handleChange}
                placeholder="Asma"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            {/* Enfermedad Neurológica */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Enfermedad Neurológica
              </label>
              <input
                name="enfermedadN"
                value={userData.enfermedadN}
                onChange={handleChange}
                placeholder="Enfermedad Neurológica"
                className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          <div className="flex justify-between space-x-3">
            <button
              type="button"
              onClick={prevStep}
              className="px-5 py-2 bg-gray-300 text-gray-600 rounded-full hover:bg-gray-400"
            >
              Previous
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </>
      )}

      {/* Progress Bar */}
      <div className="mt-8">
        <div className="w-full bg-gray-300 rounded-full h-2.5">
          <div
            className={`bg-blue-500 h-2.5 rounded-full`}
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">{`Step ${step} of 4`}</p>
      </div>
    </form>
  );
};

export default UserForm;