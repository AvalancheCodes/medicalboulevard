import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {apiVersion} from "@sanity/preview-url-secret/src/constants";
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'

const sanityStudioConfig = defineConfig({
    name: 'default',
    title: 'Medical Boulevard 2.0',
    projectId: 'bvap01dn',
    dataset: 'production',
    apiVersion: "2023-12/29",
    basePath:"/studio",
    plugins: [deskTool()]
    // schema: {
    //     types: schemaTypes,
    // },
})

export default sanityStudioConfig;
