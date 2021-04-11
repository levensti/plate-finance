import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const OrderSchema = new Schema({
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

const storageTypes = {
  FRIDGE : "FRIDGE",
  FREEZER : "FREEZER",
  ROOM : "ROOM"
}

export const InventorySchema = new Schema({
  restaurantName: {
    type: String,
    required: "Restaurant name."
  },
  itemName: {
    type: String,
    required: "Item name"
  },
  price: {
    type: Number,
    required: "Item price in dollars"
  },
  count: {
    type: Number,
    required: "Number of items"
  },
  dimensions: {
    type: String,
    required: "dimensions in format: length x width x height all in meters. Example: 0.3x0.3x0.5"
  },
  storageType: {
    type: storageTypes,
    required: "Storage Type"
  },
  perishTime: {
    type: Number,
    required: "Perish Time in days"
  }
})