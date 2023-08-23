import dbConnect from "@/db/dbConnect";
import QRCode from "@/db/models/QRCode";
import mongoose from "mongoose";

export default async function handler(req, res) {
  await dbConnect();
  console.log(mongoose.connection.readyState); 
  const body = req.body;

  switch (req.method) {
    case 'GET':
      const dataList = await QRCode.find()
      res.status(200).send(dataList);
      break;
    case 'POST':
      const newData = await QRCode.create(body);
      res.status(201).send(newData);
      break;
    default:
      res.status(404).send();
  }
}
