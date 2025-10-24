import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import trips from "./db.js";

const app = express();
const port = 4001;

app.use(cors());
app.use(bodyParser.json());

// Health/root endpoints (support both local '/' and deployed '/api')
app.get(["/", "/api"], (req, res) => {
  res.send("Hello World!");
});

// API endpoint under '/api' for Vercel rewrite and '/trips' for local dev
app.get(["/api/trips", "/trips"], (req, res) => {
  let keywords = req.query.keywords;

  if (keywords === undefined) {
    return res.status(400).json({
      message: "Please send keywords parameter in the URL endpoint",
    });
  }

  const regexKeywords = keywords.split(" ").join("|");
  const regex = new RegExp(regexKeywords, "ig");
  const results = trips.filter((trip) => {
    return (
      trip.title.match(regex) ||
      trip.description.match(regex) ||
      trip.tags.filter((tag) => tag.match(regex)).length
    );
  });

  return res.json({
    data: results,
  });
});

// Only start the server locally. On Vercel (serverless) this must be disabled.
if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
}

export default app;
