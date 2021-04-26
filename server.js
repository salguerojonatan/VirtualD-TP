const bodyParser = require('body-parser');
const express = require('express');
const rp = require('request-promise');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
  // Obj guardamos el JSON que viene por POST.
  const obj = req.body;

    console.log(obj.dni);
    console.log(obj.apellido);
    console.log(obj.nombre);

    if (typeof obj.dni === 'undefined') {
        console.log('ERROR 1');
        return res.sendStatus(400);
    }

    // Dni debe ser un numero y debe tener menos de 10 caracteres
    if (isNaN(obj.dni) || ('' + obj.dni).length > 10) {
        console.log('ERROR 2');
        return res.sendStatus(400);
        
    }


    // Apellido obligatorio.
    if (obj.apellido.length == 0){
        console.log('ERROR 3');
        return res.sendStatus(400)
    }    

    // Nombre y apellido tienen que ser String
    if (typeof obj.nombre != 'string' || typeof obj.apellido != 'string'){
        console.log('ERROR 4');
        return res.sendStatus(400);
    }


    // Chequeamos que Nombre y Apellido no sean numeros.
  if (!isNaN(parseInt(obj.nombre)) || !isNaN(parseInt(obj.apellido))) {
    console.log('ERROR 5');
    return res.sendStatus(400);
  }
 

  // POST a firebaseio
  try {
      console.log('LLEGO');
    const response = await rp(
      'https://reclutamiento-14cf7.firebaseio.com/personas.json',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: obj,
        json: true,
      },
    );
    // Envio TODO OK
    res.status(201).send(response);
  } catch (error) {
    // Envio de error
    console.log('ERROR');
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log('Servidor abierto...');
});