// pages/api/populateAmenities.js

import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'yourProjectId', // Replace with your project ID
    dataset: 'yourDatasetName', // Replace with your dataset name
    token: 'yourSanityWriteToken', // Replace with your Sanity token
    apiVersion: '2021-03-25', // Use a date at or after your project's dataset was created
    useCdn: false
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Define your amenities array here
            const amenities = [
                // ... your amenities array ...
            ];

            // Create all amenities in Sanity
            const creationPromises = amenities.map(amenity =>
                client.create({
                    _type: 'amenity',
                    ...amenity
                })
            );

            // Await all promises to resolve
            const results = await Promise.all(creationPromises);

            // Send back a success response
            res.status(200).json({ message: 'Amenities populated successfully', results });
        } catch (error) {
            // If an error occurs, send back an error response
            res.status(500).json({ message: 'Error populating amenities', error: error.message });
        }
    } else {
        // Handle any requests that aren't POST
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
