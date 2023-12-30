// lib/sanityClient.js
import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.NEXT_SANITY_API_READ_WRITE_TOKEN,
    useCdn: false,
    apiVersion: '2021-03-25', // Use a date at or after your project's dataset was created
});

export default client;
