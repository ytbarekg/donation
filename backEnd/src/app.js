import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import userRoute from "./routes/userRoute.js"
import donationRoute from "./routes/donationRoute.js"

dotenv.config()

const app = express();

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true,useUnifiedTopology: true})
.catch(error => {
    console.log(error)
    process.exit(1);
})

app.use(express.json());

app.use("/api/users/", userRoute);
app.use("/api/donations/", donationRoute);

app.use((err, req, res, next) => {
    console.log(err.stack);
    const response = {
        error: err.message,
        path: req.path,
        timestamp: new Date()
    }
    let {statusCode} = err;
    if(!statusCode) {
        statusCode = 500;
    }
    res.status(statusCode).json(response);
})

app.listen(process.env.SERVER_PORT, () => {
    console.log("App started on port: " + process.env.SERVER_PORT);
})