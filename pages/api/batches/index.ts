import { Batch, batches } from "data";
import { DateTime } from "luxon";
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

  if (Object.keys(req.query).length === 0) {
    res.status(200).json(batches);
    return;
  }

  const batchesMatchingQuery = new Set<Batch>();

  if (Object.keys(req.query).includes("id")) {
    const id = Number(req.query.id);
    const batch = batches.find((batch) => batch.id === id);
    if (batch) {
      batchesMatchingQuery.add(batch);
    }
  }

  if (Object.keys(req.query).includes("name")) {
    const name = String(req.query.name);
    batches.forEach((batch) => {
      console.log({ name: batch.name, matches: batch.name?.includes(name) })
      if (batch.name?.includes(name)) {
        batchesMatchingQuery.add(batch);
      }
    });
  }

  if (Object.keys(req.query).includes("pourDate")) {
    const pourDate = DateTime.fromISO(String(req.query.pourDate));
    batches.forEach((batch) => {
      if (batch.pourDate === pourDate) {
        batchesMatchingQuery.add(batch);
      }
    });
  }

  try {
    res.status(200).json([...batchesMatchingQuery]);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ statusCode: 500, message: errorMessage });
  }
}
