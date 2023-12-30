"use client";
import { NextStudio } from "next-sanity/studio";
import sanityStudioConfig from "../../sanity.config";

export default function Index(){
    return <NextStudio config={sanityStudioConfig} />;
}