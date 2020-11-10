const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

const server = express();
server.use(cors());
server.use(bodyParser.json());


server.listen(port, () => console.log(`Server started in http://localhost:${port}`));