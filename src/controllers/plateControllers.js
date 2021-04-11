import mongoose from 'mongoose';
import { OrderSchema } from '../models/plateModel'

const Order = mongoose.model('Orders', OrderSchema);

export const addNewOrder = (req,res) => {
  let newOrder = new Order(req.body);
  newOrder.save((err, order) => {
    if (err) {
      res.send(err)
    }
    console.log(order);
    res.json(order)
  })
}

export const getOrders = (req,res) => {
  Order.find({}, (err, order) => {
    if (err) {
      res.send(err)
    }
    res.json(order)
  })
}

export const getOrdersForOrderID = (req,res) => {
  console.log(req.params);
  Order.findById(req.params.orderID, (err, order) => {
    if (err) {
      res.send(err)
    }
    res.json(order)
  })
}

export const getOrdersForRestaurantName = (req,res) => {
  Order.find({restaurantName: req.params.restaurantName}, (err, order) => {
    if (err) {
      res.send(err)
    }
    res.json(order)
  })

}