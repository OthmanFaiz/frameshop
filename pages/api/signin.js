import clientPromise from "../../lib/mongodb";

// needs securty improvment

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("adrenaline");
        const user = req.body;
        const checkuser = await db.collection("users").findOne({ email: user.email });
        res.status(200).json({ checkuser });
    } catch (err) {
        console.log(err);
    }
}