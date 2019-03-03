import MealService from "../services/meal.service";

const MealController = {
    fetchAllMeals(req, res) {
        const allMeals = MealService.fetchAllMeals();
        return res.json({
            status: "success",
            data: allMeals
        }).status(200);
    },

    addMeal(req, res) {
        /*
            Expect JSON of the following format:
            {
                name: "food name",
                size: "large",
                price: "900"
            }

        */

        const newMeal = req.body;
        const createdMeal = MealService.addMeal(newMeal);
        res.status(201);
        return res.json({
            status: "meal successfully added",
            data: createdMeal
        });
    },

    getSingleMeal(req, res) {
        const id = req.params.id;
        const foundMeal = MealService.getAMealById(id);
        let response = {};
        if (typeof foundMeal === 'object') {
            res.status(200);
            response = res.json({
                status: 'success',
                data: foundMeal,
            });
        } else {
            res.status(404);
            response = res.json({
                status: 'failed',
                message: `Meal with id: ${id} does not exist`
            });
        }
        return response;
    },

    editMeal(req, res) {
         /*
            Expect JSON of the following format:
            {
                "name": "food name",
                "size": "large",
                "price": "900"
            }

        */
        
        const { id } = req.params;
        const entry = req.body;
        const result = MealService.editAMeal(id, entry);
        let response = {};
        let status = 0;
        if (result.idAvailable) {
            response = {
                ...response,
                status: 'success',
                message: `Meal with id: ${id} edited successfully.`,
                data: result.editedMeal,
            };
            status = 202;
        } else {
            response = {
                ...response,
                status: 'error',
                message: `Meal with id: ${id} not found.`,
            };
            status = 404;
        }
        return res.status(status).json({
            response,
        });
    },

    deleteMeal(req, res) {
        const { id } = req.params;
        const idAvailable = MealService.deleteMealById(id);
        let response = {};
        let status = 0;
        if (idAvailable) {
            response = {
                ...response,
                status: 'success',
                message: `Meal with id: ${id} deleted successfully`,
            };
            status = 200;
        } else {
            response = {
                ...response,
                status: 'error',
                message: `Meal with id: ${id} not found.`,
            };
            status = 404;
        }
        return res.status(status).json({
            response,
        });
    },
};

export default MealController;