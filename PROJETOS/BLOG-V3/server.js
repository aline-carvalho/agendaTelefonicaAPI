const app = require('./app');
const porta = 5000; 

app.listen(porta, () =>{
    console.log(`Servidor rodando no http://localhost:${porta}`)
})