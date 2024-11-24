import { NextResponse } from "next/server";
import lostItem from "@/models/lost-item";
import connectMongo from "@/lib/mongodb";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await connectMongo();

      const matches = await lostItem.find({
        $or: [
          { title: { $regex: title || "", $options: "i" } }, // Case-insensitive match for title
          { description: { $regex: description || "", $options: "i" } }, // Case-insensitive match for description
        ],
      });

    return NextResponse.json(matches);
  } catch (error) {
    return NextResponse.json({ error: "Failed to query lost items", message: error.message }, { status: 500 });
  }
}



