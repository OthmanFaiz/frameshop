import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
	try {
		const client = await clientPromise;
		const db = client.db('adrenaline');
		const Adresses = await db.collection('Adresses').find({}).toArray();
		res.status(200).json({ Adresses });
	} catch (err) {
		console.log(err);
	}
}
