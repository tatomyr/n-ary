# n-ary library

The `nAry(base)` provides a bunch of properties and methods to interact with (base)-ary number as a vector (or JavaScript array).

### Properties

* `nAry(base).base` simply returns the base of number

* `nAry(base).range` returns the maximum value each digit of (base)-ary number can reach (range = (base) - 1)

### Methods

* `nAry(base).zero(length)` returns a zero-filled vector with specified (length)

* `nAry(base).next(vector)` returns value next to the (vector). Simply, it's just an incrementation of (base)-ary number represented by (vector)

* `nAry(base).all(length)` returns all unique variants of (length)-large (base)-ary vector realizations

* `nAry(base).random(length)` returns random (length)-large vector, where each cell represents an appropriate digit of (base)-ary number

* `nAry(base).randomSet(length)(count)` returns a (count)-large set of random (base)-ary (length)-large vectors

* `nAry(base).index(vector)` coerce (base)-ary number represented by (vector) to the regular decimal number
