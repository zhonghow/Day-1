function closeToZero(array) {
    if (array.length == 0) return null;
    let closestNum = array[0];

    for (let i = 1; i < array.length; i++) {
        let currentNum = array[i]
        if (Math.abs(currentNum) < Math.abs(closestNum)) closestNum = currentNum;
    }
    return closestNum
}

console.log(closeToZero([-4, -2, 1, 4, 8])); // 1
console.log(closeToZero([2, -1, 1])); // 1