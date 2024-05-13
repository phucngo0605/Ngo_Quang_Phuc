const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./db/dbConnect");
const UserRouter = require("./routes/UserRouter");
const PhotoRouter = require("./routes/PhotoRouter");


dbConnect();

app.use(cors());
app.use(express.json());
app.use("/user", UserRouter);
app.use("/photo", PhotoRouter);

app.get("/", (request, response) => {
  response.send("Hello from photo-sharing app API!" );
});

app.listen(8082, () => {
  console.log("server listening on port 8082");
});
