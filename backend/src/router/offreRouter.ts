import express, { Router } from "express";
import { createOffre, deleteOffre, getAllOffres, getOffreById, updateOffre } from "../controllers/offreController";

const offreRouter: Router = express.Router();

// Get offre list
offreRouter.get("/api/offre", getAllOffres);

// Get offre by id
offreRouter.get("/api/offre/:id", getOffreById);

// Create a new offre
offreRouter.post("/api/offre", createOffre);

// Update offre
offreRouter.put("/api/offre/:id", updateOffre);

// Delete offre
offreRouter.delete("/api/offre/:id", deleteOffre);

export default offreRouter;