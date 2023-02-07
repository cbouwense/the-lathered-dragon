import { batches } from "data";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
    return;
  }

  if (Object.keys(req.query).includes("id")) {
    const id = Number(req.query.id);
    const batch = batches.find((batch) => batch.id === id);
    if (batch) {
      res.status(200).json(batch);
      return;
    }
    res.status(404).json({ statusCode: 404, message: "Batch not found" });
    return;
  }

  if (Object.keys(req.query).includes("name")) {
    const name = String(req.query.name);
    const batch = batches.filter((batch) => batch.name?.includes(name));
    if (batch) {
      res.status(200).json(batch);
      return;
    }
    res.status(404).json({ statusCode: 404, message: "Batch not found" });
    return;
  }

  try {
    res.status(200).json(batches);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ statusCode: 500, message: errorMessage });
  }
}
