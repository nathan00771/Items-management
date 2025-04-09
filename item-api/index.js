// item-api/index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory "database"
let items = [
  {
    id: 1,
    name: "Item One",
    type: "Type A",
    category: "Category X",
    price: 100,
  },
  {
    id: 2,
    name: "Item Two",
    type: "Type B",
    category: "Category Y",
    price: 150,
  },
  {
    id: 3,
    name: "Item Three",
    type: "Type A",
    category: "Category Z",
    price: 200,
  },
];

// Routes
app.get("/items", (req, res) => {
  res.json(items.filter((item) => !item.isDeleted));
});

app.post("/items", (req, res) => {
  const item = { ...req.body, id: Date.now(), isDeleted: false };
  items.push(item);
  res.status(201).json(item);
});

app.put("/items/:id", (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index !== -1) {
    items[index] = { ...items[index], ...req.body };
    res.json(items[index]);
  } else {
    res.status(404).send();
  }
});

app.patch("/items/:id", (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index !== -1) {
    items[index] = { ...items[index], ...req.body };
    res.json(items[index]);
  } else {
    res.status(404).send();
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Mock API running at http://localhost:${PORT}`);
});
