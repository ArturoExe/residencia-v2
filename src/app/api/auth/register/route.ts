import { NextResponse } from "next/server";
import MedicalStaff from "../../../../models/medicalStaff";
import connection from "../../../../../libs/connection";

export async function POST(request) {
  try {
    await connection();

    const { role, name, email, password, id } = await request.json();

    if (!role || !name || !email || !password || !id) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const existingUser = await MedicalStaff.findOne({
      $or: [{ email }, { id }],
    });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email or ID already exists." },
        { status: 400 }
      );
    }

    const newUser = new MedicalStaff({
      role,
      name,
      email,
      password, // The pre-save hook will hash this password
      id,
    });

    await newUser.save();

    return NextResponse.json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Registration Error:", error);
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "Duplicate entry detected." },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
