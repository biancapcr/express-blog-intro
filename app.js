//console.log("Hello World");
//importo express
const express = require ('express');
//funzione per creare l'oggetto express
const app = express();
//definire la porta
const port = 3000;

//definire rotta principale
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

app.listen(port, () => {
  console.log('Server in ascolto alla porta ${port}');
});
