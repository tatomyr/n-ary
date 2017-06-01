// const nAry = base => ({
//   next: vector => {
//     const index = vector.findIndex(digit => digit < base);
//     return index === -1
//       ? Array(vector.length).fill(0)
//       : [...Array(index).fill(0), vector[index] + 1, ...vector.filter((_, i) => i > index)];
//   },
//
//   all: length => {
//     console.log(nAry(base));
//     const vectors = [Array(length).fill(0)];
//     for (let i = 1; i < Math.pow((base + 1), length); i++) {
//       vectors.push(nAry(base).next(vectors[i - 1]));
//     }
//     return vectors;
//   }
// });

const nAry = base => {
  const Zero = length => Array(length).fill(0);

  const next = vector => {
    const index = vector.findIndex(digit => digit < base);
    return index === -1 ? (
      Zero(vector.length)
    ) : [
      ...Zero(index),
      vector[index] + 1,
      ...vector.filter((_, i) => i > index)
    ];
  }

  const all = length => {
    const vectors = [Zero(length)];
    for (let i = 1; i < Math.pow(base + 1, length); i++) {
      vectors.push(next(vectors[i - 1]));
    }
    return vectors;
  }

  const random = length => Zero(length).map(digit => Math.floor(Math.random() * (base + 1)));

  const randomSet = length => count => Zero(count).map(() => random(length));

  // const index =

  return {
    Zero,
    next,
    all,
    random,
    randomSet,
  };
};
