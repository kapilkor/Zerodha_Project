import mongoose from "mongoose";
import { OrdersSchema } from "../schema/OrdersSchema.js";

const OrderModel = mongoose.model("order", OrdersSchema);

export default OrderModel;