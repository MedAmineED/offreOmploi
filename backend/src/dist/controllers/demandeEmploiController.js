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
exports.deleteDemandeEmploi = exports.updateDemandeEmploi = exports.getDemandeEmploiById = exports.getAllDemandeEmplois = exports.createDemandeEmploi = void 0;
const DemandeEmploi_1 = __importDefault(require("../dbConfig/models/DemandeEmploi"));
// Create demandeEmploi
const createDemandeEmploi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newDemandeEmploi = yield DemandeEmploi_1.default.create(req.body);
        res.status(201).json(newDemandeEmploi);
    }
    catch (error) {
        console.error("Error creating demandeEmploi:", error);
        res.status(500).json({ error: "Failed to create demandeEmploi" });
    }
});
exports.createDemandeEmploi = createDemandeEmploi;
// Get all demandeEmplois
const getAllDemandeEmplois = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const demandeEmplois = yield DemandeEmploi_1.default.findAll();
        res.status(200).json(demandeEmplois);
    }
    catch (error) {
        console.error("Error fetching demandeEmplois:", error);
        res.status(500).json({ error: "Failed to fetch demandeEmplois" });
    }
});
exports.getAllDemandeEmplois = getAllDemandeEmplois;
// Get demandeEmploi by ID
const getDemandeEmploiById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const demandeEmploiId = req.params.id;
    try {
        const demandeEmploi = yield DemandeEmploi_1.default.findByPk(demandeEmploiId);
        if (!demandeEmploi) {
            res.status(404).json({ error: "DemandeEmploi not found" });
            return;
        }
        res.status(200).json(demandeEmploi);
    }
    catch (error) {
        console.error("Error fetching demandeEmploi:", error);
        res.status(500).json({ error: "Failed to fetch demandeEmploi" });
    }
});
exports.getDemandeEmploiById = getDemandeEmploiById;
// Update demandeEmploi
const updateDemandeEmploi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const demandeEmploiId = req.params.id;
    try {
        const demandeEmploi = yield DemandeEmploi_1.default.findByPk(demandeEmploiId);
        if (!demandeEmploi) {
            res.status(404).json({ error: "DemandeEmploi not found" });
            return;
        }
        yield demandeEmploi.update(req.body);
        res.status(200).json(demandeEmploi);
    }
    catch (error) {
        console.error("Error updating demandeEmploi:", error);
        res.status(500).json({ error: "Failed to update demandeEmploi" });
    }
});
exports.updateDemandeEmploi = updateDemandeEmploi;
// Delete demandeEmploi
const deleteDemandeEmploi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const demandeEmploiId = req.params.id;
    try {
        const demandeEmploi = yield DemandeEmploi_1.default.findByPk(demandeEmploiId);
        if (!demandeEmploi) {
            res.status(404).json({ error: "DemandeEmploi not found" });
            return;
        }
        yield demandeEmploi.destroy();
        res.status(204).send(); // No content response
    }
    catch (error) {
        console.error("Error deleting demandeEmploi:", error);
        res.status(500).json({ error: "Failed to delete demandeEmploi" });
    }
});
exports.deleteDemandeEmploi = deleteDemandeEmploi;
