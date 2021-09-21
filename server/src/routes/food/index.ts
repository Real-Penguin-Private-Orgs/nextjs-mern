import { Router } from "express";
import { addOne, getAll } from "../../models/Food.middleware"
const router = Router();

//GET ALL
router.get('/', getAll)

//POST ONE
router.post('/:company_id', addOne);

export default router;