const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// Route to fetch random quote from new external API
app.get("/api/quotes/random", async (req, res) => {
  try {
    console.log("Fetching random quote from external API...");
    const response = await axios.get(
      "https://quote-generator-api-six.vercel.app/api/quotes/random"
    );

    // The API returns an array with a single quote object
    console.log("Quote fetched successfully:", response.data);
    const quoteData = response.data;
    console.log("Quote data:", quoteData);

    res.json({
      text: quoteData.quote,
      author: quoteData.author,
    });
  } catch (error) {
    console.error("Error fetching quote:", error.message);
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
