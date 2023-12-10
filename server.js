// Import required modules
import express from "express";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors"; // Import the 'cors' package

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an Express application
const app = express();

// Use the 'cors' middleware to enable CORS
app.use(cors());

// Define a route to serve collegeData.json
app.get("/getColleges", (req, res) => {
  fs.readFile(__dirname + "/collegeData.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
