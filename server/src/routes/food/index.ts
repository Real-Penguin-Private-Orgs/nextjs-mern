import { Router } from "express";
import { addOne, getAll, getOne } from "../../models/Food.middleware"
const router = Router();

//GET ALL
router.get('/', getAll)

//POST ONE
router.post('/:company_id', addOne);
//GET ONE
router.get('/:id', getOne)


export default router;