
import express from 'express';
const doctorRouter = express.Router();
import { doctorList } from '../controllers/doctorController.mjs';

doctorRouter.get("/list", doctorList);


export default doctorRouter