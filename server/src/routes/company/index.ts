import { Router } from "express";
import { createOne, deleteOne, getAll, getOne } from "../../models/Company.middleware";
const router = Router();

//GET ALL
router.get('/', getAll)

//GET ONE
router.get('/:id', getOne)

//CREATE ONE
router.post('/', createOne)

//DELETE ONE
router.get('/:id', deleteOne)

export default router;