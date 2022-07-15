const express = require('express');
const app = express();
const port = 3000;
const rotas = require('./rotas');

app.use(express.json());
app.use(rotas); 

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`))