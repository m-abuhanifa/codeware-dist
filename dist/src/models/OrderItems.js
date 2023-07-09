"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const OrderItemSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});
const OrderItems = mongoose.model("OrderItem", OrderItemSchema);
exports.default = OrderItems;
//# sourceMappingURL=OrderItems.js.map