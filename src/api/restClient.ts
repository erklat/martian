import axios from "axios";

// Create an instance of axios with custom configuration
const restClient = axios.create({
  baseURL: "https://demo.martian.services/api", // Base URL for all requests
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json", // Default content type for requests
    // Add other default headers as needed
  },
});

// Add interceptor to modify request headers
restClient.interceptors.request.use(
  (config) => {
    // Add X-Auth header with the value "bWFydGlhbmFuZG1hY2hpbmU="
    config.headers["X-Auth"] = "bWFydGlhbmFuZG1hY2hpbmU=";
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Optionally, you can also add interceptors for handling responses

export default restClient;
