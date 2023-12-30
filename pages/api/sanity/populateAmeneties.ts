// create an public api route to populate the ameneties collection
// import { NextApiRequest, NextApiResponse } from 'next';

import amenity from "../../../schemas/property/amenity";


export default async function handler(req, res) {

    // Check for the Bearer token
    if (req.headers.authorization !== `Bearer ${process.env.NEXT_SANITY_API_READ_WRITE_TOKEN}`) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    res.status(200).json({ message: 'ok' });
}