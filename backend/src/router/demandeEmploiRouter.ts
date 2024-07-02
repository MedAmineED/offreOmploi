import express, { Router } from "express";
import { createDemandeEmploi, deleteDemandeEmploi, getAllDemandeEmplois, getDemandeEmploiById, updateDemandeEmploi } from "../controllers/demandeEmploiController";

const demandeEmploiRouter: Router = express.Router();

// Get demandeEmploi list
demandeEmploiRouter.get("/api/demandeemploi", getAllDemandeEmplois);

// Get demandeEmploi by id
demandeEmploiRouter.get("/api/demandeemploi/:id", getDemandeEmploiById);

// Create a new demandeEmploi
demandeEmploiRouter.post("/api/demandeemploi", createDemandeEmploi);

// Update demandeEmploi
demandeEmploiRouter.put("/api/demandeemploi/:id", updateDemandeEmploi);

// Delete demandeEmploi
demandeEmploiRouter.delete("/api/demandeemploi/:id", deleteDemandeEmploi);

export default demandeEmploiRouter;
