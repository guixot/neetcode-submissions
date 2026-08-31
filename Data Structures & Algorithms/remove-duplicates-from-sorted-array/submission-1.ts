class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let result = 1;

        let left = 0;

        for (let right = 0; right < nums.length; right++) {
            if (nums[right] !== nums[left]) {
                left++;
                nums[left] = nums[right];
                result++;
            }
        }

        return result;
    }
}
