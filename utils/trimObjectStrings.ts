function trimObjectStrings<T extends Record<string, any>>(
  obj: T,
  excludedKeys: Array<keyof T> = []
): T {
  const trimmedObj: T = {} as T;

  for (const key in obj) {
    if (typeof obj[key] === 'string' && !excludedKeys.includes(key as keyof T)) {
      trimmedObj[key as keyof T] = obj[key].trim() as any;
    } else {
      trimmedObj[key as keyof T] = obj[key];
    }
  }

  return trimmedObj;
}

export default trimObjectStrings;
