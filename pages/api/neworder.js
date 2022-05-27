import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("adrenaline");
        const order = req.body
        const neworder = await db.collection("orders").insertOne(order);
        res.status(200).json({state: "success", neworder});
    } catch (err) {
        console.log(err);
    }
}