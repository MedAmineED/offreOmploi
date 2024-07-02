"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const offreController_1 = require("../controllers/offreController");
const offreRoutes = express_1.default.Router();
// Get offre list
offreRoutes.get("/api/offre", offreController_1.getAllOffres);
// Get offre by id
offreRoutes.get("/api/offre/:id", offreController_1.getOffreById);
// Create a new offre
offreRoutes.post("/api/offre", offreController_1.createOffre);
// Update offre
offreRoutes.put("/api/offre/:id", offreController_1.updateOffre);
// Delete offre
offreRoutes.delete("/api/offre/:id", offreController_1.deleteOffre);
exports.default = offreRoutes;
