function sumOfUnique(nums) {
    let dict = {}
    let total = 0;

    for (num of nums) {
        if (num in dict) dict[num] += 1
        else dict[num] = 1
    }

    for (sum in dict) {
        if (dict[sum] == 1) {
            total += parseInt(sum)
        }
    }

    return total
}

console.log(sumOfUnique([1, 2, 3, 2])) // 4
console.log(sumOfUnique([1, 1, 1, 1])) // 0
console.log(sumOfUnique([1, 2, 3, 4, 5])) // 15