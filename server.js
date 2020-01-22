const express = require("express");

const db = require("./data/dbConfig");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  db("cars")
    .then(car => res.status(200).json(car))
    .catch(() => res.status(500).json({ error: "cars not found" }));
});

server.post("/", (req, res) => {
  db("cars")
    .insert(req.body)
    .then(car => res.status(200).json(car))
    .catch(() => res.status(500).json({ error: "cars not found" }));
});

server.delete("/:id", (req, res) => {
  const { id } = req.params;
  db("cars")
    .where({ id })
    .del()
    .then(car => res.status(200).json(car))
    .catch(() => res.status(500).json({ error: "cars not found" }));
});

module.exports = server;
