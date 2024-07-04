import { Request, Response } from "express";
import Entreprise from "../dbConfig/models/Entreprise";






// Create entreprise
//api/entreprise
export const createEntreprise = async (req: Request, res: Response): Promise<void> => {
    try {
        const newEntreprise = await Entreprise.create(req.body);
        res.status(201).json(newEntreprise);
    } catch (error) {
        console.error("Error creating entreprise:", error);
        res.status(500).json({ error: "Failed to create entreprise" });
    }
};




// Get all entreprises
export const getAllEntreprises = async (req: Request, res: Response): Promise<void> => {
    try {
        const entreprises = await Entreprise.findAll();
        res.status(200).json(entreprises);
    } catch (error) {
        console.error("Error fetching entreprises:", error);
        res.status(500).json({ error: "Failed to fetch entreprises" });
    }
};



// Get entreprise by ID
export const getEntrepriseById = async (req: Request, res: Response): Promise<void> => {
    const entrepriseId: string = req.params.id;

    try {
        const entreprise = await Entreprise.findByPk(entrepriseId);

        if (!entreprise) {
            res.status(404).json({ error: "Entreprise not found" });
            return;
        }

        res.status(200).json(entreprise);
    } catch (error) {
        console.error("Error fetching entreprise:", error);
        res.status(500).json({ error: "Failed to fetch entreprise" });
    }
};


// Update entreprise
export const updateEntreprise = async (req: Request, res: Response): Promise<void> => {
    const entrepriseId: string = req.params.id;

    try {
        const entreprise = await Entreprise.findByPk(entrepriseId);

        if (!entreprise) {
            res.status(404).json({ error: "Entreprise not found" });
            return;
        }

        await entreprise.update(req.body);

        res.status(200).json(entreprise);
    } catch (error) {
        console.error("Error updating entreprise:", error);
        res.status(500).json({ error: "Failed to update entreprise" });
    }
};


// Delete entreprise
export const deleteEntreprise = async (req: Request, res: Response): Promise<void> => {
    const entrepriseId: string = req.params.id;

    try {
        const entreprise = await Entreprise.findByPk(entrepriseId);

        if (!entreprise) {
            res.status(404).json({ error: "Entreprise not found" });
            return;
        }

        await entreprise.destroy();

        res.status(204).send(); // No content response
    } catch (error) {
        console.error("Error deleting entreprise:", error);
        res.status(500).json({ error: "Failed to delete entreprise" });
    }
};
