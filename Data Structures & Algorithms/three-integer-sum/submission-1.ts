class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const numsSorted = [...nums].sort((a, b) => a - b);

        const result: number[][] = [];

        for (let i = 0; i < numsSorted.length; i++) {
            if (i > 0 && numsSorted[i] === numsSorted[i - 1]) {
                continue;
            }
            const currentNumber = numsSorted[i];

            let left = i + 1;
            let right = numsSorted.length - 1;

            while (left < right) {
                const sum = currentNumber + numsSorted[left] + numsSorted[right];
                if (sum === 0) {
                    result.push([currentNumber, numsSorted[left], numsSorted[right]]);
                    do {
                        right--;
                    } while (left < right && numsSorted[right] === numsSorted[right + 1]);
                    do {
                        left++;
                    } while (left < right && numsSorted[left] === numsSorted[left - 1]);
                } else if (sum > 0) {
                    right--;
                } else {
                    // if (sum < 0) {
                    left++;
                }
            }
        }

        return result;
    }
}
