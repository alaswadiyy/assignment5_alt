// import necessary modules
import express from "express";
import dotenv from "dotenv";
import { connect } from "./database/connection.js";
import authRoute from "./routes/auth_route.js";
import postRoute from "./routes/post_route.js";


dotenv.config();


const app = express();
const port = process.env.PORT;


app.use(express.json());


app.use("/", authRoute);
app.use("/posts", postRoute);


connect()
  .then(() => {
    console.log("database successfully connected");
    app.listen(port, () => console.log(`Server running on port: ${port}`));
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });