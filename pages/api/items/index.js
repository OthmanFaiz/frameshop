// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
	try {
		// const { id } = req.params
		const client = await clientPromise;
		const db = client.db('adrenaline');
		const items = await db.collection('items').find({}).toArray();
		res.status(200).json({ items });
	} catch (err) {
		console.log(err);
	}
}
