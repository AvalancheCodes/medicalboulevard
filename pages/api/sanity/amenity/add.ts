
import amenity from "../../../../schemas/property/amenity";
import client from "../client";

export default async function handler(req, res) {

    // Check for the Bearer token
    if (req.headers.authorization !== `Bearer ${process.env.NEXT_SANITY_API_READ_WRITE_TOKEN}`) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    if (req.method === 'POST') {
        const amenities = req.body;
        try {
            const createMutations = amenities.map(amenity => ({
                create: {
                    _type: 'amenity',
                    ...amenity,
                }
            }));

            const transaction = await client.transaction(createMutations).commit();

            res.status(200).json({ message: 'Amenities populated successfully', transaction });
        } catch (error) {
            console.error('Error populating amenities:', error);
            res.status(500).json({ message: 'Error adding amenities', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
    //     res.status(200).json({ message: req.body });
}