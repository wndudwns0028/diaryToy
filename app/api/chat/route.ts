import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: any) {
  const message = req.body;

  // on('message')가 메시지를 받음
  res?.socket?.server?.io?.emit("message", message);

  res.status(201).json(message);
}
