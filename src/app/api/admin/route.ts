import { NextResponse } from "next/server";
import connection from "../../../../libs/connection"; // Ensure this connects to MongoDB
import MedicalStaff from "@/models/medicalStaff"; // Import your schema
import mongoose from "mongoose";

// Fetch all staff
export async function GET() {
  try {
    await connection();

    // Retrieve all staff records
    const staff = await MedicalStaff.find({}).lean(); // Use `lean()` for better performance
    return NextResponse.json({ users: staff }, { status: 200 });
  } catch (error) {
    console.error("Error fetching staff:", error);
    return NextResponse.json(
      { message: "Error fetching staff", error: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    await connection();

    const { id, role, isApproved } = await req.json();

    // Validate and convert `id` to ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const userId = new mongoose.Types.ObjectId(id);

    // Update fields dynamically
    const updateFields = {};
    if (role) updateFields.role = role;
    if (isApproved !== undefined) updateFields.isApproved = isApproved;

    const updatedUser = await MedicalStaff.findByIdAndUpdate(
      userId,
      { $set: updateFields },
      { new: true } // Return updated document
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User updated successfully", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Error updating user", details: error.message },
      { status: 500 }
    );
  }
}

// Delete a staff member
export async function DELETE(req: Request) {
  try {
    await connection();
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    // Delete the staff member
    const deletedStaff = await MedicalStaff.findByIdAndDelete(id);

    if (!deletedStaff) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User deleted successfully", user: deletedStaff },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting staff:", error);
    return NextResponse.json(
      { message: "Error deleting staff", error: error.message },
      { status: 500 }
    );
  }
}
