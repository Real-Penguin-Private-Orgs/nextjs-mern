import { Router } from "express";
import { addOne, getAll, getOne } from "../../models/Food.middleware"
const router = Router();

//GET ALL
router.get('/', getAll)

//GET ONE
router.get('/:id', getOne)

//POST ONE
router.post('/:company_id', addOne);

export default router;