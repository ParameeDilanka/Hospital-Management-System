import 'dotenv/config';
import express from "express";
import cors from "cors";
import { connect } from "./utils/database.connection";
import { logger } from './utils/logger';

const app = express();
const PORT = process.env.PORT || "8070";

app.use(cors());
app.use(express.json({limit: "20mb" }));


app.listen(PORT, () => {
    logger('info',`🚀 Server is up and running on PORT ${PORT}`);
    connect();
});

app.get("/", (req, res, next) => {
    res.send("<h2>🩺 Hospital Management System API</h2>");
    next();
});


const pharmacyItemsRouter = require("./api/routes/pharmacy_items.routes");
app.use("/pharmacyItem", pharmacyItemsRouter);

const pharmacyStockRouter = require("./api/routes/pharmacy_stock.routes");
app.use("/pharmacyStock", pharmacyStockRouter);

const pharmacySaleRouter = require("./api/routes/pharmacy_sales.routes");
app.use("/pharmacySale", pharmacySaleRouter);



const staffRouter = require("./api/routes/staffs");
app.use("/staff", staffRouter);

 const pharmacistRouter = require("./api/routes/pharmacist");
app.use("/pharmacist", pharmacistRouter);

 const receptionistRouter = require("./api/routes/receptionist");
app.use("/receptionist", receptionistRouter);


const appointmentRouter = require("./api/routes/appointment");
app.use("/appointments", appointmentRouter);


const registerRouter = require("./api/routes/register.routes");
app.use("/register", registerRouter);
const admitRouter = require("./api/routes/Admit.routes");
app.use("/Admit", admitRouter);




