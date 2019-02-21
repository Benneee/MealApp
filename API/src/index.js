import express from "express";
import bodyParser from "body-parser";

// routes
import mealRoutes from "../src/routes/meal.route";
import menuRoutes from "../src/routes/menu.route";
import orderRoutes from "../src/routes/order.route";


const app = express();


app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Holla Benneee!'));


// Routes
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);
app.use('/api/v1/orders', orderRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});


module.exports.app = app;