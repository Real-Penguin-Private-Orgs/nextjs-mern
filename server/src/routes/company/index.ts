import { Router } from "express";
import { createOne, deleteOne, getAll, getOne, updateOne } from "../../models/Company.middleware";
const router = Router();

//GET ALL
router.get('/', getAll)

//GET ONE
router.get('/:id', getOne)

//CREATE ONE
router.post('/', createOne)

//UPDATE ONE
router.put('/:id', updateOne)

//DELETE ONE
router.get('/:id', deleteOne)

export default router;