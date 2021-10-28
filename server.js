const express = require('express');
const app = express();
const router = require('./red/rutas')
const bodyParser = require('body-parser')

app.set('port', process.env.PORT || 4000);
app.use(bodyParser.json());


router(app);

app.listen(app.get('port'),()=>{
    console.log(`Ecuchando en el puerto ${app.get('port')}`)
})

