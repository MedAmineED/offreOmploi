// const express = require("express");
import express, {Express, Request, Response } from "express";
import User from "./dbConfig/models/User";
import { Connection } from "./dbConfig/dbConnexion";
import entrepriseRouter from "./router/entrepriseRouter";
import offreRouter from "./router/offreRouter";
import demandeEmploiRouter from "./router/demandeEmploiRouter";
import authRouter from "./router/authRouter";
import userRouter from "./router/userRouter";
const cors = require("cors");

// const {connexion} = require("./dbConfig/dbConnexion");
const app : Express  = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended : true}));




app.use(userRouter);
app.use(entrepriseRouter);
app.use(offreRouter);
app.use(demandeEmploiRouter);
app.use("/api/auth", authRouter);


// Cors Policy
app.use(cors({ 
    origin: "http://localhost:3000"
  }));

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () : Promise<void> => {
    console.log(`Server is running on port ${PORT}`);
    await Connection();
});