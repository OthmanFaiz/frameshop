import clientPromise from "../../../lib/mongodb"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
  try {
    const {id} = req.query
    const o_id = new ObjectId(id)
    const client = await clientPromise
    const db = client.db('adrenaline')
    const item = await db.collection('items').findOne({_id: o_id})
    res.status(200).json({item})
  } catch (err) {
    console.log(err)
  }
}