import { get } from 'mongoose';
import {addNewOrder, getOrders, getOrdersForOrderID, getOrdersForRestaurantName} from '../controllers/plateControllers';


const routes = (app) => {
    //create route for donations
    app.route('/orders')
      //create get request
      .get(getOrders)
      //create post request
      .post(addNewOrder)

    app.route('/orders/:orderID')
      .get(getOrdersForOrderID)
      //create put request
      .put((req, res) =>
      res.send('PUT request successful!'))
      //create delete request
      .delete((req, res) =>
      res.send('DELETE request successful'))
    app.route('/orders/restaurant/:restaurantName')
      .get(getOrdersForRestaurantName)
  }
  // export it!
  export default routes;