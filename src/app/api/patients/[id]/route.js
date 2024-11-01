import connection from "../../../../../libs/connection";
import Patient from "../../../../models/patients";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    // Connect to the database
    await connection();

    // Find the patient by id
    const patient = await Patient.findById(id);

    // Return the patient data if found
    if (!patient) {
      return new Response(JSON.stringify({ message: "Patient not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(patient), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching patient data", error }),
      {
        status: 500,
      }
    );
  }
}

// Handle DELETE request - Delete a patient by ID
export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    await connection();
    const deletedPatient = await Patient.findByIdAndDelete(id);

    if (!deletedPatient) {
      return new Response(JSON.stringify({ message: "Patient not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Patient deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting patient:", error);
    return new Response(
      JSON.stringify({ message: "Error deleting patient", error }),
      { status: 500 }
    );
  }
}

// Handle PUT request - Update a patient by ID
export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json(); // Assuming the request body contains the updated patient data

  try {
    await connection();
    const updatedPatient = await Patient.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedPatient) {
      return new Response(JSON.stringify({ message: "Patient not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(updatedPatient), { status: 200 });
  } catch (error) {
    console.error("Error updating patient:", error);
    return new Response(
      JSON.stringify({ message: "Error updating patient", error }),
      { status: 500 }
    );
  }
}
