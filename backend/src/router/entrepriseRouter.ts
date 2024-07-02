import express, { Router } from "express";
import { createEntreprise, deleteEntreprise, getAllEntreprises, getEntrepriseById, updateEntreprise } from "../controllers/entrepriseController";

const entrepriseRouter: Router = express.Router();

// Get entreprise list
entrepriseRouter.get("/api/entreprise", getAllEntreprises);

// Get entreprise by id
entrepriseRouter.get("/api/entreprise/:id", getEntrepriseById);

// Create a new entreprise
entrepriseRouter.post("/api/entreprise", createEntreprise);

// Update entreprise
entrepriseRouter.put("/api/entreprise/:id", updateEntreprise);

// Delete entreprise
entrepriseRouter.delete("/api/entreprise/:id", deleteEntreprise);

export default entrepriseRouter;