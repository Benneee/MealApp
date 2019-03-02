import  express  from 'express';
import bodyParser from 'body-parser';

// routes
import mealRoutes from './routes/meal.route';
import menuRoutes from './routes/meal.route';
import orderRoutes from './routes/order.route';


const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Welcome To Book-A-Meal!'));


// Routes
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);
app.use('/api/v1/orders', orderRoutes);

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
});

module.exports.app = app;
