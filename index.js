const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv')
dotenv.config()

app.use(express.json());
app.get('/teste', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.port || port, () => console.log(`Servidor rodando na porta ${port}!`))