import mealDummyData from "../utils/mealDummyData";
import Meal from "../models/meal.model";

const MealService = {
    fetchAllMeals() {
        const validMeals = mealDummyData.meals.map((meal)=>{
            const newMeal = new Meal();
            newMeal.id = Meal.id;
            newMeal.name = Meal.name;
            newMeal.size = Meal.size;
            newMeal.price = Meal.price;
        });
        return validMeals;
    },

    addMeal(meal) {
        const mealLength = mealDummyData.meals.length;
        const lastId = mealDummyData.meals[mealLength - 1].id;
        const mealId = lastId + 1;
        meal.id = newId;

        mealDummyData.meals.push(meal)
        return meal;
    },

    getAMealById(id) {
        const meal = mealDummyData.meals.find(meal => meal.id == id);
        return meal || {};
    },

    deleteMealById(id) {
        const checkId = parseInt(id, Number);
        const newMealList = mealDummyData.meals.filter(meal => meal.id !== checkId);
        const idAvailable = (mealDummyData.meals.length !== newMealList.length);
        mealDummyData.meals = newMealList;

        return idAvailable;
    },

    editAMeal(id, meal) {
        const checkId = parseInt(id, Number);
        const newMealList = mealDummyData.meals.filter(meal => meal.id !== checkId);
        const idAvailable = (mealDummyData.meals.length !== newMealList.length);
        const editedMeal = {
            id = checkId,
            name: meal.name,
            size: meal.size,
            price: meal.pricee
        };
        mealDummyData.meals = [...newMealList, editedMeal];
        return {
            editedMeal,
            idAvailable,
        };
    }
};

export default MealService;