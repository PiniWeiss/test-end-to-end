import terroristRoute from './routes/terroristsRoute.js'
import scoreRoute from './routes/scoreRoute.js'
import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json({ limit: '50kb' }));

app.use("/api", terroristRoute);
app.use("/api", scoreRoute);


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Somthing went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(3000, () => {
  console.log("Running on port 8000...");
});
