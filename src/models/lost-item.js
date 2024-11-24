// models/LostItem.js
import mongoose from "mongoose";

const LostItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

export default mongoose.models.LostItem || mongoose.model("LostItem", LostItemSchema);
