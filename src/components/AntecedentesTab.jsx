// src/app/patients/[id]/view/components/MaintenanceTab.tsx
const AntecedentesTab = ({ patient }) => {
  return (
    <div>
      {/* Health and Habits Info Section */}
      <div>
        <h3 className="font-semibold text-lg">Health and Habits Info</h3>
        <p>
          <strong>Tabaco:</strong> {patient.tabaco}
        </p>
        <p>
          <strong>Alcohol:</strong> {patient.alcohol}
        </p>
        <p>
          <strong>Drogas:</strong> {patient.drogas}
        </p>
        <p>
          <strong>Actividad Física:</strong> {patient.actividad}
        </p>
        <p>
          <strong>Enfermedad Crónica:</strong> {patient.enfermedadCronica}
        </p>
        <p>
          <strong>Alergias:</strong> {patient.alergias}
        </p>
        <p>
          <strong>Cirugías:</strong> {patient.cirugias}
        </p>
        <p>
          <strong>Trastornos:</strong> {patient.trastornos}
        </p>
        <p>
          <strong>Cáncer:</strong> {patient.cancer}
        </p>
        <p>
          <strong>Hipertensión:</strong> {patient.hipertension}
        </p>
        <p>
          <strong>Diabetes:</strong> {patient.diabetes}
        </p>
        <p>
          <strong>Cáncer Familiar:</strong> {patient.cancerF}
        </p>
        <p>
          <strong>Asma:</strong> {patient.asma}
        </p>
        <p>
          <strong>Enfermedad Neurológica:</strong> {patient.enfermedadN}
        </p>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default AntecedentesTab;
