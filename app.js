//console.log("Hello World");
//importo express
const express = require ('express');
//funzione per creare l'oggetto express
const app = express();
//definire la porta
const port = 3000;

//importare middleware per configurazione asset statici
app.use(express.static('public'));


//definire rotta principale
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

//definire rotta bacheca per restituire post
app.get('/bacheca', (req, res) => {
    //importo array 
    const posts = require("./posts.js");
  res.json(posts)
});

app.listen(port, () => {
 console.log(`Server in ascolto alla porta ${port}`);
});
