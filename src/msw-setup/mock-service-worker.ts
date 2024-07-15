import { setupWorker, rest } from "msw";
import { mockData } from "./mock-data";

export const mockServiceWorker = setupWorker(
  rest.get("/api/data", async (req, res, ctx) => {
    return res(ctx.json(mockData));
  })
);
