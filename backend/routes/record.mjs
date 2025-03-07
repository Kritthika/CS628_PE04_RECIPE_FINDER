import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("records");
  let results = await collection.find({}).toArray();
  res.status(200).send(results);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("records");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) {
    return res.status(404).send("Not found");
  } else {
    return res.status(200).send(result);  // Ensure this includes all fields like `ingredients` and `description`
  }
});

// This section will help you create a new record.
  router.post("/", async (req, res) => {
  const { name, ingredients, description } = req.body;

  // Validate if the required fields are present
  if (!name || !ingredients || !description) {
    return res.status(400).send("Name, ingredients, and description are required.");
  }

  let newDocument = {
    name,
    ingredients,  // This should be an array
    description,   // This should be a string
  };

  try {
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    
    // Instead of result.ops[0], use result.insertedId to get the inserted document
    const insertedDocument = { ...newDocument, _id: result.insertedId };
    res.status(201).send(insertedDocument);  // Return the inserted document including _id
  } catch (error) {
    res.status(500).send("Error creating recipe: " + error.message);  // Handle any insertion errors
  }
});


// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: {
      name: req.body.name,
      ingredients: req.body.ingredients,
      description: req.body.description
    }
  };

  let collection = await db.collection("records");
  let result = await collection.updateOne(query, updates);

  res.status(200).send(result);
});

// This section will help you delete a record.
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("records");
  let result = await collection.deleteOne(query);

  res.status(200).send(result);
});

export default router;
