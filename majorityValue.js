function majorityItem(array) {

    let dict = {};
    let maxKey = null;
    let maxValue = -Infinity;

    for (num of array) {
        if (num in dict) dict[num] += 1
        else dict[num] = 1
    }

    for (item in dict) {
        if(dict[item] > maxValue) {
            maxValue = dict[item];
            maxKey = item
        }
    }



    return "Majority: " + maxKey;
}

console.log(majorityItem([1, 1, 1, 1, 2, 2])); // 1
console.log(majorityItem([1, 1, 2, 2, 3, 3, 3])); // 3
console.log(majorityItem([4, 4, 5, 5, 6, 7, 8, 8, 8, 8])); // 8