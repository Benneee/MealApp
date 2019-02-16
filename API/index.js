import express from "express";
import bodyParser from "body-parser";

const app = express();


app.use(bodyParser.json());


app.get('/', (req, res) => {
  return res.send('The API is working!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
