// import User from "./models/User";

import { Sequelize } from "sequelize-typescript";
import User from "./models/User";
import Entreprise from "./models/Entreprise";
import Admin from "./models/Admin";
import Offre from "./models/Offre";
import DemandeEmploi from "./models/DemandeEmploi";

// const { Seq } = require('sequelize');
// const User = require('../models/User');
// const userModel = require('../models/User');
require('dotenv').config();
const sequelizeConnexion = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    models: [User, Entreprise, Admin, Offre, DemandeEmploi],
  });


export const Connection = async () : Promise<void> => {
    try {
      await sequelizeConnexion.authenticate();
      console.log('Connection has been established successfully.');
      await sequelizeConnexion.sync({ alter: true }); // Sync models
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };

export default sequelizeConnexion;




  