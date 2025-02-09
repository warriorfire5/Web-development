/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
    let cnt = 1;
    for (let i = 0; i < n; i++){
        cnt *= x;
    }
    return cnt;
}

console.log(pow(2, 5))