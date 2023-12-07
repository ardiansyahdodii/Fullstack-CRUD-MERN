import express from "express";
import {creatUser, deleteUser, getUsers, getUsersById, updateUser} from "../controllers/userController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', creatUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;