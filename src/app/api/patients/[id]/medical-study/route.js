import connection from "../../../../../../libs/connection";
import MedicalForm from "../../../../../models/medicalStudy";

// Handle PUT request - Update or create a patient record
export async function PUT(req, { params }) {
  const { id } = params;

  try {
    // Connect to the database
    await connection();

    // Parse the request body
    const data = await req.json();

    // Validate required fields
    const requiredFields = ["nombre", "edad", "peso", "altura"];
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      return new Response(
        JSON.stringify({
          message: `Missing required fields: ${missingFields.join(", ")}`,
        }),
        { status: 400 }
      );
    }

    // Additional validation (optional, adjust as needed)
    if (data.edad < 0) {
      return new Response(
        JSON.stringify({ message: "Age must be a positive number" }),
        { status: 400 }
      );
    }
    if (data.peso <= 0 || data.altura <= 0) {
      return new Response(
        JSON.stringify({
          message: "Weight and height must be positive numbers",
        }),
        { status: 400 }
      );
    }

    // Find the patient by ID and update or create a new record if not found
    const updatedPatient = await MedicalForm.findByIdAndUpdate(
      id,
      { $set: data }, // Update with new data
      { new: true, upsert: true, runValidators: true } // Create if not found
    );

    // Return the updated patient record
    return new Response(
      JSON.stringify({
        message: "Patient updated successfully",
        updatedPatient,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    // Handle errors and return a 500 status
    console.error("Error updating patient:", error);
    return new Response(
      JSON.stringify({
        message: "Error updating patient",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
