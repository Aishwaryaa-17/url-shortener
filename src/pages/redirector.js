import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { addLog } from "../middleware/loggermiddleware";
import { Log } from "../logger";
import { USER_TOKEN } from "../config";

function Redirector() {
  const { shortcode } = useParams();

  useEffect(() => {
    const redirect = async () => {
      try {
        // Demo: Replace with real lookup logic
        const originalUrl = "https://example.com";

        addLog("info", "redirector", `Redirecting ${shortcode} -> ${originalUrl}`);
        await Log("frontend", "info", "redirector", `Redirecting ${shortcode} -> ${originalUrl}`, USER_TOKEN);

        window.location.href = originalUrl;
      } catch (err) {
        addLog("error", "redirector", `Redirect failed for ${shortcode}`);
        await Log("frontend", "error", "redirector", `Redirect failed for ${shortcode}: ${err.message}`, USER_TOKEN);
      }
    };

    redirect();
  }, [shortcode]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}

export default Redirector;
