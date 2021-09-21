import { Router } from "express";
import companyRoutes from './company/index'
import foodRoutes from './food/index'
const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Hi'
    })
})

router.use('/company', companyRoutes)
router.use('/food', foodRoutes)

export default router;