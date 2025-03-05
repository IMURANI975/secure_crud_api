import express from 'express';

import { getAlluser , CreateUser , deleteUser , updateUser} from '../Controllers/userController.js';

const userRoutes=express.Router();

export default userRoutes;
userRoutes.get("/getalluser",getAlluser);
userRoutes.get("/createuser",CreateUser);
userRoutes.delete("/delete/:id",deleteUser);
userRoutes.patch("/update/:id",updateuser);
