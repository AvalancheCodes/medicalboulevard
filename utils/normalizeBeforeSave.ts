function applyFnRecursively(obj: any, fn: (value: any) => any): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => applyFnRecursively(item, fn));
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        applyFnRecursively(value, fn),
      ])
    );
  } else {
    return fn(obj);
  }
}

function removeIdRecursively(obj: any): any {
  return applyFnRecursively(obj, (value) =>
    typeof value === 'object' && value !== null ? Object.fromEntries(
      Object.entries(value).filter(([key]) => key !== '_id')
        .map(([key, val]) => [key, removeIdRecursively(val)])
    ) : value
  );
}

function removeFunctionsRecursively(obj: any): any {
  return applyFnRecursively(obj, (value) =>
    typeof value === 'object' && value !== null
      ? Object.fromEntries(
        Object.entries(value)
          .filter(([_, val]) => typeof val !== 'function')
          .map(([key, val]) => [key, removeFunctionsRecursively(val)])
      )
      : value
  );
}

function trimStringsRecursively(obj: any): any {
  return applyFnRecursively(obj, (value) =>
    typeof value === 'string' ? value.trim() : value
  );
}

export default function normalizeBeforeSave(obj) {
  return [
    removeIdRecursively,
    removeFunctionsRecursively,
    trimStringsRecursively
  ].reduce((acc, fn) => fn(acc), obj);
}
