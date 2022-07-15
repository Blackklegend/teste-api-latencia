require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT || 3000, () => console.log(`Servidor rodando na porta ${port}!`))