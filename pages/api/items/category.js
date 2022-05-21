import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
    const agg = [
        {
            '$project': {
                'category': 1, 
                '_id': 0
            }
        }, {
            '$group': {
                '_id': '$category', 
                'count': {
                '$sum': 1
                }
            }
        }
    ];
	try {
		const client = await clientPromise;
		const db = client.db('adrenaline');
		const items = await db.collection('items').aggregate(agg).toArray();
		res.status(200).json({ items });
	} catch (err) {
		console.log(err);
	}
}