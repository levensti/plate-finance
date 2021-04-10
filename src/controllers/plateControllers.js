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