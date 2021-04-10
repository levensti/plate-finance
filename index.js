import express from 'express';
import routes from './src/routes/plateRoutes';
import mongoose from 'mongoose';

const app = express();

const PORT = 4000;

// get request: http://localhost:4000/
app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
)
app.listen(PORT, () =>
console.log(`Your server is running on port ${PORT}`))

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/platefinancemongodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
//bodyparser setup
app.use(express.urlencoded());
app.use(express.json());

routes(app);