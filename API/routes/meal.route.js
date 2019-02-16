import { Router } from "express";

// controller
import MealController from '../controllers/meal.controller';

const router = Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addMeal);
router.put('/:id', MealController.editMeal);
router.post('/:id', MealController.getSingleMeal);
router.delete('/:id', MealController.deleteMeal);


export default router;