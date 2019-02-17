import { Router } from "express";

// controller
import OrderController from '../controllers/order.controller';

const router = Router();

router.get('/', OrderController.getAllOrders);
router.put('/', OrderController.editOrder);
router.post('/', OrderController.addOrder);

export default router;