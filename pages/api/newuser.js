import clientPromise from "../../lib/mongodb";

export default async function handler(req,res) {
    try {
        const client = await clientPromise;
        const db = client.db("adrenaline");
        const user = req.body;
        const newuser = await db.collection("users").insertOne(user);
        res.status(200).json({state: "success", newuser});
    } catch (err) {
        console.log(err);
    }
}