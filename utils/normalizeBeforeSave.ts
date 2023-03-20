export default function normalizeBeforeSave(obj) {
  const json = JSON.stringify(obj);
  return JSON.parse(json);
}
