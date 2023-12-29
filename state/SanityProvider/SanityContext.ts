import { createContext } from 'react';
import { SanityClient } from '@sanity/client';

const SanityContext = createContext<SanityClient | null>(null);

export default SanityContext;