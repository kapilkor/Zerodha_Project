import mongoose from "mongoose";
import { PositionsSchema } from "../schema/PositionsSchema.js";

const PositionModel = mongoose.model("position", PositionsSchema);

export default PositionModel;