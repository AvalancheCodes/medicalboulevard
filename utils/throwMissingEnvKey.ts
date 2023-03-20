export default function throwMissingEnvKey(variableName): never {
  throw new Error(`Missing env configuration for '${variableName}' at ${process.env.NODE_ENV}`)
}
