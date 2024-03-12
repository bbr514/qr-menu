import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connection } from "./db/connection.js";
import router from "./routes/foodRoutes.js";

dotenv.config();
const app = express();
const port=process.env.PORT;

try {
  connection();
} catch (error) {
  console.log("Error: ", error);
}

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use("/api", router);


app.listen(process.env.PORT ||3000, () => {
  console.log(
    `Server ${process.env.PORT} adresinden çalışmaya başladı.http://localhost:${process.env.PORT}/`
  );

  //bu sayede sürekli portu değiştirmeye gerek kalmıyor
});
export default connection;