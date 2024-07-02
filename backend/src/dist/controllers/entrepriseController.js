"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEntreprise = exports.updateEntreprise = exports.getEntrepriseById = exports.getAllEntreprises = exports.createEntreprise = void 0;
const Entreprise_1 = __importDefault(require("../dbConfig/models/Entreprise"));
// Create entreprise
const createEntreprise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEntreprise = yield Entreprise_1.default.create(req.body);
        res.status(201).json(newEntreprise);
    }
    catch (error) {
        console.error("Error creating entreprise:", error);
        res.status(500).json({ error: "Failed to create entreprise" });
    }
});
exports.createEntreprise = createEntreprise;
// Get all entreprises
const getAllEntreprises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entreprises = yield Entreprise_1.default.findAll();
        res.status(200).json(entreprises);
    }
    catch (error) {
        console.error("Error fetching entreprises:", error);
        res.status(500).json({ error: "Failed to fetch entreprises" });
    }
});
exports.getAllEntreprises = getAllEntreprises;
// Get entreprise by ID
const getEntrepriseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const entrepriseId = req.params.id;
    try {
        const entreprise = yield Entreprise_1.default.findByPk(entrepriseId);
        if (!entreprise) {
            res.status(404).json({ error: "Entreprise not found" });
            return;
        }
        res.status(200).json(entreprise);
    }
    catch (error) {
        console.error("Error fetching entreprise:", error);
        res.status(500).json({ error: "Failed to fetch entreprise" });
    }
});
exports.getEntrepriseById = getEntrepriseById;
// Update entreprise
const updateEntreprise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const entrepriseId = req.params.id;
    try {
        const entreprise = yield Entreprise_1.default.findByPk(entrepriseId);
        if (!entreprise) {
            res.status(404).json({ error: "Entreprise not found" });
            return;
        }
        yield entreprise.update(req.body);
        res.status(200).json(entreprise);
    }
    catch (error) {
        console.error("Error updating entreprise:", error);
        res.status(500).json({ error: "Failed to update entreprise" });
    }
});
exports.updateEntreprise = updateEntreprise;
// Delete entreprise
const deleteEntreprise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const entrepriseId = req.params.id;
    try {
        const entreprise = yield Entreprise_1.default.findByPk(entrepriseId);
        if (!entreprise) {
            res.status(404).json({ error: "Entreprise not found" });
            return;
        }
        yield entreprise.destroy();
        res.status(204).send(); // No content response
    }
    catch (error) {
        console.error("Error deleting entreprise:", error);
        res.status(500).json({ error: "Failed to delete entreprise" });
    }
});
exports.deleteEntreprise = deleteEntreprise;
