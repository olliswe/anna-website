import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "lfjsyk7d",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false,
});
