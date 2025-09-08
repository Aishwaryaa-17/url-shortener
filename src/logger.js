import axios from "axios";

const LOG_API_URL = "http://20.244.56.144/evaluation-service/logs";

/**
 * Send log to external evaluation service
 */
export const Log = async (stack, level, pkg, message, token) => {
  try {
    await axios.post(
      LOG_API_URL,
      {
        stack: stack.toLowerCase(),
        level: level.toLowerCase(),
        package: pkg.toLowerCase(),
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return true;
  } catch {
    return false; // ignore error so UI doesn't break
  }
};