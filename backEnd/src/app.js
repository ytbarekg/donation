import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import userRoute from "./routes/userRoute.js"
import donationRoute from "./routes/donationRoute.js"
import errorHandler from "./middlewares/errorHandler.js"
import NotFoundError from "./errors/NotFoundError.js"
// import grantRoute from "./routes/grantRoute.js"
// import beneficiaryRoute from "./routes/beneficiaryRoute.js"

dotenv.config()

const app = express();

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true,useUnifiedTopology: true})
.catch(error => {
    console.log(error)
    process.exit(1);
})

app.use(express.json());
app.use(cors());

app.use("/api/users/", userRoute);
app.use("/api/donations/", donationRoute);
app.use("/api/grants/", grantRoute);
app.use("api/beneficiaries/", beneficiaryRoute);

app.use("*", (req, res, next) => {
    next(new NotFoundError("path"));
})

app.use(errorHandler.allErrorHandler);

app.listen(process.env.SERVER_PORT, () => {
    console.log("App started on port: " + process.env.SERVER_PORT);
})