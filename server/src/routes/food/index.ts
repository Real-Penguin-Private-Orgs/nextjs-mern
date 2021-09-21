import { Router } from "express";
import { getAll } from "../../models/Food.middleware"
const router = Router();

//GET ALL
router.get('/', getAll)

export default router;