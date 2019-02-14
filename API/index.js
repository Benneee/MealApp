import express from 'express';
const app = express();

app.get('/', (req, res) => {
    return res.send('The API is working!');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});