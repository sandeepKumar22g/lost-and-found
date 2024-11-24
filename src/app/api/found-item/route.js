import { NextResponse } from "next/server";
import lostItem from "@/models/lost-item";
import connectMongo from "@/lib/mongodb";

export async function POST(request) {
  try {
    const { title, description, location, date, contact } = await request.json();
    await connectMongo();

    const result = await lostItem.create({ title, description, location, date, contact });
    return NextResponse.json({ message: "Found item posted successfully!", id: result.insertedId });
  } catch (error) {
    return NextResponse.json({ error: "Failed to post found item" }, { status: 500 });
  }
}
