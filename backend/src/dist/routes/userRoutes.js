"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const userRoutes = express_1.default.Router();
//get user list
userRoutes.get("/api/user", userController_1.getAllUsers);
//get user by id
userRoutes.get("/api/userbyid/:id", userController_1.getUserById);
// POST /api/user - Create a new user
userRoutes.post("/api/user", userController_1.createUser);
//update user
userRoutes.put("/api/user/:id", userController_1.updateUser);
//delete user 
userRoutes.delete("/api/user/:id", userController_1.deleteUser);
exports.default = userRoutes;
