import mongoose from "mongoose";
import { HoldingsSchema } from "../schema/HoldingsSchema.js";

const HoldingsModel = mongoose.model("holding", HoldingsSchema);

export default HoldingsModel;