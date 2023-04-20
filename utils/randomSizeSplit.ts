export default function randomSizeSplit<T>(arr: T[], min: number, max: number): Array<T[]> {
  // Check arguments.

  if (min > arr.length || max <= min)
    return [arr];

  let res = [], i = 0, rnd;

  while (i < arr.length) {
    rnd = Math.floor(Math.random() * (max - min)) + min;
    res.push(arr.slice(i, i + rnd));
    i += rnd;
  }

  if (res.some(x => x.length < min))
    return randomSizeSplit(arr, min, max)
  else
    return res;
}
