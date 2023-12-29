// sanityClient.js
import { createClient, SanityClient } from 'next-sanity';


const config = {
    projectId: "bvap01dn", // Find these in your Sanity project settings
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false, // `false` if you want to ensure fresh data
};

export const sanityClient: SanityClient = createClient(config);
