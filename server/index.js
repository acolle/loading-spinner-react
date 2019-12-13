const express = require('express');
const cors = require('cors');

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.get('/load', (req, res) => {
  setTimeout(() => {
    res.json({ message: "This is from the server!"});
  }, 4000);
})

server.listen(8080, () => console.log("Listening on port 8080"));
