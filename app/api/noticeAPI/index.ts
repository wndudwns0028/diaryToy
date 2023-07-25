import type { NextApiRequest, NextApiResponse } from "next";
import Test from "@/app/lib/counter/counter.model";

import { getNextSequenceValue } from "@/app/lib/counter/counter.model";
import dbConnect from "@/util/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      dbConnect();
      const tests = Test;

      const allTests = await tests.find({});

      res.status(200).json(allTests);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "POST") {
    try {
      dbConnect();
      const tests = Test;
      const { title, content } = req.body;
      const testId = await getNextSequenceValue("testId");
      const test = new tests({ testId, title, content });
      await test.save();
      res.status(200).json({ message: "Test created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
