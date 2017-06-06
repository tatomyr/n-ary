# n-ary library

The `nAry(base)(length)` provides a bunch of properties and methods to interact with (base)-ary (length)-large number as a vector (or JavaScript array).

### Properties

* `nAry(base)(length).base` simply returns the base of a number

* `nAry(base)(length).length` simply returns the count of digits in a number

* `nAry(base)(length).range` returns the maximum value each digit of (base)-ary number can reach (range = (base) - 1)

* `nAry(base)(length).zero` returns a zero-filled vector with specified (length)

* `nAry(base)(length).last` returns a (range)-filled vector with specified (length)

### Methods

* `nAry(base)(length).random()` returns random (length)-large vector, where each cell represents an appropriate digit of (base)-ary number

* `nAry(base)([length]).inc(vector)` returns value next to the (vector). Simply, it's just an incrementation of (base)-ary number represented by (vector)

* `nAry(base)(length).all()` returns all unique variants of (length)-large (base)-ary vector realizations

* `nAry(base)(length).verge()` returns only the (base)-ary verge of the (length)-dimension table

* `nAry(base)(length).randomSet(count)` returns a (count)-large set of random (base)-ary (length)-large vectors

* `nAry(base)([length]).index(vector)` coerce (base)-ary number represented by (vector) to the regular decimal number

* `nAry(base)([length]).sumOfDigits(vector)` returns sum of all digits of (vector)

* `nAry(base)(length).sumEquals(value)` returns all variants of (base)-ary (length)-large vectors with specified sum of digits
