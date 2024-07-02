"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const entrepriseController_1 = require("../controllers/entrepriseController");
const entrepriseRouter = express_1.default.Router();
// Get entreprise list
entrepriseRouter.get("/api/entreprise", entrepriseController_1.getAllEntreprises);
// Get entreprise by id
entrepriseRouter.get("/api/entreprise/:id", entrepriseController_1.getEntrepriseById);
// Create a new entreprise
entrepriseRouter.post("/api/entreprise", entrepriseController_1.createEntreprise);
// Update entreprise
entrepriseRouter.put("/api/entreprise/:id", entrepriseController_1.updateEntreprise);
// Delete entreprise
entrepriseRouter.delete("/api/entreprise/:id", entrepriseController_1.deleteEntreprise);
exports.default = entrepriseRouter;
