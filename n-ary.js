const nAry = (base = 2) => (length = 1) => {
  // Max each digit value:
  const range = base - 1;

  // Zero vector:
  const zero = () => Array(length).fill(0);

  // The last vector:
  const last = () => Array(length).fill(range);

  // A random vector:
  const random = () => zero().map(digit => Math.floor(Math.random() * base));

  // (base)-ary incrementation:
  const inc = (vector) => {
    const index = vector.findIndex(digit => digit < range);
    return index === -1 ? (
      zero()
    ) : [
      ...Array(index).fill(0),
      vector[index] + 1,
      ...vector.filter((_, i) => i > index)
    ];
  }

  // Brute force:
  const all = () => {
    const vectors = [zero()];
    for (let i = 1; i < Math.pow(base, length); i++) {
      vectors.push(inc(vectors[i - 1]));
    }
    return vectors;
  }

  // Generates just the (base)-ary verge of the (length)-dimension table:
  // const verge = length => {
  //   const vectors = [last(length)];
  //   for (let i = 1; i < Math.pow(base, length) - Math.pow(range, length); i++) {
  //     const vector = inc(vectors[i - 1]);
  //
  //     console.log(Math.pow(base, length) - Math.pow(range, length), vector);
  //
  //     if (vector.some(digit => digit === range)) vectors.push(vector);
  //   }
  //   return vectors;
  // }
  const verge = () => all().filter(vector => vector.some(digit => digit === range));

  // Set of (count) random vectors:
  const randomSet = count => Array(count).fill(0).map(() => random());

  // Convert (base)-ary number to decimal:
  const index = vector => vector.reduce((sum, item, i) => sum + item * Math.pow(base, i), 0);

  const sumOfDigits = vector => vector.reduce((sum, item) => sum + +item, 0);

  // Returns all vectors with specified sum of digits value
  const sumEquals = value => all().filter(vector => sumOfDigits(vector) === value);

  // Generates chunks of datasets.
  // const chunk = length => maxChunkCount => ...


  /*
    Or, maybe, we should type smth like: `nAry(base)(length || vector).inc()`
  */

  return {
    base,
    range,
    zero,
    last,
    random,
    inc,
    all,
    verge,
    randomSet,
    index,
    sumOfDigits,
    sumEquals,
  };
}
