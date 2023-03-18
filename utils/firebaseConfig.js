import throwMissingEnvKey from "./throwMissingEnvKey";

const _publicFirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? throwMissingEnvKey('NEXT_PUBLIC_FIREBASE_API_KEY'),
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? throwMissingEnvKey('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'),
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? throwMissingEnvKey('NEXT_PUBLIC_FIREBASE_PROJECT_ID'),
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? throwMissingEnvKey('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? throwMissingEnvKey('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'),
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? throwMissingEnvKey('NEXT_PUBLIC_FIREBASE_APP_ID')
}

const publicFirebaseConfig = Object.freeze(_publicFirebaseConfig);
export default publicFirebaseConfig;
