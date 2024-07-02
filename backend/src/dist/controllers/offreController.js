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
exports.deleteOffre = exports.updateOffre = exports.getOffreById = exports.getAllOffres = exports.createOffre = void 0;
const Offre_1 = __importDefault(require("../dbConfig/models/Offre"));
// Create offre
const createOffre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOffre = yield Offre_1.default.create(req.body);
        res.status(201).json(newOffre);
    }
    catch (error) {
        console.error("Error creating offre:", error);
        res.status(500).json({ error: "Failed to create offre" });
    }
});
exports.createOffre = createOffre;
// Get all offres
const getAllOffres = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const offres = yield Offre_1.default.findAll();
        res.status(200).json(offres);
    }
    catch (error) {
        console.error("Error fetching offres:", error);
        res.status(500).json({ error: "Failed to fetch offres" });
    }
});
exports.getAllOffres = getAllOffres;
// Get offre by ID
const getOffreById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const offreId = req.params.id;
    try {
        const offre = yield Offre_1.default.findByPk(offreId);
        if (!offre) {
            res.status(404).json({ error: "Offre not found" });
            return;
        }
        res.status(200).json(offre);
    }
    catch (error) {
        console.error("Error fetching offre:", error);
        res.status(500).json({ error: "Failed to fetch offre" });
    }
});
exports.getOffreById = getOffreById;
// Update offre
const updateOffre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const offreId = req.params.id;
    try {
        const offre = yield Offre_1.default.findByPk(offreId);
        if (!offre) {
            res.status(404).json({ error: "Offre not found" });
            return;
        }
        yield offre.update(req.body);
        res.status(200).json(offre);
    }
    catch (error) {
        console.error("Error updating offre:", error);
        res.status(500).json({ error: "Failed to update offre" });
    }
});
exports.updateOffre = updateOffre;
// Delete offre
const deleteOffre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const offreId = req.params.id;
    try {
        const offre = yield Offre_1.default.findByPk(offreId);
        if (!offre) {
            res.status(404).json({ error: "Offre not found" });
            return;
        }
        yield offre.destroy();
        res.status(204).send(); // No content response
    }
    catch (error) {
        console.error("Error deleting offre:", error);
        res.status(500).json({ error: "Failed to delete offre" });
    }
});
exports.deleteOffre = deleteOffre;
