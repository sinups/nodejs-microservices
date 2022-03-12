const express = require("express");
const app = express();
const port = 9000;

// Messajul afisat
app.get("/", (req, res) => res.json({ message: "Hi Service 1" }));

app.listen(port, () => console.log(`One service running on port ${port}`));
