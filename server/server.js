const express = require('express');
const cors = require('cors');
//const bodyParser = require('body-parser');
const port = 3000;

const server = express();
server.use(cors());
//server.use(bodyParser.json());


server.listen(port, () => console.log(`Server started in http://localhost:${port}`));

music = ["Jazz","Rock","Pop","Heavy Metal","Opera"];
movies = ["Horror","Adventure","Comedy","Sci-fi","Drama"];
food = ["Pizza","Pasta","Burger","Tacos","Hotdogs"];
drinks = ["Whiskey","Beer","Wine","Jin","Tequila"];

server.get('/', (req, res) => res.send('Hello World!'))

server.get('/music', (req, res) => res.send({music}));
server.get('/movies', (req, res) => res.send({movies}));
server.get('/food', (req, res) => res.send({food}));
server.get('/drinks', (req, res) => res.send({drinks}));