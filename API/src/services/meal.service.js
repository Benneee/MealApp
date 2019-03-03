import mealDummyData from "../utils/mealDummyData";
import Meal from "../models/meal.model";

const MealService = {
    fetchAllMeals() {
        const validMeals = mealDummyData.meals.map((meal)=>{
            const newMeal = new Meal();
            newMeal.id = meal.id;
            newMeal.name = meal.name;
            newMeal.size = meal.size;
            newMeal.price = meal.price;
            return newMeal;
        });
        return validMeals;
    },

    addMeal(meal) {
        const mealLength = mealDummyData.meals.length;
        const lastId = mealDummyData.meals[mealLength - 1].id;
        const newId = lastId + 1;
        meal.id = newId;
        mealDummyData.meals.push(meal);
        return mealDummyData.meals;
    },

    getAMealById(id) {
        const meal = mealDummyData.meals.find(meal => meal.id == id);
        if (meal) {
            return meal;
        } else {
            return `Meal with id: ${id} does not exist`
        }
    },

    deleteMealById(id) {
        const checkId = parseInt(id, Number);
        const newMealList = mealDummyData.meals.filter(meal => meal.id !== checkId);
        const idAvailable = (mealDummyData.meals.length !== newMealList.length);
        
        if(idAvailable) {
            mealDummyData.meals = [ ...newMealList];
        }
        return {
            idAvailable
        }
    },

    editAMeal(id, meal) {
        const checkId = parseInt(id, Number);
        const newMealList = mealDummyData.meals.filter(meal => meal.id !== checkId);
        const idAvailable = (mealDummyData.meals.length !== newMealList.length);
        const editedMeal = {
            id : checkId,
            name: meal.name,
            size: meal.size,
            price: meal.price,
        };
        if (idAvailable) {
            mealDummyData.meals = [editedMeal, ...newMealList];
        }
        return {
            idAvailable,
            editedMeal,
        };
    }
};

export default MealService;