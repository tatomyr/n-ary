const nAry = (base = 2) => {
  // Base aka arity:
  const range = base - 1;

  // Zero vector:
  const zero = length => Array(length).fill(0);

  // The last vector:
  const last = length => Array(length).fill(range);

  // A random vector:
  const random = length => zero(length).map(digit => Math.floor(Math.random() * base));

  // (base)-ary incrementation:
  const inc = vector => {
    const index = vector.findIndex(digit => digit < range);
    return index === -1 ? (
      zero(vector.length)
    ) : [
      ...zero(index),
      vector[index] + 1,
      ...vector.filter((_, i) => i > index)
    ];
  }

  // Brute force:
  const all = length => {
    const vectors = [zero(length)];
    for (let i = 1; i < Math.pow(base, length); i++) {
      vectors.push(inc(vectors[i - 1]));
    }
    return vectors;
  }

  // Generates just the n-ary verge of the (length)-dimension table:
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
  const verge = length => all(length).filter(vector => vector.some(digit => digit === range));

  // Set of (count) random vectors:
  const randomSet = length => count => zero(count).map(() => random(length));

  // Convert (base)-ary number to decimal:
  const index = vector => vector.reduce((sum, item, i) => sum + item * Math.pow(base, i), 0);

  const sumOfDigits = vector => vector.reduce((sum, item) => sum + +item, 0);

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
  };
}
