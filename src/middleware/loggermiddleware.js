// In-memory log storage
let logs = [];

/**
 * Add a log entry to local store
 * @param {string} level - info | error
 * @param {string} pkg - module name
 * @param {string} message - log message
 */
export const addLog = (level, pkg, message) => {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    package: pkg,
    message,
  };
  logs.push(entry);
};

/**
 * Retrieve all logs
 */
export const getLogs = () => logs;