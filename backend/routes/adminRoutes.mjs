import express from 'express';
import { addDoctor,allDoctors,loginAdmin} from '../controllers/adminController.mjs';
import upload from '../middlewares/multer.mjs';
import authAdmin from '../middlewares/authAdmin.mjs';
import { changeAvailablity } from '../controllers/doctorController.mjs';

const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.get("/all-doctors",authAdmin, allDoctors)
adminRouter.post("/add-doctor", authAdmin,upload.single('image'), addDoctor)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)


export default adminRouter;