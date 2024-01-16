/**
 * Entry Point for the web api application
 */

import Express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config({ path: '.env' });

const app = Express();
app.use(Express.json({
    limit:"1mb"
}));
app.use(cookieParser());
app.use(helmet());
app.use(cors({
    credentials:true,
    origin:process.env.PORTAL_URL
}));


app.listen(process.env.PROD_PORT, () => {
    console.log(`your application is running on port ${process.env.PORT}`);
});