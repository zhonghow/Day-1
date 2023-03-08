function canBeIncreasing(nums) {
    // Rules:
    // 1. No Sorting
    // 2. Return True or False if the array is increasing after removing only "ONE" element

    // let newNum = []
    // let currentNum = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (!(nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) && (nums[i] != nums[i - 1] && nums[i] != nums[i + 1])) {
    //         newNum.push(nums[i])
    //     }
    // }
    // return newNum

    let removed = false

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            if (removed)
                return false;

            removed = true;

            if (i === 1 || nums[i] > nums[i - 2]) {
                nums[i - 1] = nums[i]
            } else {
                nums[i] = nums[i - 1]
            }
        }
    }

    return true
}

console.log(canBeIncreasing([1, 2, 10, 5, 7])); // true -> [1, 2, 5, 7]
console.log(canBeIncreasing([2, 3, 1, 2])); // false
console.log(canBeIncreasing([1, 1, 1])); // false
console.log(canBeIncreasing([1, 2, 3, 4, 5])); // true

// Some changes