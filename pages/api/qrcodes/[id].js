import dbConnect from "@/db/dbConnect";
import QRCode from "@/db/models/QRCode";
import mongoose from "mongoose";

export default async function handler(req, res) {
  await dbConnect();
  console.log(mongoose.connection.readyState); 
  const { id }= req.query;

  switch (req.method) {
    case 'GET':
      const data = await QRCode.findById(id);
      res.status(200).send(data);
      break;
    case 'PATCH':
      const updatedData = await QRCode.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.send(updatedData);
      break;
    case 'DELETE':
      await QRCode.findByIdAndDelete(id);
      res.status(204).send();
      break;
    default:
      res.status(404).send();
  }
}