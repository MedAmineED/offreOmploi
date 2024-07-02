"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const offreController_1 = require("../controllers/offreController");
const offreRouter = express_1.default.Router();
// Get offre list
offreRouter.get("/api/offre", offreController_1.getAllOffres);
// Get offre by id
offreRouter.get("/api/offre/:id", offreController_1.getOffreById);
// Create a new offre
offreRouter.post("/api/offre", offreController_1.createOffre);
// Update offre
offreRouter.put("/api/offre/:id", offreController_1.updateOffre);
// Delete offre
offreRouter.delete("/api/offre/:id", offreController_1.deleteOffre);
exports.default = offreRouter;
