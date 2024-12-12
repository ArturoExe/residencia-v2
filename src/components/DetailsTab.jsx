const DetailsTab = ({ patient }) => {
  return (
    <div>
      {/* User Info Section */}
      <div>
        <h3 className="font-semibold text-lg">Información de usuario</h3>
        <p>
          <strong>Nombre:</strong> {patient.name}
        </p>
        <p>
          <strong>Apellido Paterno:</strong> {patient.apellidoPaterno}
        </p>
        <p>
          <strong>Apellido Materno:</strong> {patient.apellidoMaterno}
        </p>
        <p>
          <strong>Fecha de Nacimiento:</strong>{" "}
          {new Date(patient.fechaDeNacimiento).toLocaleDateString()}
        </p>
        <p>
          <strong>Género:</strong> {patient.genero}
        </p>
        <p>
          <strong>Lugar de Nacimiento:</strong> {patient.lugarDeNacimiento}
        </p>
      </div>
      <hr className="my-4" />

      {/* Contact Info Section */}
      <div>
        <h3 className="font-semibold text-lg">Información de contacto</h3>
        <p>
          <strong>Teléfono:</strong> {patient.phone}
        </p>
        <p>
          <strong>Email:</strong> {patient.email}
        </p>
        <p>
          <strong>Ciudad:</strong> {patient.ciudad}
        </p>
        <p>
          <strong>Estado:</strong> {patient.estado}
        </p>
        <p>
          <strong>Calle:</strong> {patient.calle}
        </p>
        <p>
          <strong>Colonia:</strong> {patient.colonia}
        </p>
        <p>
          <strong>Código Postal:</strong> {patient.codigoPostal}
        </p>
      </div>
      <hr className="my-4" />

      {/* Additional Info Section */}
      <div>
        <h3 className="font-semibold text-lg">Información adicional</h3>
        <p>
          <strong>Estatura:</strong> {patient.estatura}
        </p>
        <p>
          <strong>Peso:</strong> {patient.peso}
        </p>
        <p>
          <strong>CURP:</strong> {patient.curp}
        </p>
        <p>
          <strong>Estado Civil:</strong> {patient.estadoCivil}
        </p>
        <p>
          <strong>Educación:</strong> {patient.educacion}
        </p>
        <p>
          <strong>Ocupación:</strong> {patient.ocupacion}
        </p>
      </div>
    </div>
  );
};

export default DetailsTab;