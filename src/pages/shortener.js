import React, { useState } from "react";
import { addLog } from "../middleware/loggermiddleware";
import { Log } from "../logger";
import { USER_TOKEN } from "../config";

function ShortenerPage() {
  const [url, setUrl] = useState("");
  const [validity, setValidity] = useState(30);
  const [shortcode, setShortcode] = useState("");

  const handleShorten = async () => {
    try {
      if (!url) {
        addLog("error", "shortener", "URL cannot be empty");
        await Log("frontend", "error", "shortener", "URL cannot be empty", USER_TOKEN);
        return;
      }

      // Generate shortcode (demo)
      const newCode = Math.random().toString(36).substring(2, 7);
      setShortcode(newCode);

      addLog("info", "shortener", `Short link created: ${newCode}`);
      await Log("frontend", "info", "shortener", `Short link created: ${newCode}`, USER_TOKEN);

    } catch (err) {
      addLog("error", "shortener", `Error creating short link: ${err.message}`);
      await Log("frontend", "error", "shortener", `Error creating short link: ${err.message}`, USER_TOKEN);
    }
  };

  return (
    <div className="shortener-container">
      <h2>URL Shortener</h2>
      <input
        type="text"
        placeholder="Enter long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="number"
        placeholder="Validity in minutes"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
      />
      <button onClick={handleShorten}>Shorten</button>

      {shortcode && (
        <p>
          Shortened URL: <b>http://localhost:3000/{shortcode}</b>
        </p>
      )}
    </div>
  );
}

export default ShortenerPage;
