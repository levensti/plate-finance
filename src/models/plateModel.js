import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const OrderSchema = new Schema({
  restaurantID: {
    type: String,
    required: "ID"
  },
  restaurantName: {
    type: String,
    required: "Name of restaurant"
  },
  orderTotalCost: {
    type: Number,
    required: "Enter money the order cost"
  },
  menuItems: {
    type: String,
    required: "Menu items separated by comma"
  },
  comment: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})