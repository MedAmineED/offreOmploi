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
// const express = require("express");
const express_1 = __importDefault(require("express"));
const dbConnexion_1 = require("./dbConfig/dbConnexion");
const userRouter_1 = __importDefault(require("./router/userRouter"));
const entrepriseRouter_1 = __importDefault(require("./router/entrepriseRouter"));
const offreRouter_1 = __importDefault(require("./router/offreRouter"));
const demandeEmploiRouter_1 = __importDefault(require("./router/demandeEmploiRouter"));
const authRouter_1 = __importDefault(require("./router/authRouter"));
const cors = require("cors");
// const {connexion} = require("./dbConfig/dbConnexion");
const app = (0, express_1.default)();
require('dotenv').config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(userRouter_1.default);
app.use(entrepriseRouter_1.default);
app.use(offreRouter_1.default);
app.use(demandeEmploiRouter_1.default);
app.use("/api/auth", authRouter_1.default);
// Cors Policy
app.use(cors({
    origin: "http://localhost:3000"
}));
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server is running on port ${PORT}`);
    yield (0, dbConnexion_1.Connection)();
}));
