import express from "express";
import bodyParser from "body-parser";

// routes
import mealRoutes from "../api/routes/meal.route";
import menuRoutes from "../api/routes/menu.route";



const app = express();


app.use(bodyParser.json());


app.get('/', (req, res) => {
  return res.send('The API is working!');
});


// Routes
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
