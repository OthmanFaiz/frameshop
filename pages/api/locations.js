import clientPromise from '../../lib/mongodb';

export default async function handler(req,res){
    try{
        const client = await clientPromise
        const db = client.db('adrenaline')
        const locations = await db.collection('locations').find({}).toArray()
        res.status(200).json({locations})
    } catch (err){
        console.log(err)
    }
}