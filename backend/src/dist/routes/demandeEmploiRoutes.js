"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const demandeEmploiController_1 = require("../controllers/demandeEmploiController");
const demandeEmploiRoutes = express_1.default.Router();
// Get demandeEmploi list
demandeEmploiRoutes.get("/api/demandeemploi", demandeEmploiController_1.getAllDemandeEmplois);
// Get demandeEmploi by id
demandeEmploiRoutes.get("/api/demandeemploi/:id", demandeEmploiController_1.getDemandeEmploiById);
// Create a new demandeEmploi
demandeEmploiRoutes.post("/api/demandeemploi", demandeEmploiController_1.createDemandeEmploi);
// Update demandeEmploi
demandeEmploiRoutes.put("/api/demandeemploi/:id", demandeEmploiController_1.updateDemandeEmploi);
// Delete demandeEmploi
demandeEmploiRoutes.delete("/api/demandeemploi/:id", demandeEmploiController_1.deleteDemandeEmploi);
exports.default = demandeEmploiRoutes;
