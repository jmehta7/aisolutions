import mongoose, { Schema } from "mongoose";

const leadSchema = new Schema(
  {
    name: String,
    website: String,
    project: String,
    email: String,
    reason: String,
    decision: String,
    is_budget: String,
  },
  {
    timestamps: true,
  }
);

// Ensure the model is only created once
const leadDetail = mongoose.models.lead || mongoose.model("lead", leadSchema);

export default leadDetail;
