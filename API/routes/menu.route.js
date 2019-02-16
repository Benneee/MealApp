import { Router } from "express";

// controller
import MenuController from '../controllers/menu.controller';

const router = Router();

router.get('/', MenuController.getMenu);
router.post('/', MenuController.addMenu);


export default router;