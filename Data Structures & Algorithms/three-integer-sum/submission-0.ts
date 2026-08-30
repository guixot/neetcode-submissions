class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums = nums.sort((a, b) => a - b);

        const result: number[][] = [];

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            const currentNumber = nums[i];

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = currentNumber + nums[left] + nums[right];
                if (sum === 0) {
                    result.push([currentNumber, nums[left], nums[right]]);
                    do {
                        right--;
                    } while (nums[right] === nums[right + 1]);
                    do {
                        left++;
                    } while (nums[left] === nums[left - 1]);
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
