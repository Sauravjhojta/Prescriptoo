import express from 'express';
import { addDoctor,allDoctors,appointmentCancel,appointmentsAdmin,loginAdmin,adminDashboard} from '../controllers/adminController.mjs';
import upload from '../middlewares/multer.mjs';
import authAdmin from '../middlewares/authAdmin.mjs';
import { changeAvailablity } from '../controllers/doctorController.mjs';

const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.get("/all-doctors",authAdmin, allDoctors)
adminRouter.post("/add-doctor", authAdmin,upload.single('image'), addDoctor)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/appointments",authAdmin,appointmentsAdmin)
adminRouter.post("/cancel-appointment",authAdmin,appointmentCancel)
adminRouter.get("/dashboard",authAdmin,adminDashboard)


export default adminRouter;