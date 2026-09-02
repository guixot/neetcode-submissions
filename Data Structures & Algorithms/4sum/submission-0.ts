class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums: number[], target: number): number[][] {
        const result: number[][] = [];

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 3; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            for (let j = i + 1; j < nums.length - 2; j++) {
                if (j > i + 1 && nums[j] === nums[j - 1]) {
                    continue;
                }
                let left = j + 1;
                let right = nums.length - 1;

                while (left < right) {
                    const sum = nums[i] + nums[j] + nums[left] + nums[right];

                    if (sum < target) {
                        left++;
                    } else if (sum > target) {
                        right--;
                    } else {
                        result.push([nums[i], nums[j], nums[left], nums[right]]);
                        do {
                            left++;
                        } while (left < right && nums[left] === nums[left - 1]);
                        do {
                            right--;
                        } while (left < right && nums[right] === nums[right + 1]);
                    }
                }
            }
        }

        return result;
    }
}
