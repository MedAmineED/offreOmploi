import { Request, Response } from "express";
import DemandeEmploi from "../dbConfig/models/DemandeEmploi";

// Create demandeEmploi
export const createDemandeEmploi = async (req: Request, res: Response): Promise<void> => {
    try {
        const newDemandeEmploi = await DemandeEmploi.create(req.body);
        res.status(201).json(newDemandeEmploi);
    } catch (error) {
        console.error("Error creating demandeEmploi:", error);
        res.status(500).json({ error: "Failed to create demandeEmploi" });
    }
};

// Get all demandeEmplois
export const getAllDemandeEmplois = async (req: Request, res: Response): Promise<void> => {
    try {
        const demandeEmplois = await DemandeEmploi.findAll();
        res.status(200).json(demandeEmplois);
    } catch (error) {
        console.error("Error fetching demandeEmplois:", error);
        res.status(500).json({ error: "Failed to fetch demandeEmplois" });
    }
};

// Get demandeEmploi by ID
export const getDemandeEmploiById = async (req: Request, res: Response): Promise<void> => {
    const demandeEmploiId: string = req.params.id;

    try {
        const demandeEmploi = await DemandeEmploi.findByPk(demandeEmploiId);

        if (!demandeEmploi) {
            res.status(404).json({ error: "DemandeEmploi not found" });
            return;
        }

        res.status(200).json(demandeEmploi);
    } catch (error) {
        console.error("Error fetching demandeEmploi:", error);
        res.status(500).json({ error: "Failed to fetch demandeEmploi" });
    }
};

// Update demandeEmploi
export const updateDemandeEmploi = async (req: Request, res: Response): Promise<void> => {
    const demandeEmploiId: string = req.params.id;

    try {
        const demandeEmploi = await DemandeEmploi.findByPk(demandeEmploiId);

        if (!demandeEmploi) {
            res.status(404).json({ error: "DemandeEmploi not found" });
            return;
        }

        await demandeEmploi.update(req.body);

        res.status(200).json(demandeEmploi);
    } catch (error) {
        console.error("Error updating demandeEmploi:", error);
        res.status(500).json({ error: "Failed to update demandeEmploi" });
    }
};

// Delete demandeEmploi
export const deleteDemandeEmploi = async (req: Request, res: Response): Promise<void> => {
    const demandeEmploiId: string = req.params.id;

    try {
        const demandeEmploi = await DemandeEmploi.findByPk(demandeEmploiId);

        if (!demandeEmploi) {
            res.status(404).json({ error: "DemandeEmploi not found" });
            return;
        }

        await demandeEmploi.destroy();

        res.status(204).send(); // No content response
    } catch (error) {
        console.error("Error deleting demandeEmploi:", error);
        res.status(500).json({ error: "Failed to delete demandeEmploi" });
    }
};
