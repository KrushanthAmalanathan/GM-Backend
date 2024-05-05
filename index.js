import express from "express";
import { PORT, MONGO_URI } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
//enter your imports under your name

//Kru
import rmRequestRoute from './routes/rmRequestRoute.js';//kru
import smShopRoute from './routes/smShopRoute.js';//kru
import fbFitnessRoute from './routes/fbFitnessRoute.js';//ashvi
import mdFitnessRoute from './routes/mdFitnessRoute.js';//aj
import atFitnessRoute from './routes/atFitnessRoute.js';//aj
import ptFitnessRoute from './routes/ptFitnessRoute.js';//harshi
import csFitnessRoute from './routes/csFitnessRoute.js';//titus





//connection
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Connection Successful!");
});

//enter your routes 


//kru
app.use('/rmRequests', rmRequestRoute);
app.use('/smShops', smShopRoute);
app.use('/fbFitnesss', fbFitnessRoute);
app.use('/mdFitnesss', mdFitnessRoute);
app.use('/atFitnesss', atFitnessRoute);
app.use('/ptFitnesss', ptFitnessRoute);
app.use('/csFitnesss', csFitnessRoute);





mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Error: ", error);                                    // Logging MongoDB connection error
  });