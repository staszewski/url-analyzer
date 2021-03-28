export const BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000/api"
    : "https://url-analyzer-backend.vercel.app/api";
