// Source : https://leetcode-cn.com/problems/divide-two-integers/description/
// Author : dsphoebe
// Date   : 2018-11-25

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var divide = function(dividend, divisor) {
  var MAX_INT = ~(1 << 31)
  var MIN_INT = 1 << 31

  if (divisor === 0) {
    return dividend < 0 ? -Infinity : Infinity
  }

  if (divisor === -1 && dividend === MIN_INT) {
    return MAX_INT
  }

  if (divisor === 1) {
    return dividend
  }

  var dvd = Math.abs(dividend) > MAX_INT && MAX_INT || Math.abs(dividend)
  var dvs = Math.abs(divisor) > MAX_INT && MAX_INT || Math.abs(divisor)

  var res = 0

  while (dvs <= dvd) {
    var tmp = dvs
    for (var i = 1; dvd >= tmp; i <<= 1, tmp <<= 1) {
      dvd -= tmp
      res += i
    }
  }

  return (dividend < 0) ^ (divisor < 0) ? -res : res
}