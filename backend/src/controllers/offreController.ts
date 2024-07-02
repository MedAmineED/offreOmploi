import { Request, Response } from "express";
import Offre from "../dbConfig/models/Offre";

// Create offre
export const createOffre = async (req: Request, res: Response): Promise<void> => {
    try {
        const newOffre = await Offre.create(req.body);
        res.status(201).json(newOffre);
    } catch (error) {
        console.error("Error creating offre:", error);
        res.status(500).json({ error: "Failed to create offre" });
    }
};

// Get all offres
export const getAllOffres = async (req: Request, res: Response): Promise<void> => {
    try {
        const offres = await Offre.findAll();
        res.status(200).json(offres);
    } catch (error) {
        console.error("Error fetching offres:", error);
        res.status(500).json({ error: "Failed to fetch offres" });
    }
};

// Get offre by ID
export const getOffreById = async (req: Request, res: Response): Promise<void> => {
    const offreId: string = req.params.id;

    try {
        const offre = await Offre.findByPk(offreId);

        if (!offre) {
            res.status(404).json({ error: "Offre not found" });
            return;
        }

        res.status(200).json(offre);
    } catch (error) {
        console.error("Error fetching offre:", error);
        res.status(500).json({ error: "Failed to fetch offre" });
    }
};

// Update offre
export const updateOffre = async (req: Request, res: Response): Promise<void> => {
    const offreId: string = req.params.id;

    try {
        const offre = await Offre.findByPk(offreId);

        if (!offre) {
            res.status(404).json({ error: "Offre not found" });
            return;
        }

        await offre.update(req.body);

        res.status(200).json(offre);
    } catch (error) {
        console.error("Error updating offre:", error);
        res.status(500).json({ error: "Failed to update offre" });
    }
};

// Delete offre
export const deleteOffre = async (req: Request, res: Response): Promise<void> => {
    const offreId: string = req.params.id;

    try {
        const offre = await Offre.findByPk(offreId);

        if (!offre) {
            res.status(404).json({ error: "Offre not found" });
            return;
        }

        await offre.destroy();

        res.status(204).send(); // No content response
    } catch (error) {
        console.error("Error deleting offre:", error);
        res.status(500).json({ error: "Failed to delete offre" });
    }
};
