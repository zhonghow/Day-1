function maxAscendingSum(nums) {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] <= nums[i - 1]) {
            currentSum = nums[i]
        } else {
            currentSum += nums[i];
        }
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum;
}

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50])) // 65 -> [5, 10, 50]
console.log(maxAscendingSum([10, 20, 30, 40, 50])) // 150
console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12])) // 33 -> [10, 11, 12]
